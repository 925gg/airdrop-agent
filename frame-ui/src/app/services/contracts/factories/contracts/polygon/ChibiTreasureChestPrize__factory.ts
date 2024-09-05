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
import type { NonPayableOverrides } from "../../../common";
import type {
  ChibiTreasureChestPrize,
  ChibiTreasureChestPrizeInterface,
} from "../../../contracts/polygon/ChibiTreasureChestPrize";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "chibiTreasureChest_",
        type: "address",
      },
      {
        internalType: "address",
        name: "verifier_",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "NotEnoughToken",
    type: "error",
  },
  {
    inputs: [],
    name: "OnlyVerifier",
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
    inputs: [],
    name: "TransactionAlreadyProcessed",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "string",
        name: "transactionId",
        type: "string",
      },
    ],
    name: "Claimed",
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
    name: "chibiTreasureChestContract",
    outputs: [
      {
        internalType: "contract IChibiTreasureChest",
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
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
      {
        internalType: "string",
        name: "transactionId",
        type: "string",
      },
    ],
    name: "claimPrize",
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
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "transactions",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
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
    name: "verifier",
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
  "0x608060405234801561001057600080fd5b50604051610bca380380610bca83398101604081905261002f916100fc565b338061005557604051631e4fbdf760e01b81526000600482015260240160405180910390fd5b61005e81610090565b50600180546001600160a01b039384166001600160a01b0319918216179091556002805492909316911617905561012f565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b80516001600160a01b03811681146100f757600080fd5b919050565b6000806040838503121561010f57600080fd5b610118836100e0565b9150610126602084016100e0565b90509250929050565b610a8c8061013e6000396000f3fe608060405234801561001057600080fd5b50600436106100a95760003560e01c8063715018a611610071578063715018a6146101455780637a4050911461014d5780638da5cb5b146101605780639018509914610171578063bd1f4b5214610184578063f2fde38b1461019757600080fd5b806306b8bf9b146100ae57806317e0f252146100c35780632b7ac3f3146100d65780635437988d146100ff578063642f2eaf14610112575b600080fd5b6100c16100bc366004610783565b6101aa565b005b6100c16100d136600461085d565b61034f565b6002546100e9906001600160a01b031681565b6040516100f69190610876565b60405180910390f35b6100c161010d36600461088a565b61041c565b61013561012036600461085d565b60036020526000908152604090205460ff1681565b60405190151581526020016100f6565b6100c1610446565b6100c161015b3660046108ae565b61045a565b6000546001600160a01b03166100e9565b6001546100e9906001600160a01b031681565b6100c16101923660046108ae565b61050c565b6100c16101a536600461088a565b61065e565b600082826040516020016101bf9291906108da565b60408051601f1981840301815291815281516020928301206000818152600390935291205490915060ff16156102085760405163eb4156ad60e01b815260040160405180910390fd5b6002546001600160a01b0316331461023357604051633d120d8160e11b815260040160405180910390fd5b6000818152600360205260408082208054600160ff19909116811790915581518181528083019092528160200160208202803683370190505090508881600081518110610282576102826108ea565b6001600160a01b039283166020918202929092010152600154604051636990458560e11b815291169063d3208b0a906102c79084908c908c908c908c90600401610932565b600060405180830381600087803b1580156102e157600080fd5b505af11580156102f5573d6000803e3d6000fd5b50505050886001600160a01b03167fddcc50704dbf394064713fc8689311468b4efaeb0d963d3ec923a297716f0ea689898989898960405161033c969594939291906109bc565b60405180910390a2505050505050505050565b6103576106a5565b478181101561037957604051632d65aa3b60e11b815260040160405180910390fd5b604051600090339084908381818185875af1925050503d80600081146103bb576040519150601f19603f3d011682016040523d82523d6000602084013e6103c0565b606091505b50509050806103e257604051632d65aa3b60e11b815260040160405180910390fd5b60405183815233907fd9d5265c383b28459971d18c743231480243427ba028b068d2e220b7fb1267f99060200160405180910390a2505050565b6104246106a5565b600280546001600160a01b0319166001600160a01b0392909216919091179055565b61044e6106a5565b61045860006106d2565b565b6104626106a5565b604051632142170760e11b8152306004820152336024820152604481018290526001600160a01b038316906342842e0e90606401600060405180830381600087803b1580156104b057600080fd5b505af11580156104c4573d6000803e3d6000fd5b50506040518381526001600160a01b03851692503391507f464f4412a4ca2b6815881b29cc264c667985289e15eba81cbcc09898584a11979060200160405180910390a35050565b6105146106a5565b6040516370a0823160e01b81526000906001600160a01b038416906370a0823190610543903090600401610876565b602060405180830381865afa158015610560573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105849190610a1b565b9050818110156105a757604051632d65aa3b60e11b815260040160405180910390fd5b60405163a9059cbb60e01b8152336004820152602481018390526001600160a01b0384169063a9059cbb906044016020604051808303816000875af11580156105f4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106189190610a34565b506040518281526001600160a01b0384169033907fe6a6f6f76ab470c286a8b9b5341ea2ada55cf64166f147822a00d1ac9ab552189060200160405180910390a3505050565b6106666106a5565b6001600160a01b038116610699576000604051631e4fbdf760e01b81526004016106909190610876565b60405180910390fd5b6106a2816106d2565b50565b6000546001600160a01b03163314610458573360405163118cdaa760e01b81526004016106909190610876565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6001600160a01b03811681146106a257600080fd5b60008083601f84011261074957600080fd5b50813567ffffffffffffffff81111561076157600080fd5b6020830191508360208260051b850101111561077c57600080fd5b9250929050565b60008060008060008060006080888a03121561079e57600080fd5b87356107a981610722565b9650602088013567ffffffffffffffff808211156107c657600080fd5b6107d28b838c01610737565b909850965060408a01359150808211156107eb57600080fd5b6107f78b838c01610737565b909650945060608a013591508082111561081057600080fd5b818a0191508a601f83011261082457600080fd5b81358181111561083357600080fd5b8b602082850101111561084557600080fd5b60208301945080935050505092959891949750929550565b60006020828403121561086f57600080fd5b5035919050565b6001600160a01b0391909116815260200190565b60006020828403121561089c57600080fd5b81356108a781610722565b9392505050565b600080604083850312156108c157600080fd5b82356108cc81610722565b946020939093013593505050565b8183823760009101908152919050565b634e487b7160e01b600052603260045260246000fd5b81835260006001600160fb1b0383111561091957600080fd5b8260051b80836020870137939093016020019392505050565b6080808252865190820181905260009060209060a0840190828a01845b828110156109745781516001600160a01b03168452928401929084019060010161094f565b5050508381038285015261098981888a610900565b9050838103604085015261099e818688610900565b84810360609095019490945250600083529091019695505050505050565b6060815260006109d060608301888a610900565b82810360208401526109e3818789610900565b90508281036040840152838152838560208301376000602085830101526020601f19601f860116820101915050979650505050505050565b600060208284031215610a2d57600080fd5b5051919050565b600060208284031215610a4657600080fd5b815180151581146108a757600080fdfea2646970667358221220f9ea793fc6b20e3d0f82873aeee6c5f34aaa2522d719a47346d67e287132b85164736f6c63430008140033";

type ChibiTreasureChestPrizeConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ChibiTreasureChestPrizeConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ChibiTreasureChestPrize__factory extends ContractFactory {
  constructor(...args: ChibiTreasureChestPrizeConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    chibiTreasureChest_: AddressLike,
    verifier_: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(
      chibiTreasureChest_,
      verifier_,
      overrides || {}
    );
  }
  override deploy(
    chibiTreasureChest_: AddressLike,
    verifier_: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(
      chibiTreasureChest_,
      verifier_,
      overrides || {}
    ) as Promise<
      ChibiTreasureChestPrize & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(
    runner: ContractRunner | null
  ): ChibiTreasureChestPrize__factory {
    return super.connect(runner) as ChibiTreasureChestPrize__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ChibiTreasureChestPrizeInterface {
    return new Interface(_abi) as ChibiTreasureChestPrizeInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): ChibiTreasureChestPrize {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as ChibiTreasureChestPrize;
  }
}
