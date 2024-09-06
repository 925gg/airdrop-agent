import { createFrames } from "frames.js/next";
import { farcasterHubContext, openframes } from "frames.js/middleware";
import { TopicEnum } from "./constants";
import { getXmtpFrameMessage, isXmtpFrameActionPayload } from "frames.js/xmtp";

export type State = {
  topic?: TopicEnum;
};

export const frames = createFrames<State>({
  basePath: "/frames",
  baseUrl: process.env.NEXT_PUBLIC_WEBSITE_URL,
  initialState: {
    topic: undefined,
  },
  middleware: [
    openframes({
      clientProtocol: {
        id: "xmtp",
        version: "2024-02-09",
      },
      handler: {
        isValidPayload: (body) => isXmtpFrameActionPayload(body),
        getFrameMessage: async (body) => {
          if (!isXmtpFrameActionPayload(body)) {
            return undefined;
          }

          return getXmtpFrameMessage(body);
        },
      },
    }),
    farcasterHubContext({
      hubHttpUrl: "https://api.noderpc.xyz/farcaster-mainnet-hub",
    }),
  ],
});
