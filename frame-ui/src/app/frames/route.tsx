/* eslint-disable react/jsx-key */
import { Button } from "frames.js/next";
import { frames } from "./frames";
import { TopicEnum } from "./constants";
import { getRemainingDraws } from "../services/fortune-draw";

const handleRequest = frames(async (ctx) => {
  const remainingDraws = await getRemainingDraws();

  if (!remainingDraws) {
    return {
      image: <span>No remaining draws</span>,
      buttons: [
        <Button action="post" target="/">
          OK
        </Button>,
      ],
    };
  }

  return {
    image: <span>Select a topic</span>,
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
