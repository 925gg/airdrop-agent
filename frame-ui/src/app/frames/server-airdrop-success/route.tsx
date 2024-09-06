/* eslint-disable react/jsx-key */
import { Button } from "frames.js/next";
import { getXmtpFrameMessage } from "frames.js/xmtp";
import { frames } from "../frames";
import { get } from "lodash/fp";
import { getChestAirdrop } from "@/app/services/fortune-draw";
import { airdropChests } from "@/app/services/airdrop-chests";

const handleRequest = frames(async (ctx) => {
  if (!ctx.message) {
    throw new Error("Error with message");
  }

  const wallet = await ctx.message.walletAddress();
  if (wallet) {
    console.log(wallet);
  } else {
    console.log("Wallet not found");
    throw new Error("No wallet found");
  }

  const luckScore = +ctx.searchParams.score;
  console.log("🚀 ~ POST ~ luckScore:", luckScore);
  let [bronze, silver] = getChestAirdrop(luckScore); // bronze, silver

  console.log(`prize = ${JSON.stringify([bronze, silver])}`);

  const txHash = await airdropChests(
    silver,
    bronze,
    wallet,
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
        target={`${process.env.BASE_EXPLORER_URL}/tx/${txHash}`}
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
