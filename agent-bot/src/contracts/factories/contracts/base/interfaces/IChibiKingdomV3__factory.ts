/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IChibiKingdomV3,
  IChibiKingdomV3Interface,
} from "../../../../contracts/base/interfaces/IChibiKingdomV3";

const _abi = [
  {
    inputs: [],
    name: "getKingdom",
    outputs: [
      {
        components: [
          {
            internalType: "bool",
            name: "transferEnabled",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "transferEnabledForBelowTier5",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "cooldownTime",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxTier",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "landBasePrice",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "totalSupply",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "remainingSlots",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "tradingStartTime",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "upgradeStartTime",
            type: "uint256",
          },
        ],
        internalType: "struct KingdomMetadata",
        name: "kingdom",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "landId",
        type: "uint256",
      },
    ],
    name: "getLand",
    outputs: [
      {
        components: [
          {
            internalType: "uint8",
            name: "tier",
            type: "uint8",
          },
          {
            internalType: "uint8",
            name: "appearance",
            type: "uint8",
          },
          {
            internalType: "uint40",
            name: "lastUpdatedAt",
            type: "uint40",
          },
          {
            internalType: "uint16",
            name: "fertilityPoint",
            type: "uint16",
          },
          {
            internalType: "uint16",
            name: "wealthPoint",
            type: "uint16",
          },
          {
            internalType: "uint16",
            name: "defensePoint",
            type: "uint16",
          },
          {
            internalType: "uint16",
            name: "prestigePoint",
            type: "uint16",
          },
          {
            internalType: "bool",
            name: "listedForSale",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "price",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "royaltyFee",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
        ],
        internalType: "struct LandMetadata",
        name: "land",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "landId",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "listedForSale",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
    ],
    name: "listForSale",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "tokenId",
        type: "uint256[]",
      },
    ],
    name: "mintBatch",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "landId",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "shouldChangeName",
        type: "bool",
      },
      {
        internalType: "string",
        name: "newName",
        type: "string",
      },
      {
        internalType: "bool",
        name: "landProtected",
        type: "bool",
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
    name: "purchase",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "clashToken_",
        type: "address",
      },
    ],
    name: "setClashToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "tiers",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "prices",
        type: "uint256[]",
      },
    ],
    name: "setClashUpgradePriceByTiers",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        internalType: "uint96",
        name: "feeNumerator",
        type: "uint96",
      },
    ],
    name: "setDefaultRoyalty",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "landId",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "appearance",
        type: "uint8",
      },
    ],
    name: "setLandAppearance",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "landId",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint16",
            name: "fertilityPoint",
            type: "uint16",
          },
          {
            internalType: "uint16",
            name: "wealthPoint",
            type: "uint16",
          },
          {
            internalType: "uint16",
            name: "defensePoint",
            type: "uint16",
          },
          {
            internalType: "uint16",
            name: "prestigePoint",
            type: "uint16",
          },
        ],
        internalType: "struct LandStats",
        name: "stats",
        type: "tuple",
      },
    ],
    name: "setLandStats",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "landId",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "newName",
        type: "string",
      },
      {
        internalType: "bool",
        name: "landProtected",
        type: "bool",
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
    name: "setName",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "upgradeStartTime_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "tradingStartTime_",
        type: "uint256",
      },
    ],
    name: "setStartTime",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "transferEnabled_",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "transferEnabledForBelowTier5_",
        type: "bool",
      },
    ],
    name: "setTransferEnabled",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "newBaseURI",
        type: "string",
      },
    ],
    name: "setURI",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "verifier_",
        type: "address",
      },
    ],
    name: "setVerifier",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "approver",
        type: "address",
      },
      {
        internalType: "bool",
        name: "whitelisted",
        type: "bool",
      },
    ],
    name: "setWhitelistedApprover",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "landId",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "shouldChangeName",
        type: "bool",
      },
      {
        internalType: "string",
        name: "newName",
        type: "string",
      },
      {
        internalType: "bool",
        name: "landProtected",
        type: "bool",
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
    name: "upgrade",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "landId",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "shouldChangeName",
        type: "bool",
      },
      {
        internalType: "string",
        name: "newName",
        type: "string",
      },
      {
        internalType: "bool",
        name: "landProtected",
        type: "bool",
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
    name: "upgradeWithClash",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IChibiKingdomV3__factory {
  static readonly abi = _abi;
  static createInterface(): IChibiKingdomV3Interface {
    return new Interface(_abi) as IChibiKingdomV3Interface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): IChibiKingdomV3 {
    return new Contract(address, _abi, runner) as unknown as IChibiKingdomV3;
  }
}
