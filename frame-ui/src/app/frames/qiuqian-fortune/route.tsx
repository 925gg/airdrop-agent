/* eslint-disable react/jsx-key */
import { Button } from "frames.js/next";
import { frames } from "../frames";
import { TopicEnum } from "../constants";
import dayjs from "dayjs";
import { generateQiuqianLot } from "@/app/services/generate-qiuqian-lot";
import { isInteger } from "lodash/fp";
import { validateYearInput } from "@/app/services/fortune-draw";
import { generateDallEImage } from "@/app/services/generate-dalle-image";

const textShadow = "#fff 0px 0px 6px";
// const textShadowClone = "#000 -1px 0px 5px";

const handleRequest = frames(async (ctx) => {
  const payload = await ctx.request.json();
  console.log("🚀 ~ handleRequest ~ payload:", payload);
  const { valid, error } = validateYearInput(payload.untrustedData.inputText);

  if (error) {
    return {
      image: <span>{error}</span>,
      buttons: [
        <Button
          action="post"
          target={{
            pathname: "/zodiac-selection/birth-year",
          }}
        >
          Re-select Birth Year
        </Button>,
      ],
    };
  }

  const result = await generateQiuqianLot(
    +payload.untrustedData.inputText,
    ctx.state.topic as TopicEnum
  );

  // const dallEImageUrl = await generateDallEImage(result.prompt);

  console.log("🚀 ~ handleRequest ~ result:", JSON.stringify(result));

  if (+result.luckScore >= 4) {
    return {
      image: (
        <div
          tw="flex flex-col w-screen h-screen"
          style={{
            // backgroundImage: `url(${dallEImageUrl})`,
            backgroundSize: "100% 100%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            fontFamily: "UTM Azuki",
            color: "#000",
          }}
        >
          <div
            tw="flex flex-col w-full h-full  px-[24px] py-[16px]"
            style={{ backgroundColor: "rgba(255,255,255,0.5)" }}
          >
            <div
              tw="flex justify-center w-full text-center font-bold text-[42px] relative"
              style={{
                textShadow,
              }}
            >
              {result.lotType}
            </div>
            <div
              tw="flex justify-center w-full text-center text-[32px] relative"
              style={{
                textShadow,
              }}
            >
              {result.interpretation}
            </div>
            <div
              tw="flex justify-center w-full text-center text-[32px] relative"
              style={{
                textShadow,
              }}
            >
              Lucky Score: {result.luckScore}
            </div>
          </div>
        </div>
      ),
      buttons: [
        <Button
          action="tx"
          target={{
            pathname: "/tx-airdrop",
            query: { score: result.luckScore },
          }}
          post_url="/claim-airdrop-success"
        >
          Claim Airdrop
        </Button>,
      ],
    };
  }

  return {
    image: (
      <div
        tw="flex flex-col w-screen h-screen"
        style={{
          // backgroundImage: `url(${dallEImageUrl})`,
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          fontFamily: "UTM Azuki",
          color: "#000",
        }}
      >
        <div
          tw="flex flex-col w-full h-full  px-[24px] py-[16px]"
          style={{ backgroundColor: "rgba(255,255,255,0.5)" }}
        >
          <div
            tw="flex justify-center w-full text-center font-bold text-[42px] relative"
            style={{
              textShadow,
            }}
          >
            {result.lotType}
          </div>
          <div
            tw="flex justify-center w-full text-center text-[32px] relative"
            style={{
              textShadow,
            }}
          >
            {result.interpretation}
          </div>
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

export const POST = handleRequest;
