/* eslint-disable react/jsx-key */
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
  let currentState = ctx.state;

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

  return {
    image: (
      <div tw="flex">
        <span>Topic: {getTopicText(currentState.topic)}. </span>
        <span>Enter your birth year: </span>
      </div>
    ), // foo: bar
    inputText: "foo",
    buttons: [
      <Button action="post" target="/qiuqian-fortune">
        Confirm
      </Button>,
      <Button action="post" target="/">
        Back
      </Button>,
    ],
    state: currentState,
  };
});
