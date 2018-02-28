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
    let rates = loadRates();
    return { type: RatesActionTypes.GET_RATES, rates: rates}
}

function loadRates() : FxRate[]
{
    let rates: FxRate[] = [];
    var fxRate: FxRate = { fxCurrency: "USD-CAD", rates: [] }; 
    fxRate.rates.push({ date: new Date(2018, 2, 5), rate: 1.13 });
    fxRate.rates.push({ date : new Date(2018, 2, 6), rate: 1.10 });
    rates.push(fxRate);

    var fxRate1: FxRate = { fxCurrency: "USD-JPY", rates: [] }; 
    fxRate1.rates.push({ date: new Date(2018, 2, 5), rate: 100 });
    fxRate1.rates.push({ date: new Date(2018, 2, 6), rate: 101 });
    rates.push(fxRate1);
    return rates;
}


