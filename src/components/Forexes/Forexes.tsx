import * as React from 'react';
import { filterRates, getRates, RatesActions } from "../../actions/fxRatesActions";
import { FxRate, ForexSelectInfo } from '../classes/FxRates';

class Forex extends React.Component<FxRate, {}> {
    render(){
        const fxCurrency = this.props.fxCurrency; 
        const fxRates = this.props.rates; 
        return(
            <div key={fxCurrency}>
                <h3>{fxCurrency} (Spot Rate - {fxRates[fxRates.length-1].rate})</h3>
            </div>
        );
    }
}

class Forexes extends React.Component<ForexSelectInfo, {}> {
    render() {
        const selectedFxCurrency = this.props.selectedFx;
        const forexs = this.props.fxRates;
        const tracks = forexs
                            .filter((f) => f.fxCurrency===selectedFxCurrency 
                                            || selectedFxCurrency === 'ALL'
                                            || selectedFxCurrency === undefined)
                            .map((fx) =>
                                <div key={fx.fxCurrency}>
                                    <Forex fxCurrency={fx.fxCurrency} rates={fx.rates} />
                                </div>
                        );
        return(
            <div>{tracks}</div>    
        );
    }
}

export class ForexSelect extends React.Component<ForexSelectInfo & RatesActions, {}> {
    handleFxCurrencyChange = (e: any) => {
        this.props.filterRates(e.target.value ); 
    }

    componentWillMount() {
        this.props.getRates();
    }

    render(){
        
        if (this.props.fxRates === undefined || this.props.fxRates.length === 0) {
            return <p>Loading Rates…please wait for a moment.....</p>; 
        }

        const fxCurrencies = this.props.fxRates.map((r) => 
                            <option key={r.fxCurrency} value={r.fxCurrency}>{r.fxCurrency}
                            </option>
        );
        return <div>
                <div>
                    <div >
                        <select value={this.props.selectedFx} 
                                onChange={this.handleFxCurrencyChange}>
                            <option value="ALL" key="ALL">ALL</option>
                            {fxCurrencies}
                        </select>
                    </div>
                </div>
                <div>
                    <Forexes selectedFx={this.props.selectedFx} fxRates={this.props.fxRates}/>
                </div>
            </div>
    }
}
