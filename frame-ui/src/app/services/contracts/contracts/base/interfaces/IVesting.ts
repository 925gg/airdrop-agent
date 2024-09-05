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
} from "../../../common";

export declare namespace IVesting {
  export type UnlockEventStruct = {
    percentX100: BigNumberish;
    unlockTime: BigNumberish;
  };

  export type UnlockEventStructOutput = [
    percentX100: bigint,
    unlockTime: bigint
  ] & { percentX100: bigint; unlockTime: bigint };
}

export interface IVestingInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "addBeneficiaries"
      | "addUnlockEvents"
      | "claimTokens"
      | "claimableAmount"
      | "claimablePercent"
      | "getBeneficiaries"
      | "getUnlockEvents"
      | "withdrawAllERC20"
  ): FunctionFragment;

  getEvent(nameOrSignatureOrTopic: "Released"): EventFragment;

  encodeFunctionData(
    functionFragment: "addBeneficiaries",
    values: [AddressLike[], BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "addUnlockEvents",
    values: [BigNumberish[], BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "claimTokens",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "claimableAmount",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "claimablePercent",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getBeneficiaries",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getUnlockEvents",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawAllERC20",
    values: [AddressLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "addBeneficiaries",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addUnlockEvents",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "claimTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "claimableAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "claimablePercent",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getBeneficiaries",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getUnlockEvents",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawAllERC20",
    data: BytesLike
  ): Result;
}

export namespace ReleasedEvent {
  export type InputTuple = [beneficiary: AddressLike, amount: BigNumberish];
  export type OutputTuple = [beneficiary: string, amount: bigint];
  export interface OutputObject {
    beneficiary: string;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface IVesting extends BaseContract {
  connect(runner?: ContractRunner | null): IVesting;
  waitForDeployment(): Promise<this>;

  interface: IVestingInterface;

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

  addBeneficiaries: TypedContractMethod<
    [_beneficiaries: AddressLike[], _tokenAmounts: BigNumberish[]],
    [void],
    "nonpayable"
  >;

  addUnlockEvents: TypedContractMethod<
    [_amount: BigNumberish[], _unlockTime: BigNumberish[]],
    [void],
    "nonpayable"
  >;

  claimTokens: TypedContractMethod<[], [void], "nonpayable">;

  claimableAmount: TypedContractMethod<
    [_beneficiary: AddressLike],
    [bigint],
    "view"
  >;

  claimablePercent: TypedContractMethod<[], [bigint], "view">;

  getBeneficiaries: TypedContractMethod<[], [string[]], "view">;

  getUnlockEvents: TypedContractMethod<
    [],
    [IVesting.UnlockEventStructOutput[]],
    "view"
  >;

  withdrawAllERC20: TypedContractMethod<
    [erc20Token: AddressLike],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "addBeneficiaries"
  ): TypedContractMethod<
    [_beneficiaries: AddressLike[], _tokenAmounts: BigNumberish[]],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "addUnlockEvents"
  ): TypedContractMethod<
    [_amount: BigNumberish[], _unlockTime: BigNumberish[]],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "claimTokens"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "claimableAmount"
  ): TypedContractMethod<[_beneficiary: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "claimablePercent"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getBeneficiaries"
  ): TypedContractMethod<[], [string[]], "view">;
  getFunction(
    nameOrSignature: "getUnlockEvents"
  ): TypedContractMethod<[], [IVesting.UnlockEventStructOutput[]], "view">;
  getFunction(
    nameOrSignature: "withdrawAllERC20"
  ): TypedContractMethod<[erc20Token: AddressLike], [void], "nonpayable">;

  getEvent(
    key: "Released"
  ): TypedContractEvent<
    ReleasedEvent.InputTuple,
    ReleasedEvent.OutputTuple,
    ReleasedEvent.OutputObject
  >;

  filters: {
    "Released(address,uint256)": TypedContractEvent<
      ReleasedEvent.InputTuple,
      ReleasedEvent.OutputTuple,
      ReleasedEvent.OutputObject
    >;
    Released: TypedContractEvent<
      ReleasedEvent.InputTuple,
      ReleasedEvent.OutputTuple,
      ReleasedEvent.OutputObject
    >;
  };
}
