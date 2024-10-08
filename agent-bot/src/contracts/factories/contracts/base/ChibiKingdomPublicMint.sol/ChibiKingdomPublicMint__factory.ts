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
  BigNumberish,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../../../common";
import type {
  ChibiKingdomPublicMint,
  ChibiKingdomPublicMintInterface,
} from "../../../../contracts/base/ChibiKingdomPublicMint.sol/ChibiKingdomPublicMint";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "treasury_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "landBasePrice_",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "chibiKingdom_",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "AccessControlBadConfirmation",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "neededRole",
        type: "bytes32",
      },
    ],
    name: "AccessControlUnauthorizedAccount",
    type: "error",
  },
  {
    inputs: [],
    name: "FailedToSendToken",
    type: "error",
  },
  {
    inputs: [],
    name: "NotEnoughEther",
    type: "error",
  },
  {
    inputs: [],
    name: "ReentrancyGuardReentrantCall",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "chibiKingdom",
    outputs: [
      {
        internalType: "contract IChibiKingdom",
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
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
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
    inputs: [],
    name: "landBasePrice",
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
    inputs: [],
    name: "mint",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "publicMintEnabled",
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
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "callerConfirmation",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
    ],
    name: "setLandBasePrice",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "enabled",
        type: "bool",
      },
    ],
    name: "setPublicMintEnabled",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "treasury_",
        type: "address",
      },
    ],
    name: "setTreasury",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
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
    inputs: [],
    name: "treasury",
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
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50604051610aba380380610aba83398101604081905261002f9161014b565b6001805561003e600033610083565b506002805460ff19166001179055600580546001600160a01b039485166001600160a01b03199182161790915560039290925560048054919093169116179055610187565b6000828152602081815260408083206001600160a01b038516845290915281205460ff16610125576000838152602081815260408083206001600160a01b03861684529091529020805460ff191660011790556100dd3390565b6001600160a01b0316826001600160a01b0316847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a4506001610129565b5060005b92915050565b80516001600160a01b038116811461014657600080fd5b919050565b60008060006060848603121561016057600080fd5b6101698461012f565b92506020840151915061017e6040850161012f565b90509250925092565b610924806101966000396000f3fe6080604052600436106100e85760003560e01c806361d027b31161008a578063bd3708d211610059578063bd3708d214610295578063d547741f146102b5578063f0f44260146102d5578063fb10512c146102f557600080fd5b806361d027b3146101fc578063818668d71461021c57806391d148541461023c578063a217fddf1461028057600080fd5b8063248a9ca3116100c6578063248a9ca3146101465780632b2636a3146101845780632f2ff15d146101bc57806336568abe146101dc57600080fd5b806301ffc9a7146100ed5780630f4161aa146101225780631249c58b1461013c575b600080fd5b3480156100f957600080fd5b5061010d610108366004610807565b61030b565b60405190151581526020015b60405180910390f35b34801561012e57600080fd5b5060025461010d9060ff1681565b6101446103a4565b005b34801561015257600080fd5b50610176610161366004610850565b60009081526020819052604090206001015490565b604051908152602001610119565b34801561019057600080fd5b506004546101a4906001600160a01b031681565b6040516001600160a01b039091168152602001610119565b3480156101c857600080fd5b506101446101d7366004610885565b6104ff565b3480156101e857600080fd5b506101446101f7366004610885565b61052a565b34801561020857600080fd5b506005546101a4906001600160a01b031681565b34801561022857600080fd5b506101446102373660046108b1565b61057b565b34801561024857600080fd5b5061010d610257366004610885565b6000918252602082815260408084206001600160a01b0393909316845291905290205460ff1690565b34801561028c57600080fd5b50610176600081565b3480156102a157600080fd5b506101446102b0366004610850565b61059a565b3480156102c157600080fd5b506101446102d0366004610885565b6105ab565b3480156102e157600080fd5b506101446102f03660046108d3565b6105d0565b34801561030157600080fd5b5061017660035481565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f7965db0b00000000000000000000000000000000000000000000000000000000148061039e57507f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316145b92915050565b6103ac610616565b6003543410156103e8576040517f8a0d377900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6005546040516000916001600160a01b03169034908381818185875af1925050503d8060008114610435576040519150601f19603f3d011682016040523d82523d6000602084013e61043a565b606091505b5050905080610475576040517f73ad865000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600480546040517f40c10f190000000000000000000000000000000000000000000000000000000081523392810192909252600060248301526001600160a01b0316906340c10f1990604401600060405180830381600087803b1580156104db57600080fd5b505af11580156104ef573d6000803e3d6000fd5b50505050506104fd60018055565b565b60008281526020819052604090206001015461051a81610659565b6105248383610666565b50505050565b6001600160a01b038116331461056c576040517f6697b23200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6105768282610710565b505050565b600061058681610659565b506002805460ff1916911515919091179055565b60006105a581610659565b50600355565b6000828152602081905260409020600101546105c681610659565b6105248383610710565b60006105db81610659565b50600580547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b0392909216919091179055565b600260015403610652576040517f3ee5aeb500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6002600155565b6106638133610793565b50565b6000828152602081815260408083206001600160a01b038516845290915281205460ff16610708576000838152602081815260408083206001600160a01b03861684529091529020805460ff191660011790556106c03390565b6001600160a01b0316826001600160a01b0316847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a450600161039e565b50600061039e565b6000828152602081815260408083206001600160a01b038516845290915281205460ff1615610708576000838152602081815260408083206001600160a01b0386168085529252808320805460ff1916905551339286917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a450600161039e565b6000828152602081815260408083206001600160a01b038516845290915290205460ff16610803576040517fe2517d3f0000000000000000000000000000000000000000000000000000000081526001600160a01b03821660048201526024810183905260440160405180910390fd5b5050565b60006020828403121561081957600080fd5b81357fffffffff000000000000000000000000000000000000000000000000000000008116811461084957600080fd5b9392505050565b60006020828403121561086257600080fd5b5035919050565b80356001600160a01b038116811461088057600080fd5b919050565b6000806040838503121561089857600080fd5b823591506108a860208401610869565b90509250929050565b6000602082840312156108c357600080fd5b8135801515811461084957600080fd5b6000602082840312156108e557600080fd5b6108498261086956fea264697066735822122056d34e78d8a388da37e43b132160cee0fdb9c767833fe74175909b1aa34b58c764736f6c63430008140033";

type ChibiKingdomPublicMintConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ChibiKingdomPublicMintConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ChibiKingdomPublicMint__factory extends ContractFactory {
  constructor(...args: ChibiKingdomPublicMintConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    treasury_: AddressLike,
    landBasePrice_: BigNumberish,
    chibiKingdom_: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(
      treasury_,
      landBasePrice_,
      chibiKingdom_,
      overrides || {}
    );
  }
  override deploy(
    treasury_: AddressLike,
    landBasePrice_: BigNumberish,
    chibiKingdom_: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(
      treasury_,
      landBasePrice_,
      chibiKingdom_,
      overrides || {}
    ) as Promise<
      ChibiKingdomPublicMint & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(
    runner: ContractRunner | null
  ): ChibiKingdomPublicMint__factory {
    return super.connect(runner) as ChibiKingdomPublicMint__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ChibiKingdomPublicMintInterface {
    return new Interface(_abi) as ChibiKingdomPublicMintInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): ChibiKingdomPublicMint {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as ChibiKingdomPublicMint;
  }
}
