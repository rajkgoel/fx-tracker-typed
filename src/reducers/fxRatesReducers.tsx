import { RatesActionTypes } from "../constants/types";
import { ForexSelectProps, FxRateProps } from "../components/classes/FxRates";
import { RatesActions }  from "../actions/fxRatesActions";

const iState: ForexSelectProps = { selectedFx: 'ALL', fxRates: [] };

const ratesReducer = (state=iState, action: RatesActions): 
    ForexSelectProps => {
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