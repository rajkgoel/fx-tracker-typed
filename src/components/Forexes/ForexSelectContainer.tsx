import { ForexSelectInfo } from "../classes/FxRates";
import { Dispatch, connect } from "react-redux";
import { RatesActions, filterRates, getRates } from "../../actions/fxRatesActions";
import { ForexSelect } from "./Forexes";

const mapStateToProps = (state: ForexSelectInfo) => {
    return {
        selectedFx: state.selectedFx,
        fxRates: state.fxRates
    };
}

const mapDispatchToProps = (dispatch: Dispatch<RatesActions>) => {
    return {
        filterRates: (fxCurrency: string) => dispatch(filterRates(fxCurrency)),
        getRates: () => dispatch(getRates())
    }   
}

const ForexSelectContainer = connect(mapStateToProps, mapDispatchToProps)
                                (ForexSelect);

export default ForexSelectContainer;