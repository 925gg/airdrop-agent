"use server";

import { ethers } from "ethers";
import dayjs from "dayjs";
import { ChibiBattleItemForAirdrop__factory } from "./contracts";

const getBufferedGasLimit = (estimatedGas: bigint): bigint => {
  const threshold = 1.5;
  return (estimatedGas * BigInt(threshold * 100)) / 100n;
};

export const airdropChests = async (
  silver: number,
  bronze: number,
  wallet: string
) => {
  const baseProvider = new ethers.JsonRpcProvider(process.env.BASE_RPC_URL);
  const airdropWallet = new ethers.Wallet(
    process.env.CHIBI_BATTLE_ITEM_MINT_FROM_CHEST_PRIVATE_KEY as string,
    baseProvider
  );
  const minter = ChibiBattleItemForAirdrop__factory.connect(
    process.env.CONTRACT_BATTLE_ITEM_ADDRESS as string,
    airdropWallet
  );

  const transactionId = 1e10 + dayjs().unix();
  const estimatedGas = await minter.mintFromChests.estimateGas(
    transactionId,
    0,
    wallet,
    bronze,
    silver,
    0,
    0
  );

  const tx = await minter.mintFromChests(
    transactionId,
    0,
    wallet,
    bronze,
    silver,
    0,
    0,
    {
      gasLimit: getBufferedGasLimit(estimatedGas),
    }
  );
  return tx.hash;
};
