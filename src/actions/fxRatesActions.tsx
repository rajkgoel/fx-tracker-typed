import { FxRate, Rate } from "../components/classes/FxRates";
import { RatesActionTypes } from "../constants/types";

interface FilterRatesAction {
    type: RatesActionTypes.FILTER_RATES;
    selectedFx: string;
}

interface GetRatesAction {
    type: RatesActionTypes.GET_RATES;
    rates: FxRate[];
}

export type RatesActions = FilterRatesAction | GetRatesAction;

export interface DispatchProps {
    filterRates(fxCurrency: string) : FilterRatesAction; 
    getRates():  GetRatesAction;
  }

export function filterRates(fxCurrency: string) : FilterRatesAction {
    return { type: RatesActionTypes.FILTER_RATES, selectedFx: fxCurrency }
}

export function getRates() : GetRatesAction {
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


