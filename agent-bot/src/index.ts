import dotenv from "dotenv";
import express from "express";

dotenv.config();

import { run, HandlerContext } from "@xmtp/message-kit";
import { airdropRewards } from "./lib/airdrop-rewards.js";

// Tracks conversation steps
// Should save this to a database in a real-world scenario
const inMemoryCacheStep = new Map<string, number>();

let clientInitialized = false;
if (process.env.AGENT_ENABLED !== "true") {
  console.log("Agent is disabled. Exiting...");
} else {
  const PORT = process.env.PORT || 8080;
  const server = express();

  server.get("/", (_, res) => {
    res.send("I'm alive!");
  });
  server.listen(
    {
      port: PORT,
    },
    () => console.log(`Express is up & running.`)
  );
  run(async (context: HandlerContext) => {
    const {
      v2client,
      message: {
        content: { content: text },
        typeId,
        sender,
      },
    } = context;

    if (!clientInitialized) {
      clientInitialized = true;
    }
    if (typeId !== "text") {
      /* If the input is not text do nothing */
      return;
    }

    const cacheStep = inMemoryCacheStep.get(sender.address) || 0;
    let message = "";
    if (cacheStep === 0) {
      message = "Welcome! Choose an option:\n1. Play game 1\n2. Play game 2";
      // Move to the next step
      inMemoryCacheStep.set(sender.address, cacheStep + 1);
      await context.reply(message);
    } else if (cacheStep === 1) {
      if (text === "1") {
        message = "https://frame-ui-437988073971.us-central1.run.app/";
        inMemoryCacheStep.set(sender.address, 0);
        //Send the message
        await context.reply(message);
      } else if (text === "2") {
        message = "https://frame-ui-airdrop-437988073971.us-central1.run.app/";
        inMemoryCacheStep.set(sender.address, 0);
        //Send the message
        await context.reply(message);
      } else {
        message = "Invalid option. Please choose 1 or 2";
        // Keep the same step to allow for re-entry
      }
    } else {
      message = "Invalid option. Please start again.";
      inMemoryCacheStep.set(sender.address, 0);
      //Send the message
      await context.reply(message);
    }
  }, {});
}
