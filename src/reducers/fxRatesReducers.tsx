import { RatesActionTypes } from "../constants/types";
import { ForexSelectState, FxRate } from "../components/classes/FxRates";
import { RatesActions, DispatchProps }  from "../actions/fxRatesActions";

const initialState: ForexSelectState = { selectedFx: 'ALL', fxRates: [] };

const ratesReducer = (state=initialState, action: RatesActions): ForexSelectState => {
            //console.log('State: ', state);
            //console.log('Action: ', action);
            switch (action.type) {
                case RatesActionTypes.FILTER_RATES:
                    return {
                        ...state, selectedFx: action.selectedFx
                    };

                case RatesActionTypes.GET_RATES:
                    return { 
                        ...state, fxRates: action.rates
                    };

                default:
                    return state;
            }
}

export default ratesReducer;