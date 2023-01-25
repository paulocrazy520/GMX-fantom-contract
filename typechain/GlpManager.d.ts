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

interface GlpManagerInterface extends ethers.utils.Interface {
  functions: {
    "BASIS_POINTS_DIVISOR()": FunctionFragment;
    "GLP_PRECISION()": FunctionFragment;
    "MAX_COOLDOWN_DURATION()": FunctionFragment;
    "PRICE_PRECISION()": FunctionFragment;
    "USDG_DECIMALS()": FunctionFragment;
    "addLiquidity(address,uint256,uint256,uint256)": FunctionFragment;
    "addLiquidityForAccount(address,address,address,uint256,uint256,uint256)": FunctionFragment;
    "aumAddition()": FunctionFragment;
    "aumDeduction()": FunctionFragment;
    "cooldownDuration()": FunctionFragment;
    "getAum(bool)": FunctionFragment;
    "getAumInUsdg(bool)": FunctionFragment;
    "getAums()": FunctionFragment;
    "getGlobalShortAveragePrice(address)": FunctionFragment;
    "getGlobalShortDelta(address,uint256,uint256)": FunctionFragment;
    "getPrice(bool)": FunctionFragment;
    "glp()": FunctionFragment;
    "gov()": FunctionFragment;
    "inPrivateMode()": FunctionFragment;
    "isHandler(address)": FunctionFragment;
    "lastAddedAt(address)": FunctionFragment;
    "removeLiquidity(address,uint256,uint256,address)": FunctionFragment;
    "removeLiquidityForAccount(address,address,uint256,uint256,address)": FunctionFragment;
    "setAumAdjustment(uint256,uint256)": FunctionFragment;
    "setCooldownDuration(uint256)": FunctionFragment;
    "setGov(address)": FunctionFragment;
    "setHandler(address,bool)": FunctionFragment;
    "setInPrivateMode(bool)": FunctionFragment;
    "setShortsTracker(address)": FunctionFragment;
    "setShortsTrackerAveragePriceWeight(uint256)": FunctionFragment;
    "shortsTracker()": FunctionFragment;
    "shortsTrackerAveragePriceWeight()": FunctionFragment;
    "usdg()": FunctionFragment;
    "vault()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "BASIS_POINTS_DIVISOR",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "GLP_PRECISION",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MAX_COOLDOWN_DURATION",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "PRICE_PRECISION",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "USDG_DECIMALS",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "addLiquidity",
    values: [string, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "addLiquidityForAccount",
    values: [string, string, string, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "aumAddition",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "aumDeduction",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "cooldownDuration",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "getAum", values: [boolean]): string;
  encodeFunctionData(
    functionFragment: "getAumInUsdg",
    values: [boolean]
  ): string;
  encodeFunctionData(functionFragment: "getAums", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getGlobalShortAveragePrice",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getGlobalShortDelta",
    values: [string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "getPrice", values: [boolean]): string;
  encodeFunctionData(functionFragment: "glp", values?: undefined): string;
  encodeFunctionData(functionFragment: "gov", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "inPrivateMode",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "isHandler", values: [string]): string;
  encodeFunctionData(functionFragment: "lastAddedAt", values: [string]): string;
  encodeFunctionData(
    functionFragment: "removeLiquidity",
    values: [string, BigNumberish, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "removeLiquidityForAccount",
    values: [string, string, BigNumberish, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "setAumAdjustment",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setCooldownDuration",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "setGov", values: [string]): string;
  encodeFunctionData(
    functionFragment: "setHandler",
    values: [string, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "setInPrivateMode",
    values: [boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "setShortsTracker",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setShortsTrackerAveragePriceWeight",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "shortsTracker",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "shortsTrackerAveragePriceWeight",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "usdg", values?: undefined): string;
  encodeFunctionData(functionFragment: "vault", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "BASIS_POINTS_DIVISOR",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "GLP_PRECISION",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "MAX_COOLDOWN_DURATION",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "PRICE_PRECISION",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "USDG_DECIMALS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addLiquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addLiquidityForAccount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "aumAddition",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "aumDeduction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "cooldownDuration",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getAum", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getAumInUsdg",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getAums", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getGlobalShortAveragePrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getGlobalShortDelta",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getPrice", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "glp", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "gov", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "inPrivateMode",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isHandler", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "lastAddedAt",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeLiquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeLiquidityForAccount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setAumAdjustment",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setCooldownDuration",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setGov", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setHandler", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setInPrivateMode",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setShortsTracker",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setShortsTrackerAveragePriceWeight",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "shortsTracker",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "shortsTrackerAveragePriceWeight",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "usdg", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "vault", data: BytesLike): Result;

  events: {
    "AddLiquidity(address,address,uint256,uint256,uint256,uint256,uint256)": EventFragment;
    "RemoveLiquidity(address,address,uint256,uint256,uint256,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AddLiquidity"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RemoveLiquidity"): EventFragment;
}

export class GlpManager extends BaseContract {
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

  interface: GlpManagerInterface;

  functions: {
    BASIS_POINTS_DIVISOR(overrides?: CallOverrides): Promise<[BigNumber]>;

    GLP_PRECISION(overrides?: CallOverrides): Promise<[BigNumber]>;

    MAX_COOLDOWN_DURATION(overrides?: CallOverrides): Promise<[BigNumber]>;

    PRICE_PRECISION(overrides?: CallOverrides): Promise<[BigNumber]>;

    USDG_DECIMALS(overrides?: CallOverrides): Promise<[BigNumber]>;

    addLiquidity(
      _token: string,
      _amount: BigNumberish,
      _minUsdg: BigNumberish,
      _minGlp: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    addLiquidityForAccount(
      _fundingAccount: string,
      _account: string,
      _token: string,
      _amount: BigNumberish,
      _minUsdg: BigNumberish,
      _minGlp: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    aumAddition(overrides?: CallOverrides): Promise<[BigNumber]>;

    aumDeduction(overrides?: CallOverrides): Promise<[BigNumber]>;

    cooldownDuration(overrides?: CallOverrides): Promise<[BigNumber]>;

    getAum(maximise: boolean, overrides?: CallOverrides): Promise<[BigNumber]>;

    getAumInUsdg(
      maximise: boolean,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getAums(overrides?: CallOverrides): Promise<[BigNumber[]]>;

    getGlobalShortAveragePrice(
      _token: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getGlobalShortDelta(
      _token: string,
      _price: BigNumberish,
      _size: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber, boolean]>;

    getPrice(
      _maximise: boolean,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    glp(overrides?: CallOverrides): Promise<[string]>;

    gov(overrides?: CallOverrides): Promise<[string]>;

    inPrivateMode(overrides?: CallOverrides): Promise<[boolean]>;

    isHandler(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;

    lastAddedAt(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    removeLiquidity(
      _tokenOut: string,
      _glpAmount: BigNumberish,
      _minOut: BigNumberish,
      _receiver: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    removeLiquidityForAccount(
      _account: string,
      _tokenOut: string,
      _glpAmount: BigNumberish,
      _minOut: BigNumberish,
      _receiver: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setAumAdjustment(
      _aumAddition: BigNumberish,
      _aumDeduction: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setCooldownDuration(
      _cooldownDuration: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setGov(
      _gov: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setHandler(
      _handler: string,
      _isActive: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setInPrivateMode(
      _inPrivateMode: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setShortsTracker(
      _shortsTracker: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setShortsTrackerAveragePriceWeight(
      _shortsTrackerAveragePriceWeight: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    shortsTracker(overrides?: CallOverrides): Promise<[string]>;

    shortsTrackerAveragePriceWeight(
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    usdg(overrides?: CallOverrides): Promise<[string]>;

    vault(overrides?: CallOverrides): Promise<[string]>;
  };

  BASIS_POINTS_DIVISOR(overrides?: CallOverrides): Promise<BigNumber>;

  GLP_PRECISION(overrides?: CallOverrides): Promise<BigNumber>;

  MAX_COOLDOWN_DURATION(overrides?: CallOverrides): Promise<BigNumber>;

  PRICE_PRECISION(overrides?: CallOverrides): Promise<BigNumber>;

  USDG_DECIMALS(overrides?: CallOverrides): Promise<BigNumber>;

  addLiquidity(
    _token: string,
    _amount: BigNumberish,
    _minUsdg: BigNumberish,
    _minGlp: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  addLiquidityForAccount(
    _fundingAccount: string,
    _account: string,
    _token: string,
    _amount: BigNumberish,
    _minUsdg: BigNumberish,
    _minGlp: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  aumAddition(overrides?: CallOverrides): Promise<BigNumber>;

  aumDeduction(overrides?: CallOverrides): Promise<BigNumber>;

  cooldownDuration(overrides?: CallOverrides): Promise<BigNumber>;

  getAum(maximise: boolean, overrides?: CallOverrides): Promise<BigNumber>;

  getAumInUsdg(
    maximise: boolean,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getAums(overrides?: CallOverrides): Promise<BigNumber[]>;

  getGlobalShortAveragePrice(
    _token: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getGlobalShortDelta(
    _token: string,
    _price: BigNumberish,
    _size: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[BigNumber, boolean]>;

  getPrice(_maximise: boolean, overrides?: CallOverrides): Promise<BigNumber>;

  glp(overrides?: CallOverrides): Promise<string>;

  gov(overrides?: CallOverrides): Promise<string>;

  inPrivateMode(overrides?: CallOverrides): Promise<boolean>;

  isHandler(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  lastAddedAt(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  removeLiquidity(
    _tokenOut: string,
    _glpAmount: BigNumberish,
    _minOut: BigNumberish,
    _receiver: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  removeLiquidityForAccount(
    _account: string,
    _tokenOut: string,
    _glpAmount: BigNumberish,
    _minOut: BigNumberish,
    _receiver: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setAumAdjustment(
    _aumAddition: BigNumberish,
    _aumDeduction: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setCooldownDuration(
    _cooldownDuration: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setGov(
    _gov: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setHandler(
    _handler: string,
    _isActive: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setInPrivateMode(
    _inPrivateMode: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setShortsTracker(
    _shortsTracker: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setShortsTrackerAveragePriceWeight(
    _shortsTrackerAveragePriceWeight: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  shortsTracker(overrides?: CallOverrides): Promise<string>;

  shortsTrackerAveragePriceWeight(
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  usdg(overrides?: CallOverrides): Promise<string>;

  vault(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    BASIS_POINTS_DIVISOR(overrides?: CallOverrides): Promise<BigNumber>;

    GLP_PRECISION(overrides?: CallOverrides): Promise<BigNumber>;

    MAX_COOLDOWN_DURATION(overrides?: CallOverrides): Promise<BigNumber>;

    PRICE_PRECISION(overrides?: CallOverrides): Promise<BigNumber>;

    USDG_DECIMALS(overrides?: CallOverrides): Promise<BigNumber>;

    addLiquidity(
      _token: string,
      _amount: BigNumberish,
      _minUsdg: BigNumberish,
      _minGlp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    addLiquidityForAccount(
      _fundingAccount: string,
      _account: string,
      _token: string,
      _amount: BigNumberish,
      _minUsdg: BigNumberish,
      _minGlp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    aumAddition(overrides?: CallOverrides): Promise<BigNumber>;

    aumDeduction(overrides?: CallOverrides): Promise<BigNumber>;

    cooldownDuration(overrides?: CallOverrides): Promise<BigNumber>;

    getAum(maximise: boolean, overrides?: CallOverrides): Promise<BigNumber>;

    getAumInUsdg(
      maximise: boolean,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAums(overrides?: CallOverrides): Promise<BigNumber[]>;

    getGlobalShortAveragePrice(
      _token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getGlobalShortDelta(
      _token: string,
      _price: BigNumberish,
      _size: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber, boolean]>;

    getPrice(_maximise: boolean, overrides?: CallOverrides): Promise<BigNumber>;

    glp(overrides?: CallOverrides): Promise<string>;

    gov(overrides?: CallOverrides): Promise<string>;

    inPrivateMode(overrides?: CallOverrides): Promise<boolean>;

    isHandler(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    lastAddedAt(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    removeLiquidity(
      _tokenOut: string,
      _glpAmount: BigNumberish,
      _minOut: BigNumberish,
      _receiver: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    removeLiquidityForAccount(
      _account: string,
      _tokenOut: string,
      _glpAmount: BigNumberish,
      _minOut: BigNumberish,
      _receiver: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setAumAdjustment(
      _aumAddition: BigNumberish,
      _aumDeduction: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setCooldownDuration(
      _cooldownDuration: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setGov(_gov: string, overrides?: CallOverrides): Promise<void>;

    setHandler(
      _handler: string,
      _isActive: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    setInPrivateMode(
      _inPrivateMode: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    setShortsTracker(
      _shortsTracker: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setShortsTrackerAveragePriceWeight(
      _shortsTrackerAveragePriceWeight: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    shortsTracker(overrides?: CallOverrides): Promise<string>;

    shortsTrackerAveragePriceWeight(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    usdg(overrides?: CallOverrides): Promise<string>;

    vault(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    AddLiquidity(
      account?: null,
      token?: null,
      amount?: null,
      aumInUsdg?: null,
      glpSupply?: null,
      usdgAmount?: null,
      mintAmount?: null
    ): TypedEventFilter<
      [string, string, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber],
      {
        account: string;
        token: string;
        amount: BigNumber;
        aumInUsdg: BigNumber;
        glpSupply: BigNumber;
        usdgAmount: BigNumber;
        mintAmount: BigNumber;
      }
    >;

    RemoveLiquidity(
      account?: null,
      token?: null,
      glpAmount?: null,
      aumInUsdg?: null,
      glpSupply?: null,
      usdgAmount?: null,
      amountOut?: null
    ): TypedEventFilter<
      [string, string, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber],
      {
        account: string;
        token: string;
        glpAmount: BigNumber;
        aumInUsdg: BigNumber;
        glpSupply: BigNumber;
        usdgAmount: BigNumber;
        amountOut: BigNumber;
      }
    >;
  };

  estimateGas: {
    BASIS_POINTS_DIVISOR(overrides?: CallOverrides): Promise<BigNumber>;

    GLP_PRECISION(overrides?: CallOverrides): Promise<BigNumber>;

    MAX_COOLDOWN_DURATION(overrides?: CallOverrides): Promise<BigNumber>;

    PRICE_PRECISION(overrides?: CallOverrides): Promise<BigNumber>;

    USDG_DECIMALS(overrides?: CallOverrides): Promise<BigNumber>;

    addLiquidity(
      _token: string,
      _amount: BigNumberish,
      _minUsdg: BigNumberish,
      _minGlp: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    addLiquidityForAccount(
      _fundingAccount: string,
      _account: string,
      _token: string,
      _amount: BigNumberish,
      _minUsdg: BigNumberish,
      _minGlp: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    aumAddition(overrides?: CallOverrides): Promise<BigNumber>;

    aumDeduction(overrides?: CallOverrides): Promise<BigNumber>;

    cooldownDuration(overrides?: CallOverrides): Promise<BigNumber>;

    getAum(maximise: boolean, overrides?: CallOverrides): Promise<BigNumber>;

    getAumInUsdg(
      maximise: boolean,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAums(overrides?: CallOverrides): Promise<BigNumber>;

    getGlobalShortAveragePrice(
      _token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getGlobalShortDelta(
      _token: string,
      _price: BigNumberish,
      _size: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPrice(_maximise: boolean, overrides?: CallOverrides): Promise<BigNumber>;

    glp(overrides?: CallOverrides): Promise<BigNumber>;

    gov(overrides?: CallOverrides): Promise<BigNumber>;

    inPrivateMode(overrides?: CallOverrides): Promise<BigNumber>;

    isHandler(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    lastAddedAt(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    removeLiquidity(
      _tokenOut: string,
      _glpAmount: BigNumberish,
      _minOut: BigNumberish,
      _receiver: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    removeLiquidityForAccount(
      _account: string,
      _tokenOut: string,
      _glpAmount: BigNumberish,
      _minOut: BigNumberish,
      _receiver: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setAumAdjustment(
      _aumAddition: BigNumberish,
      _aumDeduction: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setCooldownDuration(
      _cooldownDuration: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setGov(
      _gov: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setHandler(
      _handler: string,
      _isActive: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setInPrivateMode(
      _inPrivateMode: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setShortsTracker(
      _shortsTracker: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setShortsTrackerAveragePriceWeight(
      _shortsTrackerAveragePriceWeight: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    shortsTracker(overrides?: CallOverrides): Promise<BigNumber>;

    shortsTrackerAveragePriceWeight(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    usdg(overrides?: CallOverrides): Promise<BigNumber>;

    vault(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    BASIS_POINTS_DIVISOR(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    GLP_PRECISION(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    MAX_COOLDOWN_DURATION(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    PRICE_PRECISION(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    USDG_DECIMALS(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    addLiquidity(
      _token: string,
      _amount: BigNumberish,
      _minUsdg: BigNumberish,
      _minGlp: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    addLiquidityForAccount(
      _fundingAccount: string,
      _account: string,
      _token: string,
      _amount: BigNumberish,
      _minUsdg: BigNumberish,
      _minGlp: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    aumAddition(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    aumDeduction(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    cooldownDuration(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getAum(
      maximise: boolean,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAumInUsdg(
      maximise: boolean,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAums(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getGlobalShortAveragePrice(
      _token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getGlobalShortDelta(
      _token: string,
      _price: BigNumberish,
      _size: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPrice(
      _maximise: boolean,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    glp(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    gov(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    inPrivateMode(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isHandler(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    lastAddedAt(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    removeLiquidity(
      _tokenOut: string,
      _glpAmount: BigNumberish,
      _minOut: BigNumberish,
      _receiver: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    removeLiquidityForAccount(
      _account: string,
      _tokenOut: string,
      _glpAmount: BigNumberish,
      _minOut: BigNumberish,
      _receiver: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setAumAdjustment(
      _aumAddition: BigNumberish,
      _aumDeduction: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setCooldownDuration(
      _cooldownDuration: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setGov(
      _gov: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setHandler(
      _handler: string,
      _isActive: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setInPrivateMode(
      _inPrivateMode: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setShortsTracker(
      _shortsTracker: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setShortsTrackerAveragePriceWeight(
      _shortsTrackerAveragePriceWeight: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    shortsTracker(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    shortsTrackerAveragePriceWeight(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    usdg(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    vault(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
