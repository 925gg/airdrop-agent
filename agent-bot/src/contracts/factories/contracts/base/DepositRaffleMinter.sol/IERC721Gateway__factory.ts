/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IERC721Gateway,
  IERC721GatewayInterface,
} from "../../../../contracts/base/DepositRaffleMinter.sol/IERC721Gateway";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "nftContract",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ERC721_mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "nftContract",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "tokenId",
        type: "uint256[]",
      },
    ],
    name: "ERC721_mintBatch",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "nftContract",
        type: "address",
      },
      {
        internalType: "string",
        name: "newURI",
        type: "string",
      },
    ],
    name: "ERC721_setURI",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IERC721Gateway__factory {
  static readonly abi = _abi;
  static createInterface(): IERC721GatewayInterface {
    return new Interface(_abi) as IERC721GatewayInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): IERC721Gateway {
    return new Contract(address, _abi, runner) as unknown as IERC721Gateway;
  }
}
