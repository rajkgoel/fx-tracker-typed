import * as React from 'react';
import { RatesActions } from "../../actions/fxRatesActions";
import { FxRate, ForexSelectInfo } from '../../classes/FxRates';

class Forex extends React.Component<FxRate, {}> {
    render(){
        const fxCurrency = this.props.fxCurrency; 
        const fxRates = this.props.rates; 
        const rates1 = fxRates.map((r) => 
                            <tr key={fxCurrency + r.date.getFullYear() + '-' + r.date.getMonth() + '-' + r.date.getDay()}>
                                <td>{r.date.getFullYear() + '-' + r.date.getMonth()+ '-' + r.date.getDay()}</td>
                                <td>{r.rate}</td>
                            </tr>
                        );
                        
        return(
            <div>
                <h3 key={fxCurrency}>{fxCurrency} (Spot Rate - {fxRates[fxRates.length-1].rate})</h3>
                <table>
                    <tbody>
                    <tr>
                        <th>Date</th>
                        <th>Rate</th>
                    </tr>
                    {rates1}
                    </tbody>
                </table>
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
                <select value={this.props.selectedFx} 
                        onChange={this.handleFxCurrencyChange}>
                    <option value="ALL" key="ALL">ALL</option>
                    {fxCurrencies}
                </select>
                <Forexes selectedFx={this.props.selectedFx} fxRates={this.props.fxRates}/>
            </div>
    }
}
