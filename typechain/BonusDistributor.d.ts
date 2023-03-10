/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface BonusDistributorInterface extends ethers.utils.Interface {
  functions: {
    "BASIS_POINTS_DIVISOR()": FunctionFragment;
    "BONUS_DURATION()": FunctionFragment;
    "admin()": FunctionFragment;
    "bonusMultiplierBasisPoints()": FunctionFragment;
    "distribute()": FunctionFragment;
    "gov()": FunctionFragment;
    "lastDistributionTime()": FunctionFragment;
    "pendingRewards()": FunctionFragment;
    "rewardToken()": FunctionFragment;
    "rewardTracker()": FunctionFragment;
    "setAdmin(address)": FunctionFragment;
    "setBonusMultiplier(uint256)": FunctionFragment;
    "setGov(address)": FunctionFragment;
    "tokensPerInterval()": FunctionFragment;
    "updateLastDistributionTime()": FunctionFragment;
    "withdrawToken(address,address,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "BASIS_POINTS_DIVISOR",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "BONUS_DURATION",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "admin", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "bonusMultiplierBasisPoints",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "distribute",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "gov", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "lastDistributionTime",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "pendingRewards",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "rewardToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "rewardTracker",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "setAdmin", values: [string]): string;
  encodeFunctionData(
    functionFragment: "setBonusMultiplier",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "setGov", values: [string]): string;
  encodeFunctionData(
    functionFragment: "tokensPerInterval",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "updateLastDistributionTime",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawToken",
    values: [string, string, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "BASIS_POINTS_DIVISOR",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "BONUS_DURATION",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "admin", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "bonusMultiplierBasisPoints",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "distribute", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "gov", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "lastDistributionTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "pendingRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rewardToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rewardTracker",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setAdmin", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setBonusMultiplier",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setGov", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "tokensPerInterval",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateLastDistributionTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawToken",
    data: BytesLike
  ): Result;

  events: {
    "BonusMultiplierChange(uint256)": EventFragment;
    "Distribute(uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "BonusMultiplierChange"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Distribute"): EventFragment;
}

export class BonusDistributor extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: BonusDistributorInterface;

  functions: {
    BASIS_POINTS_DIVISOR(overrides?: CallOverrides): Promise<[BigNumber]>;

    BONUS_DURATION(overrides?: CallOverrides): Promise<[BigNumber]>;

    admin(overrides?: CallOverrides): Promise<[string]>;

    bonusMultiplierBasisPoints(overrides?: CallOverrides): Promise<[BigNumber]>;

    distribute(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    gov(overrides?: CallOverrides): Promise<[string]>;

    lastDistributionTime(overrides?: CallOverrides): Promise<[BigNumber]>;

    pendingRewards(overrides?: CallOverrides): Promise<[BigNumber]>;

    rewardToken(overrides?: CallOverrides): Promise<[string]>;

    rewardTracker(overrides?: CallOverrides): Promise<[string]>;

    setAdmin(
      _admin: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setBonusMultiplier(
      _bonusMultiplierBasisPoints: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setGov(
      _gov: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    tokensPerInterval(overrides?: CallOverrides): Promise<[BigNumber]>;

    updateLastDistributionTime(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    withdrawToken(
      _token: string,
      _account: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  BASIS_POINTS_DIVISOR(overrides?: CallOverrides): Promise<BigNumber>;

  BONUS_DURATION(overrides?: CallOverrides): Promise<BigNumber>;

  admin(overrides?: CallOverrides): Promise<string>;

  bonusMultiplierBasisPoints(overrides?: CallOverrides): Promise<BigNumber>;

  distribute(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  gov(overrides?: CallOverrides): Promise<string>;

  lastDistributionTime(overrides?: CallOverrides): Promise<BigNumber>;

  pendingRewards(overrides?: CallOverrides): Promise<BigNumber>;

  rewardToken(overrides?: CallOverrides): Promise<string>;

  rewardTracker(overrides?: CallOverrides): Promise<string>;

  setAdmin(
    _admin: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setBonusMultiplier(
    _bonusMultiplierBasisPoints: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setGov(
    _gov: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  tokensPerInterval(overrides?: CallOverrides): Promise<BigNumber>;

  updateLastDistributionTime(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  withdrawToken(
    _token: string,
    _account: string,
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    BASIS_POINTS_DIVISOR(overrides?: CallOverrides): Promise<BigNumber>;

    BONUS_DURATION(overrides?: CallOverrides): Promise<BigNumber>;

    admin(overrides?: CallOverrides): Promise<string>;

    bonusMultiplierBasisPoints(overrides?: CallOverrides): Promise<BigNumber>;

    distribute(overrides?: CallOverrides): Promise<BigNumber>;

    gov(overrides?: CallOverrides): Promise<string>;

    lastDistributionTime(overrides?: CallOverrides): Promise<BigNumber>;

    pendingRewards(overrides?: CallOverrides): Promise<BigNumber>;

    rewardToken(overrides?: CallOverrides): Promise<string>;

    rewardTracker(overrides?: CallOverrides): Promise<string>;

    setAdmin(_admin: string, overrides?: CallOverrides): Promise<void>;

    setBonusMultiplier(
      _bonusMultiplierBasisPoints: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setGov(_gov: string, overrides?: CallOverrides): Promise<void>;

    tokensPerInterval(overrides?: CallOverrides): Promise<BigNumber>;

    updateLastDistributionTime(overrides?: CallOverrides): Promise<void>;

    withdrawToken(
      _token: string,
      _account: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    BonusMultiplierChange(
      amount?: null
    ): TypedEventFilter<[BigNumber], { amount: BigNumber }>;

    Distribute(
      amount?: null
    ): TypedEventFilter<[BigNumber], { amount: BigNumber }>;
  };

  estimateGas: {
    BASIS_POINTS_DIVISOR(overrides?: CallOverrides): Promise<BigNumber>;

    BONUS_DURATION(overrides?: CallOverrides): Promise<BigNumber>;

    admin(overrides?: CallOverrides): Promise<BigNumber>;

    bonusMultiplierBasisPoints(overrides?: CallOverrides): Promise<BigNumber>;

    distribute(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    gov(overrides?: CallOverrides): Promise<BigNumber>;

    lastDistributionTime(overrides?: CallOverrides): Promise<BigNumber>;

    pendingRewards(overrides?: CallOverrides): Promise<BigNumber>;

    rewardToken(overrides?: CallOverrides): Promise<BigNumber>;

    rewardTracker(overrides?: CallOverrides): Promise<BigNumber>;

    setAdmin(
      _admin: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setBonusMultiplier(
      _bonusMultiplierBasisPoints: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setGov(
      _gov: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    tokensPerInterval(overrides?: CallOverrides): Promise<BigNumber>;

    updateLastDistributionTime(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    withdrawToken(
      _token: string,
      _account: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    BASIS_POINTS_DIVISOR(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    BONUS_DURATION(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    admin(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    bonusMultiplierBasisPoints(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    distribute(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    gov(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    lastDistributionTime(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    pendingRewards(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    rewardToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    rewardTracker(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setAdmin(
      _admin: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setBonusMultiplier(
      _bonusMultiplierBasisPoints: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setGov(
      _gov: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    tokensPerInterval(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    updateLastDistributionTime(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    withdrawToken(
      _token: string,
      _account: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
