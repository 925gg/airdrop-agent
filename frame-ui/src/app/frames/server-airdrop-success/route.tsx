/* eslint-disable react/jsx-key */
import { Button } from "frames.js/next";
import { getXmtpFrameMessage } from "frames.js/xmtp";
import { frames } from "../frames";
import { get } from "lodash/fp";
import { getChestAirdrop } from "@/app/services/fortune-draw";
import { airdropChests } from "@/app/services/airdrop-chests";
import { ethers } from "ethers";
import { ChibiBattleItemForAirdrop__factory } from "@/app/services/contracts";
import dayjs from "dayjs";

const getBufferedGasLimit = (estimatedGas: bigint): bigint => {
  const threshold = 1.5;
  return (estimatedGas * BigInt(threshold * 100)) / 100n;
};

const handleRequest = frames(async (ctx) => {
  if (!get("verifiedWalletAddress", ctx.message)) {
    throw new Error("Please connect your wallet");
  }

  const luckScore = +ctx.searchParams.score;
  console.log("🚀 ~ POST ~ luckScore:", luckScore);
  let [bronze, silver] = getChestAirdrop(luckScore); // bronze, silver

  console.log(`prize = ${JSON.stringify([bronze, silver])}`);

  // airdropChests(silver, bronze, get("verifiedWalletAddress", ctx.message));
  const baseProvider = new ethers.JsonRpcProvider(process.env.BASE_RPC_URL);
  const airdropWallet = new ethers.Wallet(
    process.env.CHIBI_BATTLE_ITEM_MINT_FROM_CHEST_PRIVATE_KEY as string,
    baseProvider
  );
  const minter = ChibiBattleItemForAirdrop__factory.connect(
    process.env.CONTRACT_BATTLE_ITEM_ADDRESS as string,
    airdropWallet
  );

  const transactionId = 1e10 + dayjs().unix();
  const estimatedGas = await minter.mintFromChests.estimateGas(
    transactionId,
    0,
    get("verifiedWalletAddress", ctx.message),
    bronze,
    silver,
    0,
    0
  );

  const tx = await minter.mintFromChests(
    transactionId,
    0,
    get("verifiedWalletAddress", ctx.message),
    bronze,
    silver,
    0,
    0,
    {
      gasLimit: getBufferedGasLimit(estimatedGas),
    }
  );

  return {
    image: (
      <div
        tw="flex flex-col w-screen h-screen justify-center items-center"
        style={{ fontFamily: "UTM Azuki" }}
      >
        <div tw="w-full flex justify-center items-center text-4xl font-bold text-center">
          Claim Airdrop successfully!
        </div>
      </div>
    ),
    buttons: [
      <Button
        action="link"
        target={`${process.env.BASE_EXPLORER_URL}/tx/${tx.hash}`}
      >
        View on Explorer
      </Button>,
      <Button action="post" target={{ pathname: "/" }}>
        Draw Again
      </Button>,
    ],
  };
});

export const POST = handleRequest;
