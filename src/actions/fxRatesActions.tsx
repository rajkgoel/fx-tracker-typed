import { FxRate, Rate } from "../classes/FxRates";
import { RatesActionTypes } from "../constants/types";

interface FilterRatesActionReturnType {
    type: RatesActionTypes.FILTER_RATES;
    selectedFx: string;
}

interface GetRatesActionReturnType {
    type: RatesActionTypes.GET_RATES;
    rates: FxRate[];
}

export type RatesActionsReturnType = FilterRatesActionReturnType | GetRatesActionReturnType;

export interface RatesActions {
    filterRates(fxCurrency: string) : FilterRatesActionReturnType; 
    getRates():  GetRatesActionReturnType;
  }

export function filterRates(fxCurrency: string) : FilterRatesActionReturnType {
    return { type: RatesActionTypes.FILTER_RATES, selectedFx: fxCurrency }
}

export function getRates() : GetRatesActionReturnType {
    let rates: FxRate[] = [];

    var rate : Rate = { date: new Date(2018, 2, 5), rate: 65 };

    var fxRate: FxRate = { fxCurrency: "USD-INR", rates: [] }; 
    fxRate.rates.push(rate);

    let rate1: Rate = { date : new Date(2018, 2, 6), rate: 64 };
    fxRate.rates.push(rate1);
    rates.push(fxRate);

    ////

    var rate2: Rate = { date: new Date(2018, 2, 5), rate: 100 };

    var fxRate1: FxRate = { fxCurrency: "USD-JPY", rates: [] }; 
    fxRate1.rates.push(rate2);

    let rate3: Rate = { date: new Date(2018, 2, 6), rate: 101 };
    fxRate1.rates.push(rate3);

    rates.push(fxRate1);
    return { type: RatesActionTypes.GET_RATES, rates: rates}
}


