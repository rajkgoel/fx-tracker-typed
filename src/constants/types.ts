import { ForexSelectProps } from "../components/classes/FxRates";

export interface RatesState {
    rates: ForexSelectProps;
}

export type RatesStateType = RatesState;

interface Action<T> {
    type: string;
    payload?: T;
}

export type ActionType<T> = Action<T>;