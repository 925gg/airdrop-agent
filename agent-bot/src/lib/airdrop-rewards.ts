import { HandlerContext } from "@xmtp/message-kit";
import dayjs from "dayjs";
import { ethers } from "ethers";
import { ChibiBattleItem__factory } from "../contracts";

const provider = new ethers.JsonRpcProvider(process.env.BASE_RPC_URL);
const airdropWallet = new ethers.Wallet(
  process.env.PRIVATE_KEY as string,
  provider
);
const battleItemContract = ChibiBattleItem__factory.connect(
  process.env.BATTLE_ITEM_CONTRACT_ADDRESS as string,
  airdropWallet
);

export const airdropRewards = async (
  context: HandlerContext
): Promise<void> => {
  await context.reply(`Sending airdrop...`);
  const sender = context.message.sender.address;
  // should replace with the actual transaction id
  const transactionId = 1e10 + dayjs().unix();
  const tx = await battleItemContract.mintFromChests(
    transactionId,
    0,
    sender,
    0,
    1,
    0,
    0
  );
  await tx.wait();
  await context.send(
    `Battle item sent!. Check your wallet. Transaction: https://sepolia.basescan.org/tx/${tx.hash}.`
  );
};
