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

interface MigrationHandlerInterface extends ethers.utils.Interface {
  functions: {
    "USDG_PRECISION()": FunctionFragment;
    "admin()": FunctionFragment;
    "ammRouterV1()": FunctionFragment;
    "ammRouterV2()": FunctionFragment;
    "bnb()": FunctionFragment;
    "busd()": FunctionFragment;
    "gmt()": FunctionFragment;
    "initialize(address,address,address,address,address,address,address,address)": FunctionFragment;
    "isInitialized()": FunctionFragment;
    "redeemUsdg(address,address,uint256)": FunctionFragment;
    "refund(address,address,address,uint256)": FunctionFragment;
    "refundedAmounts(address,address)": FunctionFragment;
    "swap(address,uint256,uint256,uint256)": FunctionFragment;
    "usdg()": FunctionFragment;
    "vault()": FunctionFragment;
    "xgmt()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "USDG_PRECISION",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "admin", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "ammRouterV1",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "ammRouterV2",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "bnb", values?: undefined): string;
  encodeFunctionData(functionFragment: "busd", values?: undefined): string;
  encodeFunctionData(functionFragment: "gmt", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [string, string, string, string, string, string, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "isInitialized",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "redeemUsdg",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "refund",
    values: [string, string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "refundedAmounts",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "swap",
    values: [string, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "usdg", values?: undefined): string;
  encodeFunctionData(functionFragment: "vault", values?: undefined): string;
  encodeFunctionData(functionFragment: "xgmt", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "USDG_PRECISION",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "admin", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "ammRouterV1",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ammRouterV2",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "bnb", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "busd", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "gmt", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isInitialized",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "redeemUsdg", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "refund", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "refundedAmounts",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "swap", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "usdg", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "vault", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "xgmt", data: BytesLike): Result;

  events: {};
}

export class MigrationHandler extends BaseContract {
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

  interface: MigrationHandlerInterface;

  functions: {
    USDG_PRECISION(overrides?: CallOverrides): Promise<[BigNumber]>;

    admin(overrides?: CallOverrides): Promise<[string]>;

    ammRouterV1(overrides?: CallOverrides): Promise<[string]>;

    ammRouterV2(overrides?: CallOverrides): Promise<[string]>;

    bnb(overrides?: CallOverrides): Promise<[string]>;

    busd(overrides?: CallOverrides): Promise<[string]>;

    gmt(overrides?: CallOverrides): Promise<[string]>;

    initialize(
      _ammRouterV1: string,
      _ammRouterV2: string,
      _vault: string,
      _gmt: string,
      _xgmt: string,
      _usdg: string,
      _bnb: string,
      _busd: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    isInitialized(overrides?: CallOverrides): Promise<[boolean]>;

    redeemUsdg(
      _migrator: string,
      _redemptionToken: string,
      _usdgAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    refund(
      _migrator: string,
      _account: string,
      _token: string,
      _usdgAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    refundedAmounts(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    swap(
      _migrator: string,
      _gmtAmountForUsdg: BigNumberish,
      _xgmtAmountForUsdg: BigNumberish,
      _gmtAmountForBusd: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    usdg(overrides?: CallOverrides): Promise<[string]>;

    vault(overrides?: CallOverrides): Promise<[string]>;

    xgmt(overrides?: CallOverrides): Promise<[string]>;
  };

  USDG_PRECISION(overrides?: CallOverrides): Promise<BigNumber>;

  admin(overrides?: CallOverrides): Promise<string>;

  ammRouterV1(overrides?: CallOverrides): Promise<string>;

  ammRouterV2(overrides?: CallOverrides): Promise<string>;

  bnb(overrides?: CallOverrides): Promise<string>;

  busd(overrides?: CallOverrides): Promise<string>;

  gmt(overrides?: CallOverrides): Promise<string>;

  initialize(
    _ammRouterV1: string,
    _ammRouterV2: string,
    _vault: string,
    _gmt: string,
    _xgmt: string,
    _usdg: string,
    _bnb: string,
    _busd: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  isInitialized(overrides?: CallOverrides): Promise<boolean>;

  redeemUsdg(
    _migrator: string,
    _redemptionToken: string,
    _usdgAmount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  refund(
    _migrator: string,
    _account: string,
    _token: string,
    _usdgAmount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  refundedAmounts(
    arg0: string,
    arg1: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  swap(
    _migrator: string,
    _gmtAmountForUsdg: BigNumberish,
    _xgmtAmountForUsdg: BigNumberish,
    _gmtAmountForBusd: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  usdg(overrides?: CallOverrides): Promise<string>;

  vault(overrides?: CallOverrides): Promise<string>;

  xgmt(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    USDG_PRECISION(overrides?: CallOverrides): Promise<BigNumber>;

    admin(overrides?: CallOverrides): Promise<string>;

    ammRouterV1(overrides?: CallOverrides): Promise<string>;

    ammRouterV2(overrides?: CallOverrides): Promise<string>;

    bnb(overrides?: CallOverrides): Promise<string>;

    busd(overrides?: CallOverrides): Promise<string>;

    gmt(overrides?: CallOverrides): Promise<string>;

    initialize(
      _ammRouterV1: string,
      _ammRouterV2: string,
      _vault: string,
      _gmt: string,
      _xgmt: string,
      _usdg: string,
      _bnb: string,
      _busd: string,
      overrides?: CallOverrides
    ): Promise<void>;

    isInitialized(overrides?: CallOverrides): Promise<boolean>;

    redeemUsdg(
      _migrator: string,
      _redemptionToken: string,
      _usdgAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    refund(
      _migrator: string,
      _account: string,
      _token: string,
      _usdgAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    refundedAmounts(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    swap(
      _migrator: string,
      _gmtAmountForUsdg: BigNumberish,
      _xgmtAmountForUsdg: BigNumberish,
      _gmtAmountForBusd: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    usdg(overrides?: CallOverrides): Promise<string>;

    vault(overrides?: CallOverrides): Promise<string>;

    xgmt(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    USDG_PRECISION(overrides?: CallOverrides): Promise<BigNumber>;

    admin(overrides?: CallOverrides): Promise<BigNumber>;

    ammRouterV1(overrides?: CallOverrides): Promise<BigNumber>;

    ammRouterV2(overrides?: CallOverrides): Promise<BigNumber>;

    bnb(overrides?: CallOverrides): Promise<BigNumber>;

    busd(overrides?: CallOverrides): Promise<BigNumber>;

    gmt(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      _ammRouterV1: string,
      _ammRouterV2: string,
      _vault: string,
      _gmt: string,
      _xgmt: string,
      _usdg: string,
      _bnb: string,
      _busd: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    isInitialized(overrides?: CallOverrides): Promise<BigNumber>;

    redeemUsdg(
      _migrator: string,
      _redemptionToken: string,
      _usdgAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    refund(
      _migrator: string,
      _account: string,
      _token: string,
      _usdgAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    refundedAmounts(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    swap(
      _migrator: string,
      _gmtAmountForUsdg: BigNumberish,
      _xgmtAmountForUsdg: BigNumberish,
      _gmtAmountForBusd: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    usdg(overrides?: CallOverrides): Promise<BigNumber>;

    vault(overrides?: CallOverrides): Promise<BigNumber>;

    xgmt(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    USDG_PRECISION(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    admin(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ammRouterV1(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ammRouterV2(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    bnb(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    busd(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    gmt(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    initialize(
      _ammRouterV1: string,
      _ammRouterV2: string,
      _vault: string,
      _gmt: string,
      _xgmt: string,
      _usdg: string,
      _bnb: string,
      _busd: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    isInitialized(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    redeemUsdg(
      _migrator: string,
      _redemptionToken: string,
      _usdgAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    refund(
      _migrator: string,
      _account: string,
      _token: string,
      _usdgAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    refundedAmounts(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    swap(
      _migrator: string,
      _gmtAmountForUsdg: BigNumberish,
      _xgmtAmountForUsdg: BigNumberish,
      _gmtAmountForBusd: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    usdg(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    vault(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    xgmt(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
