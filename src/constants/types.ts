import { ForexSelectState } from "../components/classes/FxRates";

export interface RatesState {
    rates: ForexSelectState;
}

export type RatesStateType = RatesState;

export enum RatesActionTypes {
    FILTER_RATES = "FILTER_RATES",
    GET_RATES = "GET_RATES",
    OTHER_ACTION = "__any_other_action_type__"
  }