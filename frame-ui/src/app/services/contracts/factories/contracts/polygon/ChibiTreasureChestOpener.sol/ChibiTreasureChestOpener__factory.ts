/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../../../common";
import type {
  ChibiTreasureChestOpener,
  ChibiTreasureChestOpenerInterface,
} from "../../../../contracts/polygon/ChibiTreasureChestOpener.sol/ChibiTreasureChestOpener";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "treasureChest_",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "ExceedMaxTokensMintedPerTx",
    type: "error",
  },
  {
    inputs: [],
    name: "NotEnoughToken",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "OwnableInvalidOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "OwnableUnauthorizedAccount",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "opener",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "transactionId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "bronzeChests",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "silverChests",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "goldChests",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "platinumChests",
        type: "uint256",
      },
    ],
    name: "ChestOpened",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "ReceivedERC20Token",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ReceivedERC721Token",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "ReceivedNativeToken",
    type: "event",
  },
  {
    inputs: [],
    name: "MAX_TOKENS_MINTED_PER_TX",
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
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "bronzeChests",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "silverChests",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "goldChests",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "platinumChests",
        type: "uint256",
      },
    ],
    name: "openChests",
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
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "treasureChestContract",
    outputs: [
      {
        internalType: "contract IERC1155Burnable",
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
        internalType: "contract IERC20",
        name: "erc20token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdrawErc20",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC721",
        name: "erc721Token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "withdrawErc721",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdrawNativeToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50604051610aa6380380610aa683398101604081905261002f916100d4565b338061005557604051631e4fbdf760e01b81526000600482015260240160405180910390fd5b61005e81610084565b50600180546001600160a01b0319166001600160a01b0392909216919091179055610104565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6000602082840312156100e657600080fd5b81516001600160a01b03811681146100fd57600080fd5b9392505050565b610993806101136000396000f3fe608060405234801561001057600080fd5b50600436106100835760003560e01c806317e0f252146100885780635ca78a091461009d578063715018a6146100b05780637a405091146100b85780638da5cb5b146100cb578063af0a56f4146100ee578063bd1f4b5214610101578063e938b7fd14610114578063f2fde38b1461012a575b600080fd5b61009b610096366004610794565b61013d565b005b61009b6100ab3660046107c2565b61020a565b61009b6104b8565b61009b6100c6366004610806565b6104cc565b6000546001600160a01b03165b6040516100e59190610832565b60405180910390f35b6001546100d8906001600160a01b031681565b61009b61010f366004610806565b61057e565b61011c600a81565b6040519081526020016100e5565b61009b610138366004610846565b6106d0565b610145610717565b478181101561016757604051632d65aa3b60e11b815260040160405180910390fd5b604051600090339084908381818185875af1925050503d80600081146101a9576040519150601f19603f3d011682016040523d82523d6000602084013e6101ae565b606091505b50509050806101d057604051632d65aa3b60e11b815260040160405180910390fd5b60405183815233907fd9d5265c383b28459971d18c743231480243427ba028b068d2e220b7fb1267f99060200160405180910390a2505050565b600a8183610218868861086a565b610222919061086a565b61022c919061086a565b111561024b5760405163f1c3c20560e01b815260040160405180910390fd5b60408051426020808301919091526bffffffffffffffffffffffff193360601b168284015260548201879052607482018690526094820185905260b48083018590528351808403909101815260d4830180855281519190920120600480835261017484019094529260009260f4016080803683370190505090506001816000815181106102da576102da610891565b6020026020010181815250506002816001815181106102fb576102fb610891565b60200260200101818152505060038160028151811061031c5761031c610891565b60200260200101818152505060048160038151811061033d5761033d610891565b602090810291909101015260408051600480825260a08201909252600091816020016020820280368337019050509050868160008151811061038157610381610891565b60200260200101818152505085816001815181106103a1576103a1610891565b60200260200101818152505084816002815181106103c1576103c1610891565b60200260200101818152505083816003815181106103e1576103e1610891565b6020908102919091010152600154604051631ac8311560e21b81526001600160a01b0390911690636b20c45490610420903390869086906004016108e2565b600060405180830381600087803b15801561043a57600080fd5b505af115801561044e573d6000803e3d6000fd5b5050604080516001600160a01b038c168152602081018b905290810189905260608101889052608081018790528592503391507fa2a74c0fbf1f50f2623afdc346fb201f0c8377f559196c99bb5f43c60d607d2f9060a00160405180910390a35050505050505050565b6104c0610717565b6104ca6000610744565b565b6104d4610717565b604051632142170760e11b8152306004820152336024820152604481018290526001600160a01b038316906342842e0e90606401600060405180830381600087803b15801561052257600080fd5b505af1158015610536573d6000803e3d6000fd5b50506040518381526001600160a01b03851692503391507f464f4412a4ca2b6815881b29cc264c667985289e15eba81cbcc09898584a11979060200160405180910390a35050565b610586610717565b6040516370a0823160e01b81526000906001600160a01b038416906370a08231906105b5903090600401610832565b602060405180830381865afa1580156105d2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105f69190610922565b90508181101561061957604051632d65aa3b60e11b815260040160405180910390fd5b60405163a9059cbb60e01b8152336004820152602481018390526001600160a01b0384169063a9059cbb906044016020604051808303816000875af1158015610666573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061068a919061093b565b506040518281526001600160a01b0384169033907fe6a6f6f76ab470c286a8b9b5341ea2ada55cf64166f147822a00d1ac9ab552189060200160405180910390a3505050565b6106d8610717565b6001600160a01b03811661070b576000604051631e4fbdf760e01b81526004016107029190610832565b60405180910390fd5b61071481610744565b50565b6000546001600160a01b031633146104ca573360405163118cdaa760e01b81526004016107029190610832565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6000602082840312156107a657600080fd5b5035919050565b6001600160a01b038116811461071457600080fd5b600080600080600060a086880312156107da57600080fd5b85356107e5816107ad565b97602087013597506040870135966060810135965060800135945092505050565b6000806040838503121561081957600080fd5b8235610824816107ad565b946020939093013593505050565b6001600160a01b0391909116815260200190565b60006020828403121561085857600080fd5b8135610863816107ad565b9392505050565b8082018082111561088b57634e487b7160e01b600052601160045260246000fd5b92915050565b634e487b7160e01b600052603260045260246000fd5b600081518084526020808501945080840160005b838110156108d7578151875295820195908201906001016108bb565b509495945050505050565b6001600160a01b0384168152606060208201819052600090610906908301856108a7565b828103604084015261091881856108a7565b9695505050505050565b60006020828403121561093457600080fd5b5051919050565b60006020828403121561094d57600080fd5b8151801515811461086357600080fdfea26469706673582212207090908730ad100b11db8918c5986b0086239be45617629b7a20e1f6c94c2fad64736f6c63430008140033";

type ChibiTreasureChestOpenerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ChibiTreasureChestOpenerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ChibiTreasureChestOpener__factory extends ContractFactory {
  constructor(...args: ChibiTreasureChestOpenerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    treasureChest_: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(treasureChest_, overrides || {});
  }
  override deploy(
    treasureChest_: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(treasureChest_, overrides || {}) as Promise<
      ChibiTreasureChestOpener & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(
    runner: ContractRunner | null
  ): ChibiTreasureChestOpener__factory {
    return super.connect(runner) as ChibiTreasureChestOpener__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ChibiTreasureChestOpenerInterface {
    return new Interface(_abi) as ChibiTreasureChestOpenerInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): ChibiTreasureChestOpener {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as ChibiTreasureChestOpener;
  }
}
