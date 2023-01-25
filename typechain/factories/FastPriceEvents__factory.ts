/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  FastPriceEvents,
  FastPriceEventsInterface,
} from "../FastPriceEvents";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "priceFeed",
        type: "address",
      },
    ],
    name: "PriceUpdate",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_price",
        type: "uint256",
      },
    ],
    name: "emitPriceEvent",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "gov",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "isPriceFeed",
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
        internalType: "address",
        name: "_gov",
        type: "address",
      },
    ],
    name: "setGov",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_priceFeed",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_isPriceFeed",
        type: "bool",
      },
    ],
    name: "setIsPriceFeed",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50600080546001600160a01b03191633179055610341806100326000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c806312d43a511461005c57806357a94beb1461008057806369d4c924146100ba578063cfad57a2146100ea578063e0409c7114610110575b600080fd5b61006461013c565b604080516001600160a01b039092168252519081900360200190f35b6100a66004803603602081101561009657600080fd5b50356001600160a01b031661014b565b604080519115158252519081900360200190f35b6100e8600480360360408110156100d057600080fd5b506001600160a01b0381351690602001351515610160565b005b6100e86004803603602081101561010057600080fd5b50356001600160a01b03166101e2565b6100e86004803603604081101561012657600080fd5b506001600160a01b03813516906020013561025b565b6000546001600160a01b031681565b60016020526000908152604090205460ff1681565b6000546001600160a01b031633146101b7576040805162461bcd60e51b815260206004820152601560248201527423b7bb32b93730b136329d103337b93134b23232b760591b604482015290519081900360640190fd5b6001600160a01b03919091166000908152600160205260409020805460ff1916911515919091179055565b6000546001600160a01b03163314610239576040805162461bcd60e51b815260206004820152601560248201527423b7bb32b93730b136329d103337b93134b23232b760591b604482015290519081900360640190fd5b600080546001600160a01b0319166001600160a01b0392909216919091179055565b3360009081526001602052604090205460ff166102bf576040805162461bcd60e51b815260206004820152601f60248201527f4661737450726963654576656e74733a20696e76616c69642073656e64657200604482015290519081900360640190fd5b604080516001600160a01b038416815260208101839052338183015290517fc37a77b91cc3fc2d0e4b43fd2f347ec67adda10e39215de4742836cc3e42c97a9181900360600190a1505056fea26469706673582212209cb37efd07e12a654f3c00f30030b1a461d8eba4984abac3b84448460e11828e64736f6c634300060c0033";

export class FastPriceEvents__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<FastPriceEvents> {
    return super.deploy(overrides || {}) as Promise<FastPriceEvents>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): FastPriceEvents {
    return super.attach(address) as FastPriceEvents;
  }
  connect(signer: Signer): FastPriceEvents__factory {
    return super.connect(signer) as FastPriceEvents__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FastPriceEventsInterface {
    return new utils.Interface(_abi) as FastPriceEventsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FastPriceEvents {
    return new Contract(address, _abi, signerOrProvider) as FastPriceEvents;
  }
}
