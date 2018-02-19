export interface RateProps{
    date: Date;
    rate: number;
}

export interface FxRateProps{
    fxCurrency: string;
    rates: RateProps[];
}

export interface ForexSelectProps {
    selectedFx: string;
    fxRates: FxRateProps[];
}