/* eslint-disable react/jsx-key */
import { getRemainingDraws, textShadow } from "@/app/services/fortune-draw";
import { TopicEnum } from "../../constants";
import { frames } from "../../frames";
import { Button } from "frames.js/next";

const getTopicText = (topic?: TopicEnum) => {
  switch (topic) {
    case TopicEnum.LOVE:
      return "Love";
    case TopicEnum.HEALTH:
      return "Health";
    case TopicEnum.MONEY:
      return "Money";
    default:
      return "Unknown";
  }
};

export const POST = frames(async (ctx) => {
  const wallet = await ctx.message?.walletAddress();
  console.log("wallet: ", wallet);
  const remainingDraws = await getRemainingDraws(
    (await ctx.message?.walletAddress())?.toLocaleLowerCase()
  );
  // const remainingDraws = 999;
  console.log("remaining draws:", remainingDraws);

  if (remainingDraws <= 0) {
    return {
      image: (
        <div
          tw="flex flex-col"
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
            <span>No remaining draws</span>
          </div>
        </div>
      ),
      buttons: [
        <Button action="post" target="/">
          OK
        </Button>,
      ],
    };
  }
  let currentState = ctx.state;
  console.log("🚀 ~ POST ~ ctx.message.address:", ctx.message?.address);

  switch (ctx.searchParams.value) {
    case TopicEnum.LOVE:
      currentState = { ...currentState, topic: TopicEnum.LOVE };
      break;
    case TopicEnum.MONEY:
      currentState = { ...currentState, topic: TopicEnum.MONEY };
      break;
    case TopicEnum.HEALTH:
      currentState = { ...currentState, topic: TopicEnum.HEALTH };
      break;
  }

  const AIRDROP_STRATEGY = process.env.AIRDROP_STRATEGY;
  console.log("🚀 ~ POST ~ AIRDROP_STRATEGY:", AIRDROP_STRATEGY);

  if (AIRDROP_STRATEGY === "user-claim") {
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
              tw="flex justify-center"
              style={{
                textShadow,
              }}
            >
              Topic: {getTopicText(currentState.topic)}.{" "}
            </div>
            <div
              tw="flex justify-center"
              style={{
                textShadow,
              }}
            >
              Enter your birth year:{" "}
            </div>
          </div>
        </div>
      ), // foo: bar
      textInput: "Enter your birth year (eg: 1884)",
      buttons: [
        <Button action="post" target="/qiuqian-fortune-user-claim">
          Confirm
        </Button>,
        <Button action="post" target="/">
          Back
        </Button>,
      ],
      state: currentState,
    };
  }
  // for server airdrop , we route user to another page
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
            tw="flex justify-center"
            style={{
              textShadow,
            }}
          >
            Topic: {getTopicText(currentState.topic)}.{" "}
          </div>
          <div
            tw="flex justify-center"
            style={{
              textShadow,
            }}
          >
            Enter your birth year:{" "}
          </div>
        </div>
      </div>
    ), // foo: bar
    textInput: "Enter your birth year (eg: 1884)",
    buttons: [
      <Button action="post" target="/qiuqian-fortune-server-airdrop">
        Confirm
      </Button>,
      <Button action="post" target="/">
        Back
      </Button>,
    ],
    state: currentState,
  };
});
