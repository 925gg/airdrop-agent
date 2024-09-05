import { getBytes, keccak256, toBeHex, toUtf8Bytes, Wallet } from "ethers";

export const generateSignature = async (
  transactionId: number,
  wallet: string
) => {
  const message = `${toBeHex(wallet, 20)}/0/${transactionId}`;
  const hash = keccak256(toUtf8Bytes(message));

  const verifier = new Wallet(
    process.env.CHIBI_BATTLE_ITEM_MINT_FROM_CHEST_PRIVATE_KE ?? ""
  );
  const signature = await verifier.signMessage(getBytes(hash));
  return signature;
};
