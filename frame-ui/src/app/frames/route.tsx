/* eslint-disable react/jsx-key */
import { Button } from "frames.js/next";
import { frames } from "./frames";
import { TopicEnum } from "./constants";
import { getRemainingDraws } from "../services/fortune-draw";
import { getXmtpFrameMessage } from "frames.js/xmtp";

const handleRequest = frames(async (ctx) => {
  console.log("🚀 ~ POST ~ ctx.message.address:", ctx.message?.address);

  return {
    image: (
      <div
        tw="flex flex-col w-screen h-screen justify-center items-center"
        style={{ fontFamily: "UTM Azuki" }}
      >
        <div tw="w-full flex justify-center items-center text-4xl font-bold text-center">
          Select a Topic
        </div>
      </div>
    ),
    buttons: [
      <Button
        action="post"
        target={{
          pathname: "/zodiac-selection/birth-year",
          query: { value: TopicEnum.LOVE },
        }}
      >
        Love
      </Button>,
      <Button
        action="post"
        target={{
          pathname: "/zodiac-selection/birth-year",
          query: { value: TopicEnum.MONEY },
        }}
      >
        Money
      </Button>,
      <Button
        action="post"
        target={{
          pathname: "/zodiac-selection/birth-year",
          query: { value: TopicEnum.HEALTH },
        }}
      >
        Health
      </Button>,
    ],
  };
});

export const GET = handleRequest;
export const POST = handleRequest;
