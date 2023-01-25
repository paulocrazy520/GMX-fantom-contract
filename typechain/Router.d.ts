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

interface RouterInterface extends ethers.utils.Interface {
  functions: {
    "addPlugin(address)": FunctionFragment;
    "approvePlugin(address)": FunctionFragment;
    "approvedPlugins(address,address)": FunctionFragment;
    "decreasePosition(address,address,uint256,uint256,bool,address,uint256)": FunctionFragment;
    "decreasePositionAndSwap(address[],address,uint256,uint256,bool,address,uint256,uint256)": FunctionFragment;
    "decreasePositionAndSwapETH(address[],address,uint256,uint256,bool,address,uint256,uint256)": FunctionFragment;
    "decreasePositionETH(address,address,uint256,uint256,bool,address,uint256)": FunctionFragment;
    "denyPlugin(address)": FunctionFragment;
    "directPoolDeposit(address,uint256)": FunctionFragment;
    "gov()": FunctionFragment;
    "increasePosition(address[],address,uint256,uint256,uint256,bool,uint256)": FunctionFragment;
    "increasePositionETH(address[],address,uint256,uint256,bool,uint256)": FunctionFragment;
    "pluginDecreasePosition(address,address,address,uint256,uint256,bool,address)": FunctionFragment;
    "pluginIncreasePosition(address,address,address,uint256,bool)": FunctionFragment;
    "pluginTransfer(address,address,address,uint256)": FunctionFragment;
    "plugins(address)": FunctionFragment;
    "removePlugin(address)": FunctionFragment;
    "setGov(address)": FunctionFragment;
    "swap(address[],uint256,uint256,address)": FunctionFragment;
    "swapETHToTokens(address[],uint256,address)": FunctionFragment;
    "swapTokensToETH(address[],uint256,uint256,address)": FunctionFragment;
    "usdg()": FunctionFragment;
    "vault()": FunctionFragment;
    "weth()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "addPlugin", values: [string]): string;
  encodeFunctionData(
    functionFragment: "approvePlugin",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "approvedPlugins",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "decreasePosition",
    values: [
      string,
      string,
      BigNumberish,
      BigNumberish,
      boolean,
      string,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "decreasePositionAndSwap",
    values: [
      string[],
      string,
      BigNumberish,
      BigNumberish,
      boolean,
      string,
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "decreasePositionAndSwapETH",
    values: [
      string[],
      string,
      BigNumberish,
      BigNumberish,
      boolean,
      string,
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "decreasePositionETH",
    values: [
      string,
      string,
      BigNumberish,
      BigNumberish,
      boolean,
      string,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(functionFragment: "denyPlugin", values: [string]): string;
  encodeFunctionData(
    functionFragment: "directPoolDeposit",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "gov", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "increasePosition",
    values: [
      string[],
      string,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      boolean,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "increasePositionETH",
    values: [
      string[],
      string,
      BigNumberish,
      BigNumberish,
      boolean,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "pluginDecreasePosition",
    values: [
      string,
      string,
      string,
      BigNumberish,
      BigNumberish,
      boolean,
      string
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "pluginIncreasePosition",
    values: [string, string, string, BigNumberish, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "pluginTransfer",
    values: [string, string, string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "plugins", values: [string]): string;
  encodeFunctionData(
    functionFragment: "removePlugin",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "setGov", values: [string]): string;
  encodeFunctionData(
    functionFragment: "swap",
    values: [string[], BigNumberish, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "swapETHToTokens",
    values: [string[], BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "swapTokensToETH",
    values: [string[], BigNumberish, BigNumberish, string]
  ): string;
  encodeFunctionData(functionFragment: "usdg", values?: undefined): string;
  encodeFunctionData(functionFragment: "vault", values?: undefined): string;
  encodeFunctionData(functionFragment: "weth", values?: undefined): string;

  decodeFunctionResult(functionFragment: "addPlugin", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "approvePlugin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "approvedPlugins",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "decreasePosition",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "decreasePositionAndSwap",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "decreasePositionAndSwapETH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "decreasePositionETH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "denyPlugin", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "directPoolDeposit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "gov", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "increasePosition",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "increasePositionETH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "pluginDecreasePosition",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "pluginIncreasePosition",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "pluginTransfer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "plugins", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "removePlugin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setGov", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "swap", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "swapETHToTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "swapTokensToETH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "usdg", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "vault", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "weth", data: BytesLike): Result;

  events: {
    "Swap(address,address,address,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Swap"): EventFragment;
}

export class Router extends BaseContract {
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

  interface: RouterInterface;

  functions: {
    addPlugin(
      _plugin: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    approvePlugin(
      _plugin: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    approvedPlugins(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    decreasePosition(
      _collateralToken: string,
      _indexToken: string,
      _collateralDelta: BigNumberish,
      _sizeDelta: BigNumberish,
      _isLong: boolean,
      _receiver: string,
      _price: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    decreasePositionAndSwap(
      _path: string[],
      _indexToken: string,
      _collateralDelta: BigNumberish,
      _sizeDelta: BigNumberish,
      _isLong: boolean,
      _receiver: string,
      _price: BigNumberish,
      _minOut: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    decreasePositionAndSwapETH(
      _path: string[],
      _indexToken: string,
      _collateralDelta: BigNumberish,
      _sizeDelta: BigNumberish,
      _isLong: boolean,
      _receiver: string,
      _price: BigNumberish,
      _minOut: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    decreasePositionETH(
      _collateralToken: string,
      _indexToken: string,
      _collateralDelta: BigNumberish,
      _sizeDelta: BigNumberish,
      _isLong: boolean,
      _receiver: string,
      _price: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    denyPlugin(
      _plugin: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    directPoolDeposit(
      _token: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    gov(overrides?: CallOverrides): Promise<[string]>;

    increasePosition(
      _path: string[],
      _indexToken: string,
      _amountIn: BigNumberish,
      _minOut: BigNumberish,
      _sizeDelta: BigNumberish,
      _isLong: boolean,
      _price: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    increasePositionETH(
      _path: string[],
      _indexToken: string,
      _minOut: BigNumberish,
      _sizeDelta: BigNumberish,
      _isLong: boolean,
      _price: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    pluginDecreasePosition(
      _account: string,
      _collateralToken: string,
      _indexToken: string,
      _collateralDelta: BigNumberish,
      _sizeDelta: BigNumberish,
      _isLong: boolean,
      _receiver: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    pluginIncreasePosition(
      _account: string,
      _collateralToken: string,
      _indexToken: string,
      _sizeDelta: BigNumberish,
      _isLong: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    pluginTransfer(
      _token: string,
      _account: string,
      _receiver: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    plugins(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;

    removePlugin(
      _plugin: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setGov(
      _gov: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    swap(
      _path: string[],
      _amountIn: BigNumberish,
      _minOut: BigNumberish,
      _receiver: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    swapETHToTokens(
      _path: string[],
      _minOut: BigNumberish,
      _receiver: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    swapTokensToETH(
      _path: string[],
      _amountIn: BigNumberish,
      _minOut: BigNumberish,
      _receiver: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    usdg(overrides?: CallOverrides): Promise<[string]>;

    vault(overrides?: CallOverrides): Promise<[string]>;

    weth(overrides?: CallOverrides): Promise<[string]>;
  };

  addPlugin(
    _plugin: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  approvePlugin(
    _plugin: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  approvedPlugins(
    arg0: string,
    arg1: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  decreasePosition(
    _collateralToken: string,
    _indexToken: string,
    _collateralDelta: BigNumberish,
    _sizeDelta: BigNumberish,
    _isLong: boolean,
    _receiver: string,
    _price: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  decreasePositionAndSwap(
    _path: string[],
    _indexToken: string,
    _collateralDelta: BigNumberish,
    _sizeDelta: BigNumberish,
    _isLong: boolean,
    _receiver: string,
    _price: BigNumberish,
    _minOut: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  decreasePositionAndSwapETH(
    _path: string[],
    _indexToken: string,
    _collateralDelta: BigNumberish,
    _sizeDelta: BigNumberish,
    _isLong: boolean,
    _receiver: string,
    _price: BigNumberish,
    _minOut: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  decreasePositionETH(
    _collateralToken: string,
    _indexToken: string,
    _collateralDelta: BigNumberish,
    _sizeDelta: BigNumberish,
    _isLong: boolean,
    _receiver: string,
    _price: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  denyPlugin(
    _plugin: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  directPoolDeposit(
    _token: string,
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  gov(overrides?: CallOverrides): Promise<string>;

  increasePosition(
    _path: string[],
    _indexToken: string,
    _amountIn: BigNumberish,
    _minOut: BigNumberish,
    _sizeDelta: BigNumberish,
    _isLong: boolean,
    _price: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  increasePositionETH(
    _path: string[],
    _indexToken: string,
    _minOut: BigNumberish,
    _sizeDelta: BigNumberish,
    _isLong: boolean,
    _price: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  pluginDecreasePosition(
    _account: string,
    _collateralToken: string,
    _indexToken: string,
    _collateralDelta: BigNumberish,
    _sizeDelta: BigNumberish,
    _isLong: boolean,
    _receiver: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  pluginIncreasePosition(
    _account: string,
    _collateralToken: string,
    _indexToken: string,
    _sizeDelta: BigNumberish,
    _isLong: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  pluginTransfer(
    _token: string,
    _account: string,
    _receiver: string,
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  plugins(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  removePlugin(
    _plugin: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setGov(
    _gov: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  swap(
    _path: string[],
    _amountIn: BigNumberish,
    _minOut: BigNumberish,
    _receiver: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  swapETHToTokens(
    _path: string[],
    _minOut: BigNumberish,
    _receiver: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  swapTokensToETH(
    _path: string[],
    _amountIn: BigNumberish,
    _minOut: BigNumberish,
    _receiver: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  usdg(overrides?: CallOverrides): Promise<string>;

  vault(overrides?: CallOverrides): Promise<string>;

  weth(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    addPlugin(_plugin: string, overrides?: CallOverrides): Promise<void>;

    approvePlugin(_plugin: string, overrides?: CallOverrides): Promise<void>;

    approvedPlugins(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    decreasePosition(
      _collateralToken: string,
      _indexToken: string,
      _collateralDelta: BigNumberish,
      _sizeDelta: BigNumberish,
      _isLong: boolean,
      _receiver: string,
      _price: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    decreasePositionAndSwap(
      _path: string[],
      _indexToken: string,
      _collateralDelta: BigNumberish,
      _sizeDelta: BigNumberish,
      _isLong: boolean,
      _receiver: string,
      _price: BigNumberish,
      _minOut: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    decreasePositionAndSwapETH(
      _path: string[],
      _indexToken: string,
      _collateralDelta: BigNumberish,
      _sizeDelta: BigNumberish,
      _isLong: boolean,
      _receiver: string,
      _price: BigNumberish,
      _minOut: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    decreasePositionETH(
      _collateralToken: string,
      _indexToken: string,
      _collateralDelta: BigNumberish,
      _sizeDelta: BigNumberish,
      _isLong: boolean,
      _receiver: string,
      _price: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    denyPlugin(_plugin: string, overrides?: CallOverrides): Promise<void>;

    directPoolDeposit(
      _token: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    gov(overrides?: CallOverrides): Promise<string>;

    increasePosition(
      _path: string[],
      _indexToken: string,
      _amountIn: BigNumberish,
      _minOut: BigNumberish,
      _sizeDelta: BigNumberish,
      _isLong: boolean,
      _price: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    increasePositionETH(
      _path: string[],
      _indexToken: string,
      _minOut: BigNumberish,
      _sizeDelta: BigNumberish,
      _isLong: boolean,
      _price: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    pluginDecreasePosition(
      _account: string,
      _collateralToken: string,
      _indexToken: string,
      _collateralDelta: BigNumberish,
      _sizeDelta: BigNumberish,
      _isLong: boolean,
      _receiver: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    pluginIncreasePosition(
      _account: string,
      _collateralToken: string,
      _indexToken: string,
      _sizeDelta: BigNumberish,
      _isLong: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    pluginTransfer(
      _token: string,
      _account: string,
      _receiver: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    plugins(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    removePlugin(_plugin: string, overrides?: CallOverrides): Promise<void>;

    setGov(_gov: string, overrides?: CallOverrides): Promise<void>;

    swap(
      _path: string[],
      _amountIn: BigNumberish,
      _minOut: BigNumberish,
      _receiver: string,
      overrides?: CallOverrides
    ): Promise<void>;

    swapETHToTokens(
      _path: string[],
      _minOut: BigNumberish,
      _receiver: string,
      overrides?: CallOverrides
    ): Promise<void>;

    swapTokensToETH(
      _path: string[],
      _amountIn: BigNumberish,
      _minOut: BigNumberish,
      _receiver: string,
      overrides?: CallOverrides
    ): Promise<void>;

    usdg(overrides?: CallOverrides): Promise<string>;

    vault(overrides?: CallOverrides): Promise<string>;

    weth(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    Swap(
      account?: null,
      tokenIn?: null,
      tokenOut?: null,
      amountIn?: null,
      amountOut?: null
    ): TypedEventFilter<
      [string, string, string, BigNumber, BigNumber],
      {
        account: string;
        tokenIn: string;
        tokenOut: string;
        amountIn: BigNumber;
        amountOut: BigNumber;
      }
    >;
  };

  estimateGas: {
    addPlugin(
      _plugin: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    approvePlugin(
      _plugin: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    approvedPlugins(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    decreasePosition(
      _collateralToken: string,
      _indexToken: string,
      _collateralDelta: BigNumberish,
      _sizeDelta: BigNumberish,
      _isLong: boolean,
      _receiver: string,
      _price: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    decreasePositionAndSwap(
      _path: string[],
      _indexToken: string,
      _collateralDelta: BigNumberish,
      _sizeDelta: BigNumberish,
      _isLong: boolean,
      _receiver: string,
      _price: BigNumberish,
      _minOut: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    decreasePositionAndSwapETH(
      _path: string[],
      _indexToken: string,
      _collateralDelta: BigNumberish,
      _sizeDelta: BigNumberish,
      _isLong: boolean,
      _receiver: string,
      _price: BigNumberish,
      _minOut: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    decreasePositionETH(
      _collateralToken: string,
      _indexToken: string,
      _collateralDelta: BigNumberish,
      _sizeDelta: BigNumberish,
      _isLong: boolean,
      _receiver: string,
      _price: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    denyPlugin(
      _plugin: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    directPoolDeposit(
      _token: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    gov(overrides?: CallOverrides): Promise<BigNumber>;

    increasePosition(
      _path: string[],
      _indexToken: string,
      _amountIn: BigNumberish,
      _minOut: BigNumberish,
      _sizeDelta: BigNumberish,
      _isLong: boolean,
      _price: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    increasePositionETH(
      _path: string[],
      _indexToken: string,
      _minOut: BigNumberish,
      _sizeDelta: BigNumberish,
      _isLong: boolean,
      _price: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    pluginDecreasePosition(
      _account: string,
      _collateralToken: string,
      _indexToken: string,
      _collateralDelta: BigNumberish,
      _sizeDelta: BigNumberish,
      _isLong: boolean,
      _receiver: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    pluginIncreasePosition(
      _account: string,
      _collateralToken: string,
      _indexToken: string,
      _sizeDelta: BigNumberish,
      _isLong: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    pluginTransfer(
      _token: string,
      _account: string,
      _receiver: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    plugins(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    removePlugin(
      _plugin: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setGov(
      _gov: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    swap(
      _path: string[],
      _amountIn: BigNumberish,
      _minOut: BigNumberish,
      _receiver: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    swapETHToTokens(
      _path: string[],
      _minOut: BigNumberish,
      _receiver: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    swapTokensToETH(
      _path: string[],
      _amountIn: BigNumberish,
      _minOut: BigNumberish,
      _receiver: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    usdg(overrides?: CallOverrides): Promise<BigNumber>;

    vault(overrides?: CallOverrides): Promise<BigNumber>;

    weth(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    addPlugin(
      _plugin: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    approvePlugin(
      _plugin: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    approvedPlugins(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    decreasePosition(
      _collateralToken: string,
      _indexToken: string,
      _collateralDelta: BigNumberish,
      _sizeDelta: BigNumberish,
      _isLong: boolean,
      _receiver: string,
      _price: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    decreasePositionAndSwap(
      _path: string[],
      _indexToken: string,
      _collateralDelta: BigNumberish,
      _sizeDelta: BigNumberish,
      _isLong: boolean,
      _receiver: string,
      _price: BigNumberish,
      _minOut: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    decreasePositionAndSwapETH(
      _path: string[],
      _indexToken: string,
      _collateralDelta: BigNumberish,
      _sizeDelta: BigNumberish,
      _isLong: boolean,
      _receiver: string,
      _price: BigNumberish,
      _minOut: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    decreasePositionETH(
      _collateralToken: string,
      _indexToken: string,
      _collateralDelta: BigNumberish,
      _sizeDelta: BigNumberish,
      _isLong: boolean,
      _receiver: string,
      _price: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    denyPlugin(
      _plugin: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    directPoolDeposit(
      _token: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    gov(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    increasePosition(
      _path: string[],
      _indexToken: string,
      _amountIn: BigNumberish,
      _minOut: BigNumberish,
      _sizeDelta: BigNumberish,
      _isLong: boolean,
      _price: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    increasePositionETH(
      _path: string[],
      _indexToken: string,
      _minOut: BigNumberish,
      _sizeDelta: BigNumberish,
      _isLong: boolean,
      _price: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    pluginDecreasePosition(
      _account: string,
      _collateralToken: string,
      _indexToken: string,
      _collateralDelta: BigNumberish,
      _sizeDelta: BigNumberish,
      _isLong: boolean,
      _receiver: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    pluginIncreasePosition(
      _account: string,
      _collateralToken: string,
      _indexToken: string,
      _sizeDelta: BigNumberish,
      _isLong: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    pluginTransfer(
      _token: string,
      _account: string,
      _receiver: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    plugins(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    removePlugin(
      _plugin: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setGov(
      _gov: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    swap(
      _path: string[],
      _amountIn: BigNumberish,
      _minOut: BigNumberish,
      _receiver: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    swapETHToTokens(
      _path: string[],
      _minOut: BigNumberish,
      _receiver: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    swapTokensToETH(
      _path: string[],
      _amountIn: BigNumberish,
      _minOut: BigNumberish,
      _receiver: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    usdg(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    vault(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    weth(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}