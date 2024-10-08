/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IClashStaking,
  IClashStakingInterface,
} from "../../../../contracts/base/ChibiKingdomRewards.sol/IClashStaking";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "enum LockPeriod",
        name: "lockPeriod",
        type: "uint8",
      },
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "stake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IClashStaking__factory {
  static readonly abi = _abi;
  static createInterface(): IClashStakingInterface {
    return new Interface(_abi) as IClashStakingInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): IClashStaking {
    return new Contract(address, _abi, runner) as unknown as IClashStaking;
  }
}
