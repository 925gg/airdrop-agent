import { encodeFunctionData } from "viem";
import { frames } from "../frames";
import { transaction } from "frames.js/core";
import { ethers } from "ethers";
import { ChibiBattleItemForAirdrop__factory } from "@/app/services/contracts";
import dayjs from "dayjs";
import { generateSignature } from "@/app/services/generate-airdrop-signature";
import { privateKeyToAccount } from "viem/accounts";
import { getChestAirdrop } from "@/app/services/fortune-draw";

export const POST = frames(async (ctx) => {
  if (!ctx.message?.address) {
    throw new Error("Please connect your wallet");
  }

  const luckScore = +ctx.searchParams.score;
  console.log("🚀 ~ POST ~ luckScore:", luckScore);
  let [bronze, silver] = getChestAirdrop(luckScore); // bronze, silver

  console.log(`prize = ${JSON.stringify([bronze, silver])}`);

  const transactionId = 1e10 + dayjs().unix();
  const { signature, expiredAt } = await generateSignature(
    transactionId,
    ctx.message.address
  );

  console.log("signature=", signature);
  console.log("expiredAt=", expiredAt);

  const callData = encodeFunctionData({
    abi: ChibiBattleItemForAirdrop__factory.abi,
    functionName: "getAirdrop",
    args: [
      BigInt(transactionId),
      ctx.message.address,
      BigInt(bronze),
      BigInt(silver),
      BigInt(0),
      BigInt(0),
      signature as `0x${string}`,
      BigInt(expiredAt),
    ],
  });

  const chainId = `eip155:${process.env.BASE_CHAIN_ID}`;

  console.log("🚀 ~ POST ~ chainId:", chainId);
  // Return transaction data that conforms to the correct type
  return transaction({
    chainId: chainId,
    method: "eth_sendTransaction",
    params: {
      abi: ChibiBattleItemForAirdrop__factory.abi,
      to: process.env.CONTRACT_BATTLE_ITEM_ADDRESS as `0x${string}`,
      data: callData,
    },
  });
});
