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

interface IVaultUtilsInterface extends ethers.utils.Interface {
  functions: {
    "getBuyUsdgFeeBasisPoints(address,uint256)": FunctionFragment;
    "getEntryFundingRate(address,address,bool)": FunctionFragment;
    "getFeeBasisPoints(address,uint256,uint256,uint256,bool)": FunctionFragment;
    "getFundingFee(address,address,address,bool,uint256,uint256)": FunctionFragment;
    "getPositionFee(address,address,address,bool,uint256)": FunctionFragment;
    "getSellUsdgFeeBasisPoints(address,uint256)": FunctionFragment;
    "getSwapFeeBasisPoints(address,address,uint256)": FunctionFragment;
    "updateCumulativeFundingRate(address,address)": FunctionFragment;
    "validateDecreasePosition(address,address,address,uint256,uint256,bool,address)": FunctionFragment;
    "validateIncreasePosition(address,address,address,uint256,bool)": FunctionFragment;
    "validateLiquidation(address,address,address,bool,bool)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getBuyUsdgFeeBasisPoints",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getEntryFundingRate",
    values: [string, string, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "getFeeBasisPoints",
    values: [string, BigNumberish, BigNumberish, BigNumberish, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "getFundingFee",
    values: [string, string, string, boolean, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getPositionFee",
    values: [string, string, string, boolean, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getSellUsdgFeeBasisPoints",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getSwapFeeBasisPoints",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "updateCumulativeFundingRate",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "validateDecreasePosition",
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
    functionFragment: "validateIncreasePosition",
    values: [string, string, string, BigNumberish, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "validateLiquidation",
    values: [string, string, string, boolean, boolean]
  ): string;

  decodeFunctionResult(
    functionFragment: "getBuyUsdgFeeBasisPoints",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getEntryFundingRate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getFeeBasisPoints",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getFundingFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPositionFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSellUsdgFeeBasisPoints",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSwapFeeBasisPoints",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateCumulativeFundingRate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "validateDecreasePosition",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "validateIncreasePosition",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "validateLiquidation",
    data: BytesLike
  ): Result;

  events: {};
}

export class IVaultUtils extends BaseContract {
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

  interface: IVaultUtilsInterface;

  functions: {
    getBuyUsdgFeeBasisPoints(
      _token: string,
      _usdgAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getEntryFundingRate(
      _collateralToken: string,
      _indexToken: string,
      _isLong: boolean,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getFeeBasisPoints(
      _token: string,
      _usdgDelta: BigNumberish,
      _feeBasisPoints: BigNumberish,
      _taxBasisPoints: BigNumberish,
      _increment: boolean,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getFundingFee(
      _account: string,
      _collateralToken: string,
      _indexToken: string,
      _isLong: boolean,
      _size: BigNumberish,
      _entryFundingRate: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getPositionFee(
      _account: string,
      _collateralToken: string,
      _indexToken: string,
      _isLong: boolean,
      _sizeDelta: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getSellUsdgFeeBasisPoints(
      _token: string,
      _usdgAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getSwapFeeBasisPoints(
      _tokenIn: string,
      _tokenOut: string,
      _usdgAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    updateCumulativeFundingRate(
      _collateralToken: string,
      _indexToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    validateDecreasePosition(
      _account: string,
      _collateralToken: string,
      _indexToken: string,
      _collateralDelta: BigNumberish,
      _sizeDelta: BigNumberish,
      _isLong: boolean,
      _receiver: string,
      overrides?: CallOverrides
    ): Promise<[void]>;

    validateIncreasePosition(
      _account: string,
      _collateralToken: string,
      _indexToken: string,
      _sizeDelta: BigNumberish,
      _isLong: boolean,
      overrides?: CallOverrides
    ): Promise<[void]>;

    validateLiquidation(
      _account: string,
      _collateralToken: string,
      _indexToken: string,
      _isLong: boolean,
      _raise: boolean,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber]>;
  };

  getBuyUsdgFeeBasisPoints(
    _token: string,
    _usdgAmount: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getEntryFundingRate(
    _collateralToken: string,
    _indexToken: string,
    _isLong: boolean,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getFeeBasisPoints(
    _token: string,
    _usdgDelta: BigNumberish,
    _feeBasisPoints: BigNumberish,
    _taxBasisPoints: BigNumberish,
    _increment: boolean,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getFundingFee(
    _account: string,
    _collateralToken: string,
    _indexToken: string,
    _isLong: boolean,
    _size: BigNumberish,
    _entryFundingRate: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getPositionFee(
    _account: string,
    _collateralToken: string,
    _indexToken: string,
    _isLong: boolean,
    _sizeDelta: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getSellUsdgFeeBasisPoints(
    _token: string,
    _usdgAmount: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getSwapFeeBasisPoints(
    _tokenIn: string,
    _tokenOut: string,
    _usdgAmount: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  updateCumulativeFundingRate(
    _collateralToken: string,
    _indexToken: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  validateDecreasePosition(
    _account: string,
    _collateralToken: string,
    _indexToken: string,
    _collateralDelta: BigNumberish,
    _sizeDelta: BigNumberish,
    _isLong: boolean,
    _receiver: string,
    overrides?: CallOverrides
  ): Promise<void>;

  validateIncreasePosition(
    _account: string,
    _collateralToken: string,
    _indexToken: string,
    _sizeDelta: BigNumberish,
    _isLong: boolean,
    overrides?: CallOverrides
  ): Promise<void>;

  validateLiquidation(
    _account: string,
    _collateralToken: string,
    _indexToken: string,
    _isLong: boolean,
    _raise: boolean,
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber]>;

  callStatic: {
    getBuyUsdgFeeBasisPoints(
      _token: string,
      _usdgAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getEntryFundingRate(
      _collateralToken: string,
      _indexToken: string,
      _isLong: boolean,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getFeeBasisPoints(
      _token: string,
      _usdgDelta: BigNumberish,
      _feeBasisPoints: BigNumberish,
      _taxBasisPoints: BigNumberish,
      _increment: boolean,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getFundingFee(
      _account: string,
      _collateralToken: string,
      _indexToken: string,
      _isLong: boolean,
      _size: BigNumberish,
      _entryFundingRate: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPositionFee(
      _account: string,
      _collateralToken: string,
      _indexToken: string,
      _isLong: boolean,
      _sizeDelta: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSellUsdgFeeBasisPoints(
      _token: string,
      _usdgAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSwapFeeBasisPoints(
      _tokenIn: string,
      _tokenOut: string,
      _usdgAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    updateCumulativeFundingRate(
      _collateralToken: string,
      _indexToken: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    validateDecreasePosition(
      _account: string,
      _collateralToken: string,
      _indexToken: string,
      _collateralDelta: BigNumberish,
      _sizeDelta: BigNumberish,
      _isLong: boolean,
      _receiver: string,
      overrides?: CallOverrides
    ): Promise<void>;

    validateIncreasePosition(
      _account: string,
      _collateralToken: string,
      _indexToken: string,
      _sizeDelta: BigNumberish,
      _isLong: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    validateLiquidation(
      _account: string,
      _collateralToken: string,
      _indexToken: string,
      _isLong: boolean,
      _raise: boolean,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber]>;
  };

  filters: {};

  estimateGas: {
    getBuyUsdgFeeBasisPoints(
      _token: string,
      _usdgAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getEntryFundingRate(
      _collateralToken: string,
      _indexToken: string,
      _isLong: boolean,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getFeeBasisPoints(
      _token: string,
      _usdgDelta: BigNumberish,
      _feeBasisPoints: BigNumberish,
      _taxBasisPoints: BigNumberish,
      _increment: boolean,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getFundingFee(
      _account: string,
      _collateralToken: string,
      _indexToken: string,
      _isLong: boolean,
      _size: BigNumberish,
      _entryFundingRate: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPositionFee(
      _account: string,
      _collateralToken: string,
      _indexToken: string,
      _isLong: boolean,
      _sizeDelta: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSellUsdgFeeBasisPoints(
      _token: string,
      _usdgAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSwapFeeBasisPoints(
      _tokenIn: string,
      _tokenOut: string,
      _usdgAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    updateCumulativeFundingRate(
      _collateralToken: string,
      _indexToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    validateDecreasePosition(
      _account: string,
      _collateralToken: string,
      _indexToken: string,
      _collateralDelta: BigNumberish,
      _sizeDelta: BigNumberish,
      _isLong: boolean,
      _receiver: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    validateIncreasePosition(
      _account: string,
      _collateralToken: string,
      _indexToken: string,
      _sizeDelta: BigNumberish,
      _isLong: boolean,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    validateLiquidation(
      _account: string,
      _collateralToken: string,
      _indexToken: string,
      _isLong: boolean,
      _raise: boolean,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getBuyUsdgFeeBasisPoints(
      _token: string,
      _usdgAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getEntryFundingRate(
      _collateralToken: string,
      _indexToken: string,
      _isLong: boolean,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getFeeBasisPoints(
      _token: string,
      _usdgDelta: BigNumberish,
      _feeBasisPoints: BigNumberish,
      _taxBasisPoints: BigNumberish,
      _increment: boolean,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getFundingFee(
      _account: string,
      _collateralToken: string,
      _indexToken: string,
      _isLong: boolean,
      _size: BigNumberish,
      _entryFundingRate: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPositionFee(
      _account: string,
      _collateralToken: string,
      _indexToken: string,
      _isLong: boolean,
      _sizeDelta: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getSellUsdgFeeBasisPoints(
      _token: string,
      _usdgAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getSwapFeeBasisPoints(
      _tokenIn: string,
      _tokenOut: string,
      _usdgAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    updateCumulativeFundingRate(
      _collateralToken: string,
      _indexToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    validateDecreasePosition(
      _account: string,
      _collateralToken: string,
      _indexToken: string,
      _collateralDelta: BigNumberish,
      _sizeDelta: BigNumberish,
      _isLong: boolean,
      _receiver: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    validateIncreasePosition(
      _account: string,
      _collateralToken: string,
      _indexToken: string,
      _sizeDelta: BigNumberish,
      _isLong: boolean,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    validateLiquidation(
      _account: string,
      _collateralToken: string,
      _indexToken: string,
      _isLong: boolean,
      _raise: boolean,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
