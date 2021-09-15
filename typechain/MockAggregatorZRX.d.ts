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
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface MockAggregatorZRXInterface extends ethers.utils.Interface {
  functions: {
    "latestAnswer()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "latestAnswer",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "latestAnswer",
    data: BytesLike
  ): Result;

  events: {
    "AnswerUpdated(int256,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AnswerUpdated"): EventFragment;
}

export type AnswerUpdatedEvent = TypedEvent<
  [BigNumber, BigNumber, BigNumber] & {
    current: BigNumber;
    roundId: BigNumber;
    timestamp: BigNumber;
  }
>;

export class MockAggregatorZRX extends BaseContract {
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

  interface: MockAggregatorZRXInterface;

  functions: {
    latestAnswer(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  latestAnswer(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    latestAnswer(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {
    "AnswerUpdated(int256,uint256,uint256)"(
      current?: BigNumberish | null,
      roundId?: BigNumberish | null,
      timestamp?: null
    ): TypedEventFilter<
      [BigNumber, BigNumber, BigNumber],
      { current: BigNumber; roundId: BigNumber; timestamp: BigNumber }
    >;

    AnswerUpdated(
      current?: BigNumberish | null,
      roundId?: BigNumberish | null,
      timestamp?: null
    ): TypedEventFilter<
      [BigNumber, BigNumber, BigNumber],
      { current: BigNumber; roundId: BigNumber; timestamp: BigNumber }
    >;
  };

  estimateGas: {
    latestAnswer(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    latestAnswer(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
