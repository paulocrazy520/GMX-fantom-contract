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
  PayableOverrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface RewardRouterInterface extends ethers.utils.Interface {
  functions: {
    "batchCompoundForAccounts(address[])": FunctionFragment;
    "batchStakeGmxForAccount(address[],uint256[])": FunctionFragment;
    "bnGmx()": FunctionFragment;
    "bonusGmxTracker()": FunctionFragment;
    "claim()": FunctionFragment;
    "claimEsGmx()": FunctionFragment;
    "claimFees()": FunctionFragment;
    "compound()": FunctionFragment;
    "compoundForAccount(address)": FunctionFragment;
    "esGmx()": FunctionFragment;
    "feeGlpTracker()": FunctionFragment;
    "feeGmxTracker()": FunctionFragment;
    "glp()": FunctionFragment;
    "glpManager()": FunctionFragment;
    "gmx()": FunctionFragment;
    "gov()": FunctionFragment;
    "initialize(address,address,address,address,address,address,address,address,address,address,address)": FunctionFragment;
    "isInitialized()": FunctionFragment;
    "mintAndStakeGlp(address,uint256,uint256,uint256)": FunctionFragment;
    "mintAndStakeGlpETH(uint256,uint256)": FunctionFragment;
    "setGov(address)": FunctionFragment;
    "stakeEsGmx(uint256)": FunctionFragment;
    "stakeGmx(uint256)": FunctionFragment;
    "stakeGmxForAccount(address,uint256)": FunctionFragment;
    "stakedGlpTracker()": FunctionFragment;
    "stakedGmxTracker()": FunctionFragment;
    "unstakeAndRedeemGlp(address,uint256,uint256,address)": FunctionFragment;
    "unstakeAndRedeemGlpETH(uint256,uint256,address)": FunctionFragment;
    "unstakeEsGmx(uint256)": FunctionFragment;
    "unstakeGmx(uint256)": FunctionFragment;
    "weth()": FunctionFragment;
    "withdrawToken(address,address,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "batchCompoundForAccounts",
    values: [string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "batchStakeGmxForAccount",
    values: [string[], BigNumberish[]]
  ): string;
  encodeFunctionData(functionFragment: "bnGmx", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "bonusGmxTracker",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "claim", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "claimEsGmx",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "claimFees", values?: undefined): string;
  encodeFunctionData(functionFragment: "compound", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "compoundForAccount",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "esGmx", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "feeGlpTracker",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "feeGmxTracker",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "glp", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "glpManager",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "gmx", values?: undefined): string;
  encodeFunctionData(functionFragment: "gov", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "isInitialized",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "mintAndStakeGlp",
    values: [string, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "mintAndStakeGlpETH",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "setGov", values: [string]): string;
  encodeFunctionData(
    functionFragment: "stakeEsGmx",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "stakeGmx",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "stakeGmxForAccount",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "stakedGlpTracker",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "stakedGmxTracker",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "unstakeAndRedeemGlp",
    values: [string, BigNumberish, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "unstakeAndRedeemGlpETH",
    values: [BigNumberish, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "unstakeEsGmx",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "unstakeGmx",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "weth", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "withdrawToken",
    values: [string, string, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "batchCompoundForAccounts",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "batchStakeGmxForAccount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "bnGmx", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "bonusGmxTracker",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "claim", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "claimEsGmx", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "claimFees", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "compound", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "compoundForAccount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "esGmx", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "feeGlpTracker",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "feeGmxTracker",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "glp", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "glpManager", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "gmx", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "gov", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isInitialized",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "mintAndStakeGlp",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "mintAndStakeGlpETH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setGov", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "stakeEsGmx", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "stakeGmx", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "stakeGmxForAccount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "stakedGlpTracker",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "stakedGmxTracker",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "unstakeAndRedeemGlp",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "unstakeAndRedeemGlpETH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "unstakeEsGmx",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "unstakeGmx", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "weth", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "withdrawToken",
    data: BytesLike
  ): Result;

  events: {
    "StakeGlp(address,uint256)": EventFragment;
    "StakeGmx(address,uint256)": EventFragment;
    "UnstakeGlp(address,uint256)": EventFragment;
    "UnstakeGmx(address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "StakeGlp"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "StakeGmx"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "UnstakeGlp"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "UnstakeGmx"): EventFragment;
}

export class RewardRouter extends BaseContract {
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

  interface: RewardRouterInterface;

  functions: {
    batchCompoundForAccounts(
      _accounts: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    batchStakeGmxForAccount(
      _accounts: string[],
      _amounts: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    bnGmx(overrides?: CallOverrides): Promise<[string]>;

    bonusGmxTracker(overrides?: CallOverrides): Promise<[string]>;

    claim(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    claimEsGmx(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    claimFees(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    compound(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    compoundForAccount(
      _account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    esGmx(overrides?: CallOverrides): Promise<[string]>;

    feeGlpTracker(overrides?: CallOverrides): Promise<[string]>;

    feeGmxTracker(overrides?: CallOverrides): Promise<[string]>;

    glp(overrides?: CallOverrides): Promise<[string]>;

    glpManager(overrides?: CallOverrides): Promise<[string]>;

    gmx(overrides?: CallOverrides): Promise<[string]>;

    gov(overrides?: CallOverrides): Promise<[string]>;

    initialize(
      _weth: string,
      _gmx: string,
      _esGmx: string,
      _bnGmx: string,
      _glp: string,
      _stakedGmxTracker: string,
      _bonusGmxTracker: string,
      _feeGmxTracker: string,
      _feeGlpTracker: string,
      _stakedGlpTracker: string,
      _glpManager: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    isInitialized(overrides?: CallOverrides): Promise<[boolean]>;

    mintAndStakeGlp(
      _token: string,
      _amount: BigNumberish,
      _minUsdg: BigNumberish,
      _minGlp: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    mintAndStakeGlpETH(
      _minUsdg: BigNumberish,
      _minGlp: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setGov(
      _gov: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    stakeEsGmx(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    stakeGmx(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    stakeGmxForAccount(
      _account: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    stakedGlpTracker(overrides?: CallOverrides): Promise<[string]>;

    stakedGmxTracker(overrides?: CallOverrides): Promise<[string]>;

    unstakeAndRedeemGlp(
      _tokenOut: string,
      _glpAmount: BigNumberish,
      _minOut: BigNumberish,
      _receiver: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    unstakeAndRedeemGlpETH(
      _glpAmount: BigNumberish,
      _minOut: BigNumberish,
      _receiver: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    unstakeEsGmx(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    unstakeGmx(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    weth(overrides?: CallOverrides): Promise<[string]>;

    withdrawToken(
      _token: string,
      _account: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  batchCompoundForAccounts(
    _accounts: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  batchStakeGmxForAccount(
    _accounts: string[],
    _amounts: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  bnGmx(overrides?: CallOverrides): Promise<string>;

  bonusGmxTracker(overrides?: CallOverrides): Promise<string>;

  claim(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  claimEsGmx(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  claimFees(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  compound(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  compoundForAccount(
    _account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  esGmx(overrides?: CallOverrides): Promise<string>;

  feeGlpTracker(overrides?: CallOverrides): Promise<string>;

  feeGmxTracker(overrides?: CallOverrides): Promise<string>;

  glp(overrides?: CallOverrides): Promise<string>;

  glpManager(overrides?: CallOverrides): Promise<string>;

  gmx(overrides?: CallOverrides): Promise<string>;

  gov(overrides?: CallOverrides): Promise<string>;

  initialize(
    _weth: string,
    _gmx: string,
    _esGmx: string,
    _bnGmx: string,
    _glp: string,
    _stakedGmxTracker: string,
    _bonusGmxTracker: string,
    _feeGmxTracker: string,
    _feeGlpTracker: string,
    _stakedGlpTracker: string,
    _glpManager: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  isInitialized(overrides?: CallOverrides): Promise<boolean>;

  mintAndStakeGlp(
    _token: string,
    _amount: BigNumberish,
    _minUsdg: BigNumberish,
    _minGlp: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  mintAndStakeGlpETH(
    _minUsdg: BigNumberish,
    _minGlp: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setGov(
    _gov: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  stakeEsGmx(
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  stakeGmx(
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  stakeGmxForAccount(
    _account: string,
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  stakedGlpTracker(overrides?: CallOverrides): Promise<string>;

  stakedGmxTracker(overrides?: CallOverrides): Promise<string>;

  unstakeAndRedeemGlp(
    _tokenOut: string,
    _glpAmount: BigNumberish,
    _minOut: BigNumberish,
    _receiver: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  unstakeAndRedeemGlpETH(
    _glpAmount: BigNumberish,
    _minOut: BigNumberish,
    _receiver: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  unstakeEsGmx(
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  unstakeGmx(
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  weth(overrides?: CallOverrides): Promise<string>;

  withdrawToken(
    _token: string,
    _account: string,
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    batchCompoundForAccounts(
      _accounts: string[],
      overrides?: CallOverrides
    ): Promise<void>;

    batchStakeGmxForAccount(
      _accounts: string[],
      _amounts: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    bnGmx(overrides?: CallOverrides): Promise<string>;

    bonusGmxTracker(overrides?: CallOverrides): Promise<string>;

    claim(overrides?: CallOverrides): Promise<void>;

    claimEsGmx(overrides?: CallOverrides): Promise<void>;

    claimFees(overrides?: CallOverrides): Promise<void>;

    compound(overrides?: CallOverrides): Promise<void>;

    compoundForAccount(
      _account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    esGmx(overrides?: CallOverrides): Promise<string>;

    feeGlpTracker(overrides?: CallOverrides): Promise<string>;

    feeGmxTracker(overrides?: CallOverrides): Promise<string>;

    glp(overrides?: CallOverrides): Promise<string>;

    glpManager(overrides?: CallOverrides): Promise<string>;

    gmx(overrides?: CallOverrides): Promise<string>;

    gov(overrides?: CallOverrides): Promise<string>;

    initialize(
      _weth: string,
      _gmx: string,
      _esGmx: string,
      _bnGmx: string,
      _glp: string,
      _stakedGmxTracker: string,
      _bonusGmxTracker: string,
      _feeGmxTracker: string,
      _feeGlpTracker: string,
      _stakedGlpTracker: string,
      _glpManager: string,
      overrides?: CallOverrides
    ): Promise<void>;

    isInitialized(overrides?: CallOverrides): Promise<boolean>;

    mintAndStakeGlp(
      _token: string,
      _amount: BigNumberish,
      _minUsdg: BigNumberish,
      _minGlp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    mintAndStakeGlpETH(
      _minUsdg: BigNumberish,
      _minGlp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setGov(_gov: string, overrides?: CallOverrides): Promise<void>;

    stakeEsGmx(_amount: BigNumberish, overrides?: CallOverrides): Promise<void>;

    stakeGmx(_amount: BigNumberish, overrides?: CallOverrides): Promise<void>;

    stakeGmxForAccount(
      _account: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    stakedGlpTracker(overrides?: CallOverrides): Promise<string>;

    stakedGmxTracker(overrides?: CallOverrides): Promise<string>;

    unstakeAndRedeemGlp(
      _tokenOut: string,
      _glpAmount: BigNumberish,
      _minOut: BigNumberish,
      _receiver: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    unstakeAndRedeemGlpETH(
      _glpAmount: BigNumberish,
      _minOut: BigNumberish,
      _receiver: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    unstakeEsGmx(
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    unstakeGmx(_amount: BigNumberish, overrides?: CallOverrides): Promise<void>;

    weth(overrides?: CallOverrides): Promise<string>;

    withdrawToken(
      _token: string,
      _account: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    StakeGlp(
      account?: null,
      amount?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { account: string; amount: BigNumber }
    >;

    StakeGmx(
      account?: null,
      amount?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { account: string; amount: BigNumber }
    >;

    UnstakeGlp(
      account?: null,
      amount?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { account: string; amount: BigNumber }
    >;

    UnstakeGmx(
      account?: null,
      amount?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { account: string; amount: BigNumber }
    >;
  };

  estimateGas: {
    batchCompoundForAccounts(
      _accounts: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    batchStakeGmxForAccount(
      _accounts: string[],
      _amounts: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    bnGmx(overrides?: CallOverrides): Promise<BigNumber>;

    bonusGmxTracker(overrides?: CallOverrides): Promise<BigNumber>;

    claim(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    claimEsGmx(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    claimFees(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    compound(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    compoundForAccount(
      _account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    esGmx(overrides?: CallOverrides): Promise<BigNumber>;

    feeGlpTracker(overrides?: CallOverrides): Promise<BigNumber>;

    feeGmxTracker(overrides?: CallOverrides): Promise<BigNumber>;

    glp(overrides?: CallOverrides): Promise<BigNumber>;

    glpManager(overrides?: CallOverrides): Promise<BigNumber>;

    gmx(overrides?: CallOverrides): Promise<BigNumber>;

    gov(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      _weth: string,
      _gmx: string,
      _esGmx: string,
      _bnGmx: string,
      _glp: string,
      _stakedGmxTracker: string,
      _bonusGmxTracker: string,
      _feeGmxTracker: string,
      _feeGlpTracker: string,
      _stakedGlpTracker: string,
      _glpManager: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    isInitialized(overrides?: CallOverrides): Promise<BigNumber>;

    mintAndStakeGlp(
      _token: string,
      _amount: BigNumberish,
      _minUsdg: BigNumberish,
      _minGlp: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    mintAndStakeGlpETH(
      _minUsdg: BigNumberish,
      _minGlp: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setGov(
      _gov: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    stakeEsGmx(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    stakeGmx(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    stakeGmxForAccount(
      _account: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    stakedGlpTracker(overrides?: CallOverrides): Promise<BigNumber>;

    stakedGmxTracker(overrides?: CallOverrides): Promise<BigNumber>;

    unstakeAndRedeemGlp(
      _tokenOut: string,
      _glpAmount: BigNumberish,
      _minOut: BigNumberish,
      _receiver: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    unstakeAndRedeemGlpETH(
      _glpAmount: BigNumberish,
      _minOut: BigNumberish,
      _receiver: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    unstakeEsGmx(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    unstakeGmx(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    weth(overrides?: CallOverrides): Promise<BigNumber>;

    withdrawToken(
      _token: string,
      _account: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    batchCompoundForAccounts(
      _accounts: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    batchStakeGmxForAccount(
      _accounts: string[],
      _amounts: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    bnGmx(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    bonusGmxTracker(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    claim(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    claimEsGmx(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    claimFees(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    compound(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    compoundForAccount(
      _account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    esGmx(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    feeGlpTracker(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    feeGmxTracker(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    glp(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    glpManager(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    gmx(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    gov(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    initialize(
      _weth: string,
      _gmx: string,
      _esGmx: string,
      _bnGmx: string,
      _glp: string,
      _stakedGmxTracker: string,
      _bonusGmxTracker: string,
      _feeGmxTracker: string,
      _feeGlpTracker: string,
      _stakedGlpTracker: string,
      _glpManager: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    isInitialized(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    mintAndStakeGlp(
      _token: string,
      _amount: BigNumberish,
      _minUsdg: BigNumberish,
      _minGlp: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    mintAndStakeGlpETH(
      _minUsdg: BigNumberish,
      _minGlp: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setGov(
      _gov: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    stakeEsGmx(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    stakeGmx(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    stakeGmxForAccount(
      _account: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    stakedGlpTracker(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    stakedGmxTracker(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    unstakeAndRedeemGlp(
      _tokenOut: string,
      _glpAmount: BigNumberish,
      _minOut: BigNumberish,
      _receiver: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    unstakeAndRedeemGlpETH(
      _glpAmount: BigNumberish,
      _minOut: BigNumberish,
      _receiver: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    unstakeEsGmx(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    unstakeGmx(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    weth(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    withdrawToken(
      _token: string,
      _account: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
