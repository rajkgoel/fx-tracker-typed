import { FxRateProps, RateProps } from "../components/classes/FxRates";

interface FilterRatesAction {
    type: 'FILTER_RATES'
}

interface GetRatesAction {
    type: 'GET_RATES'
}

export function filterRates(fxCurrency: string) {
    return { type: 'FILTER_RATES', payload: fxCurrency }
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
    return { type: 'GET_RATES', payload: rates}
}

type RatesActions = FilterRatesAction | GetRatesAction;