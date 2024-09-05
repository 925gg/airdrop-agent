import { encodeFunctionData } from "viem";
import { frames } from "../frames";
import { transaction } from "frames.js/core";
import { ethers } from "ethers";
import { ChibiBattleItemForAirdrop__factory } from "@/app/services/contracts";
import dayjs from "dayjs";
import { generateSignature } from "@/app/services/generate-airdrop-signature";
import { privateKeyToAccount } from "viem/accounts";
import { getChestAirdrop } from "@/app/services/fortune-draw";
import { airdropChests } from "@/app/services/airdrop-chests";

export const POST = frames(async (ctx) => {
  if (!ctx.message?.address) {
    throw new Error("Please connect your wallet");
  }
  console.log(
    "🚀 ~ handleRequest ~ currentWallet:",
    JSON.stringify(ctx.message)
  );

  const luckScore = +ctx.searchParams.score;
  console.log("🚀 ~ POST ~ luckScore:", luckScore);
  let [bronze, silver] = getChestAirdrop(luckScore); // bronze, silver

  console.log(`prize = ${JSON.stringify([bronze, silver])}`);

  airdropChests(silver, bronze, ctx.message.address);

  const chainId = `eip155:${process.env.BASE_CHAIN_ID}`;
  // Return transaction data that conforms to the correct type
  return transaction({
    chainId: chainId,
    method: "eth_sendTransaction",
    params: {
      abi: [],
      to: ctx.message.address,
    },
  });
});
