/* eslint-disable react/jsx-key */
import { Button } from "frames.js/next";
import { getXmtpFrameMessage } from "frames.js/xmtp";
import { frames } from "../frames";
import { get } from "lodash/fp";
import { textShadow } from "@/app/services/fortune-draw";

const handleRequest = frames(async (ctx) => {
  const txId = ctx.message?.transactionId;

  return {
    image: (
      <div
        tw="flex flex-col w-screen h-screen"
        style={{
          fontFamily: "'UTM Azuki'",
          backgroundImage: `url(${process.env.NEXT_PUBLIC_WEBSITE_URL}/images/cover-art.jpeg)`,
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          tw="flex flex-col w-full h-full justify-center items-center px-[24px] py-[16px]"
          style={{ backgroundColor: "rgba(255,255,255,0.5)" }}
        >
          <div
            tw="w-full flex justify-center items-center text-4xl font-bold text-center"
            style={{
              textShadow,
            }}
          >
            Claim Airdrop successfully!
          </div>
        </div>
      </div>
    ),
    buttons: [
      <Button
        action="link"
        target={`${process.env.BASE_EXPLORER_URL}/tx/${txId}`}
      >
        View on Explorer
      </Button>,
      <Button action="post" target={{ pathname: "/" }}>
        Try Again
      </Button>,
    ],
  };
});

export const POST = handleRequest;
