import { FxRateProps, RateProps } from "../components/classes/FxRates";
import { RatesActionTypes } from "../constants/types";

export interface FilterRatesAction {
    type: RatesActionTypes.FILTER_RATES;
    selectedFx: string;
}

export interface GetRatesAction {
    type: RatesActionTypes.GET_RATES;
    rates: FxRateProps[];
}

export type RatesActions = FilterRatesAction | GetRatesAction;

export function filterRates(fxCurrency: string) {
    return { type: RatesActionTypes.FILTER_RATES, selectedFx: fxCurrency }
}

export function getRates() {
    let rates: FxRateProps[] = [];

    var rate : RateProps = { date: new Date(2018, 2, 5), rate: 65 };

    var fxRate: FxRateProps = { fxCurrency: "USD-INR", rates: [] }; 
    fxRate.rates.push(rate);

    let rate1: RateProps = { date : new Date(2018, 2, 6), rate: 64 };
    fxRate.rates.push(rate1);
    rates.push(fxRate);

    ////

    var rate2: RateProps = { date: new Date(2018, 2, 5), rate: 100 };

    var fxRate1: FxRateProps = { fxCurrency: "USD-JPY", rates: [] }; 
    fxRate1.rates.push(rate2);

    let rate3: RateProps = { date: new Date(2018, 2, 6), rate: 101 };
    fxRate1.rates.push(rate3);

    rates.push(fxRate1);
    return { type: RatesActionTypes.GET_RATES, rates: rates}
}


