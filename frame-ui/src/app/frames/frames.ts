import { createFrames } from "frames.js/next";
import { TopicEnum } from "./constants";

export type State = {
  topic?: TopicEnum;
};

export const frames = createFrames<State>({
  basePath: "/frames",
  initialState: {
    topic: undefined,
  },
});
