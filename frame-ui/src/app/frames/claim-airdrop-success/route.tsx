/* eslint-disable react/jsx-key */
import { Button } from "frames.js/next";
import { getXmtpFrameMessage } from "frames.js/xmtp";
import { frames } from "../frames";
import { get } from "lodash/fp";

const handleRequest = frames(async (ctx) => {
  const txId = ctx.message?.transactionId;

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
      <Button action="link" target={`${process.env.BASE_EXPLORER_URL}/tx/${txId}`}>
        View on Explorer
      </Button>,
      <Button action="post" target={{ pathname: "/" }}>
        Draw Again
      </Button>,
    ],
  };
});

export const POST = handleRequest;
