/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IChibiLandReward,
  IChibiLandRewardInterface,
} from "../../../../contracts/base/interfaces/IChibiLandReward";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "accumulatedKingdomPoints",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "expiredAt",
        type: "uint256",
      },
    ],
    name: "exchangeKingdomPoints",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IChibiLandReward__factory {
  static readonly abi = _abi;
  static createInterface(): IChibiLandRewardInterface {
    return new Interface(_abi) as IChibiLandRewardInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): IChibiLandReward {
    return new Contract(address, _abi, runner) as unknown as IChibiLandReward;
  }
}
