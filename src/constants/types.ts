import { ForexSelectProps } from "../components/classes/FxRates";

export interface RatesState {
    rates: ForexSelectProps;
}

export type RatesStateType = RatesState;

/*
interface Action<T> {
    type: string;
    payload?: T;
}

export type ActionType<T> = Action<T>;
*/
export enum RatesActionTypes {
    FILTER_RATES = "FILTER_RATES",
    GET_RATES = "GET_RATES",
    OTHER_ACTION = "__any_other_action_type__"
  }