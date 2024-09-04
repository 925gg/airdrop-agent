/* eslint-disable react/jsx-key */
import { Button } from "frames.js/next";
import { frames } from "../frames";
import { TopicEnum } from "../constants";

const handleRequest = frames(async (ctx) => {
  return {
    image: <span>Quiqian Result</span>,
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
