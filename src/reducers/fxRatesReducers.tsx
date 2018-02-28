import { RatesActionTypes } from "../constants/types";
import { ForexSelectInfo } from "../classes/FxRates";
import { RatesActionsReturnType }  from "../actions/fxRatesActions";

const initialState: ForexSelectInfo = { selectedFx: 'ALL', fxRates: [] };

const ratesReducer = (state=initialState, action: RatesActionsReturnType): ForexSelectInfo => {
            switch (action.type) {
                case RatesActionTypes.FILTER_RATES:
                    return { ...state, selectedFx: action.selectedFx };

                case RatesActionTypes.GET_RATES:
                    return { ...state, fxRates: action.rates };

                default:
                    return state;
            }
}

export default ratesReducer;