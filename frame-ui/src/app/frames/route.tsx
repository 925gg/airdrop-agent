/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-key */
import { Button } from "frames.js/next";
import { frames } from "./frames";
import { TopicEnum } from "./constants";
import { textShadow } from "../services/fortune-draw";

const handleRequest = frames(async (ctx) => {
  console.log("🚀 ~ POST ~ ctx.message.address:", ctx.message?.address);

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
          tw="flex flex-col w-full h-full px-[24px] py-[16px] justify-center items-center"
          style={{ backgroundColor: "rgba(255,255,255,0.5)" }}
        >
          <div
            tw="w-full flex justify-center items-center text-4xl font-bold text-center"
            style={{
              textShadow,
            }}
          >
            Welcome to the Chinese Astrology Fortune-Telling experience! This
            journey will offer you insights and guidance based on ancient
            traditions. Let's begin by choosing the aspect of your life you'd
            like to explore:
          </div>
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
