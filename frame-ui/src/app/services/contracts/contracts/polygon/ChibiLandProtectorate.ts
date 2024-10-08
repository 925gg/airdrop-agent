/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../../common";

export interface ChibiLandProtectorateInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "VERSION"
      | "assignChibiLegend"
      | "chibiLegendContract"
      | "lands"
      | "legends"
      | "onERC721Received"
      | "owner"
      | "renounceOwnership"
      | "setChibiLegendContract"
      | "setVerifier"
      | "transferOwnership"
      | "unassignChibiLegend"
      | "verifier"
      | "withdrawErc20"
      | "withdrawErc721"
      | "withdrawNativeToken"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "ChibiLegendAssigned"
      | "ChibiLegendReleased"
      | "OwnershipTransferred"
      | "ReceivedERC20Token"
      | "ReceivedERC721Token"
      | "ReceivedNativeToken"
  ): EventFragment;

  encodeFunctionData(functionFragment: "VERSION", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "assignChibiLegend",
    values: [BigNumberish, BigNumberish, AddressLike, BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "chibiLegendContract",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "lands", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "legends",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "onERC721Received",
    values: [AddressLike, AddressLike, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setChibiLegendContract",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setVerifier",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "unassignChibiLegend",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "verifier", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "withdrawErc20",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawErc721",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawNativeToken",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "VERSION", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "assignChibiLegend",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "chibiLegendContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "lands", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "legends", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "onERC721Received",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setChibiLegendContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setVerifier",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "unassignChibiLegend",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "verifier", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "withdrawErc20",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawErc721",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawNativeToken",
    data: BytesLike
  ): Result;
}

export namespace ChibiLegendAssignedEvent {
  export type InputTuple = [
    legendId: BigNumberish,
    landId: BigNumberish,
    owner: AddressLike
  ];
  export type OutputTuple = [legendId: bigint, landId: bigint, owner: string];
  export interface OutputObject {
    legendId: bigint;
    landId: bigint;
    owner: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ChibiLegendReleasedEvent {
  export type InputTuple = [
    legendId: BigNumberish,
    landId: BigNumberish,
    owner: AddressLike
  ];
  export type OutputTuple = [legendId: bigint, landId: bigint, owner: string];
  export interface OutputObject {
    legendId: bigint;
    landId: bigint;
    owner: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace OwnershipTransferredEvent {
  export type InputTuple = [previousOwner: AddressLike, newOwner: AddressLike];
  export type OutputTuple = [previousOwner: string, newOwner: string];
  export interface OutputObject {
    previousOwner: string;
    newOwner: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ReceivedERC20TokenEvent {
  export type InputTuple = [
    receiver: AddressLike,
    token: AddressLike,
    amount: BigNumberish
  ];
  export type OutputTuple = [receiver: string, token: string, amount: bigint];
  export interface OutputObject {
    receiver: string;
    token: string;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ReceivedERC721TokenEvent {
  export type InputTuple = [
    receiver: AddressLike,
    token: AddressLike,
    tokenId: BigNumberish
  ];
  export type OutputTuple = [receiver: string, token: string, tokenId: bigint];
  export interface OutputObject {
    receiver: string;
    token: string;
    tokenId: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ReceivedNativeTokenEvent {
  export type InputTuple = [receiver: AddressLike, amount: BigNumberish];
  export type OutputTuple = [receiver: string, amount: bigint];
  export interface OutputObject {
    receiver: string;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface ChibiLandProtectorate extends BaseContract {
  connect(runner?: ContractRunner | null): ChibiLandProtectorate;
  waitForDeployment(): Promise<this>;

  interface: ChibiLandProtectorateInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  VERSION: TypedContractMethod<[], [bigint], "view">;

  assignChibiLegend: TypedContractMethod<
    [
      legendId: BigNumberish,
      landId: BigNumberish,
      landOwner: AddressLike,
      signature: BytesLike,
      expiredAt: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  chibiLegendContract: TypedContractMethod<[], [string], "view">;

  lands: TypedContractMethod<
    [arg0: BigNumberish],
    [
      [bigint, string, boolean] & {
        legendId: bigint;
        legendOwner: string;
        legendAssigned: boolean;
      }
    ],
    "view"
  >;

  legends: TypedContractMethod<
    [arg0: BigNumberish],
    [[bigint, string] & { landId: bigint; owner: string }],
    "view"
  >;

  onERC721Received: TypedContractMethod<
    [arg0: AddressLike, arg1: AddressLike, arg2: BigNumberish, arg3: BytesLike],
    [string],
    "view"
  >;

  owner: TypedContractMethod<[], [string], "view">;

  renounceOwnership: TypedContractMethod<[], [void], "nonpayable">;

  setChibiLegendContract: TypedContractMethod<
    [newChibiLegendContract: AddressLike],
    [void],
    "nonpayable"
  >;

  setVerifier: TypedContractMethod<
    [newVerifier: AddressLike],
    [void],
    "nonpayable"
  >;

  transferOwnership: TypedContractMethod<
    [newOwner: AddressLike],
    [void],
    "nonpayable"
  >;

  unassignChibiLegend: TypedContractMethod<
    [legendId: BigNumberish],
    [void],
    "nonpayable"
  >;

  verifier: TypedContractMethod<[], [string], "view">;

  withdrawErc20: TypedContractMethod<
    [erc20token: AddressLike, amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  withdrawErc721: TypedContractMethod<
    [erc721Token: AddressLike, tokenId: BigNumberish],
    [void],
    "nonpayable"
  >;

  withdrawNativeToken: TypedContractMethod<
    [amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "VERSION"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "assignChibiLegend"
  ): TypedContractMethod<
    [
      legendId: BigNumberish,
      landId: BigNumberish,
      landOwner: AddressLike,
      signature: BytesLike,
      expiredAt: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "chibiLegendContract"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "lands"
  ): TypedContractMethod<
    [arg0: BigNumberish],
    [
      [bigint, string, boolean] & {
        legendId: bigint;
        legendOwner: string;
        legendAssigned: boolean;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "legends"
  ): TypedContractMethod<
    [arg0: BigNumberish],
    [[bigint, string] & { landId: bigint; owner: string }],
    "view"
  >;
  getFunction(
    nameOrSignature: "onERC721Received"
  ): TypedContractMethod<
    [arg0: AddressLike, arg1: AddressLike, arg2: BigNumberish, arg3: BytesLike],
    [string],
    "view"
  >;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "renounceOwnership"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setChibiLegendContract"
  ): TypedContractMethod<
    [newChibiLegendContract: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setVerifier"
  ): TypedContractMethod<[newVerifier: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "transferOwnership"
  ): TypedContractMethod<[newOwner: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "unassignChibiLegend"
  ): TypedContractMethod<[legendId: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "verifier"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "withdrawErc20"
  ): TypedContractMethod<
    [erc20token: AddressLike, amount: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "withdrawErc721"
  ): TypedContractMethod<
    [erc721Token: AddressLike, tokenId: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "withdrawNativeToken"
  ): TypedContractMethod<[amount: BigNumberish], [void], "nonpayable">;

  getEvent(
    key: "ChibiLegendAssigned"
  ): TypedContractEvent<
    ChibiLegendAssignedEvent.InputTuple,
    ChibiLegendAssignedEvent.OutputTuple,
    ChibiLegendAssignedEvent.OutputObject
  >;
  getEvent(
    key: "ChibiLegendReleased"
  ): TypedContractEvent<
    ChibiLegendReleasedEvent.InputTuple,
    ChibiLegendReleasedEvent.OutputTuple,
    ChibiLegendReleasedEvent.OutputObject
  >;
  getEvent(
    key: "OwnershipTransferred"
  ): TypedContractEvent<
    OwnershipTransferredEvent.InputTuple,
    OwnershipTransferredEvent.OutputTuple,
    OwnershipTransferredEvent.OutputObject
  >;
  getEvent(
    key: "ReceivedERC20Token"
  ): TypedContractEvent<
    ReceivedERC20TokenEvent.InputTuple,
    ReceivedERC20TokenEvent.OutputTuple,
    ReceivedERC20TokenEvent.OutputObject
  >;
  getEvent(
    key: "ReceivedERC721Token"
  ): TypedContractEvent<
    ReceivedERC721TokenEvent.InputTuple,
    ReceivedERC721TokenEvent.OutputTuple,
    ReceivedERC721TokenEvent.OutputObject
  >;
  getEvent(
    key: "ReceivedNativeToken"
  ): TypedContractEvent<
    ReceivedNativeTokenEvent.InputTuple,
    ReceivedNativeTokenEvent.OutputTuple,
    ReceivedNativeTokenEvent.OutputObject
  >;

  filters: {
    "ChibiLegendAssigned(uint256,uint256,address)": TypedContractEvent<
      ChibiLegendAssignedEvent.InputTuple,
      ChibiLegendAssignedEvent.OutputTuple,
      ChibiLegendAssignedEvent.OutputObject
    >;
    ChibiLegendAssigned: TypedContractEvent<
      ChibiLegendAssignedEvent.InputTuple,
      ChibiLegendAssignedEvent.OutputTuple,
      ChibiLegendAssignedEvent.OutputObject
    >;

    "ChibiLegendReleased(uint256,uint256,address)": TypedContractEvent<
      ChibiLegendReleasedEvent.InputTuple,
      ChibiLegendReleasedEvent.OutputTuple,
      ChibiLegendReleasedEvent.OutputObject
    >;
    ChibiLegendReleased: TypedContractEvent<
      ChibiLegendReleasedEvent.InputTuple,
      ChibiLegendReleasedEvent.OutputTuple,
      ChibiLegendReleasedEvent.OutputObject
    >;

    "OwnershipTransferred(address,address)": TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;
    OwnershipTransferred: TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;

    "ReceivedERC20Token(address,address,uint256)": TypedContractEvent<
      ReceivedERC20TokenEvent.InputTuple,
      ReceivedERC20TokenEvent.OutputTuple,
      ReceivedERC20TokenEvent.OutputObject
    >;
    ReceivedERC20Token: TypedContractEvent<
      ReceivedERC20TokenEvent.InputTuple,
      ReceivedERC20TokenEvent.OutputTuple,
      ReceivedERC20TokenEvent.OutputObject
    >;

    "ReceivedERC721Token(address,address,uint256)": TypedContractEvent<
      ReceivedERC721TokenEvent.InputTuple,
      ReceivedERC721TokenEvent.OutputTuple,
      ReceivedERC721TokenEvent.OutputObject
    >;
    ReceivedERC721Token: TypedContractEvent<
      ReceivedERC721TokenEvent.InputTuple,
      ReceivedERC721TokenEvent.OutputTuple,
      ReceivedERC721TokenEvent.OutputObject
    >;

    "ReceivedNativeToken(address,uint256)": TypedContractEvent<
      ReceivedNativeTokenEvent.InputTuple,
      ReceivedNativeTokenEvent.OutputTuple,
      ReceivedNativeTokenEvent.OutputObject
    >;
    ReceivedNativeToken: TypedContractEvent<
      ReceivedNativeTokenEvent.InputTuple,
      ReceivedNativeTokenEvent.OutputTuple,
      ReceivedNativeTokenEvent.OutputObject
    >;
  };
}
