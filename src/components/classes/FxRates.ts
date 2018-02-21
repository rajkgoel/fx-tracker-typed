export interface Rate{
    date: Date;
    rate: number;
}

export interface FxRate {
    fxCurrency: string;
    rates: Rate[];
}

export interface ForexSelectState {
    selectedFx: string;
    fxRates: FxRate[];
}