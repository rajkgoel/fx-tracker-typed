import * as Immutable from "seamless-immutable";
import { ActionType } from "../constants/types";
import { ForexSelectProps, FxRateProps } from "../components/classes/FxRates";
import { stat } from "fs";

const iState: ForexSelectProps = { selectedFx: 'ALL', fxRates: [] };

//export const initialState = Immutable.from(iState);

const ratesReducer = 
    (state=iState, action: ActionType<{}>): 
    ForexSelectProps => {
            //console.log('State: ', state);
            //console.log('Action: ', action);
            switch (action.type) {
                case 'FILTER_RATES':
                    //state.selectedFx = action.payload as string;
                    //return state; //state.set('selectedFx', action.payload);
                    return { selectedFx: action.payload as string, fxRates: state.fxRates };

                case 'GET_RATES':
                    //state.fxRates = action.payload as FxRateProps[];
                    //return state; //state.set('fxRates', action.payload);
                    return { selectedFx: state.selectedFx, fxRates: action.payload as FxRateProps[]};

                default:
                    return state;
            }
}

export default ratesReducer;