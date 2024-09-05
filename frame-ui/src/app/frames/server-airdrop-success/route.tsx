/* eslint-disable react/jsx-key */
import { Button } from "frames.js/next";
import { getXmtpFrameMessage } from "frames.js/xmtp";
import { frames } from "../frames";

const handleRequest = frames(async (ctx) => {
  if (!ctx.message) {
    throw new Error("No user address found");
  }
  let currentWallet: string | undefined = ctx.message?.address;

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
        action="post"
        target={{
          pathname: "/",
        }}
      >
        Draw Again
      </Button>,
    ],
  };
});

export const GET = handleRequest;
export const POST = handleRequest;
