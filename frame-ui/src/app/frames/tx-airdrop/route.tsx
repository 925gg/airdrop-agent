import { encodeFunctionData } from "viem";
import { frames } from "../frames";
import { transaction } from "frames.js/core";
import { ethers } from "ethers";
import { ChibiBattleItemForAirdrop__factory } from "@/app/services/contracts";
import dayjs from "dayjs";
import { generateSignature } from "@/app/services/generate-airdrop-signature";
import { privateKeyToAccount } from "viem/accounts";

export const POST = frames(async (ctx) => {
  if (!ctx.message?.address) {
    throw new Error("Please connect your wallet");
  }

  const luckScore = +ctx.searchParams.score;
  console.log("🚀 ~ POST ~ luckScore:", luckScore);
  let prizes = [0, 0]; // bronze, silver
  if (luckScore >= 8) {
    prizes = [0, 1];
  } else if (luckScore >= 4) {
    prizes = [1, 0];
  } else {
    prizes = [0, 0];
  }
  console.log(`prize = ${JSON.stringify(prizes)}`);

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
      BigInt(prizes[0]),
      BigInt(prizes[1]),
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
