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
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405161053038038061053083398101604081905261002f91610054565b600180546001600160a01b0319166001600160a01b0392909216919091179055610084565b60006020828403121561006657600080fd5b81516001600160a01b038116811461007d57600080fd5b9392505050565b61049d806100936000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80635ca78a0914610046578063af0a56f41461005b578063e938b7fd1461008b575b600080fd5b610059610054366004610340565b6100a1565b005b60015461006e906001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b610093600a81565b604051908152602001610082565b600a81836100af86886103a6565b6100b991906103a6565b6100c391906103a6565b11156100fb576040517ff1c3c20500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600080549081908061010c836103bf565b909155505060408051600480825260a0820190925260009160208201608080368337019050509050600181600081518110610149576101496103d8565b60200260200101818152505060028160018151811061016a5761016a6103d8565b60200260200101818152505060038160028151811061018b5761018b6103d8565b6020026020010181815250506004816003815181106101ac576101ac6103d8565b602090810291909101015260408051600480825260a0820190925260009181602001602082028036833701905050905086816000815181106101f0576101f06103d8565b6020026020010181815250508581600181518110610210576102106103d8565b6020026020010181815250508481600281518110610230576102306103d8565b6020026020010181815250508381600381518110610250576102506103d8565b60209081029190910101526001546040517f6b20c4540000000000000000000000000000000000000000000000000000000081526001600160a01b0390911690636b20c454906102a890339086908690600401610429565b600060405180830381600087803b1580156102c257600080fd5b505af11580156102d6573d6000803e3d6000fd5b5050604080516001600160a01b038c168152602081018b905290810189905260608101889052608081018790528592503391507fa2a74c0fbf1f50f2623afdc346fb201f0c8377f559196c99bb5f43c60d607d2f9060a00160405180910390a35050505050505050565b600080600080600060a0868803121561035857600080fd5b85356001600160a01b038116811461036f57600080fd5b97602087013597506040870135966060810135965060800135945092505050565b634e487b7160e01b600052601160045260246000fd5b808201808211156103b9576103b9610390565b92915050565b6000600182016103d1576103d1610390565b5060010190565b634e487b7160e01b600052603260045260246000fd5b600081518084526020808501945080840160005b8381101561041e57815187529582019590820190600101610402565b509495945050505050565b6001600160a01b038416815260606020820152600061044b60608301856103ee565b828103604084015261045d81856103ee565b969550505050505056fea2646970667358221220f4de0ea7a415993f560ade3936e36903710cb20a60b6fe01f53c20b84a8a72e064736f6c63430008140033";

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
