import { HandlerContext } from "@xmtp/message-kit";

export const airdropRewards = async (
  context: HandlerContext
): Promise<void> => {
  await context.reply(`Sending airdrop...`);

  await context.send(
    `Battle item sent!. Check your wallet. Transaction: https://sepolia.basescan.org/tx/abc.`
  );
};
