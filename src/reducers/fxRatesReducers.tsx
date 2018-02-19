//import * as Immutable from "seamless-immutable";
import { ActionType } from "../constants/types";
import { ForexSelectProps, FxRateProps } from "../components/classes/FxRates";
import { RatesActions }  from "../actions/fxRatesActions";
//import { stat } from "fs";

const iState: ForexSelectProps = { selectedFx: 'ALL', fxRates: [] };

//export const initialState = Immutable.from(iState);

const ratesReducer = (state=iState, action: RatesActions): 
    ForexSelectProps => {
            //console.log('State: ', state);
            //console.log('Action: ', action);
            switch (action.type) {
                case 'FILTER_RATES':
                    return {
                        ...state, selectedFx: action.selectedFx 
                    };

                case 'GET_RATES':
                    return { 
                        ...state, fxRates: action.rates
                    };

                default:
                    return state;
            }
}

export default ratesReducer;