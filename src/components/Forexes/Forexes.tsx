import * as React from 'react';
import { connect } from "react-redux";
import { filterRates, getRates, RatesActions, FilterRatesAction, GetRatesAction } from "../../actions/fxRatesActions";
import { RatesStateType, RatesActionTypes } from "../../constants/types";
//import C3Chart from 'react-c3js';
import { RateProps, FxRateProps, ForexSelectProps } from '../classes/FxRates';
import { Dispatch } from 'redux';

export class Forex extends React.Component<FxRateProps, {}> {
    render(){
        const fxCurrency = this.props.fxCurrency; 
        const fxRates = this.props.rates; 
    
        let timePeriod: [any] = ["x"];
        let rates: [any] = [fxCurrency];

        fxRates.forEach((p) => { 
            timePeriod.push(p.date);
            rates.push(p.rate)
        });
        const data = { x: 'x', columns: [ timePeriod, rates ] };

        const axis = {
            y: {
                label: { // ADD
                  text: 'Spot Prices',
                  position: 'outer-middle'
                }
              },
            x: {
                type: 'timeseries',
                localtime: true,
                tick: {
                    format: '%Y-%m-%d'
                }
            }
        };

        return(
            <div key={fxCurrency}>
                <h3 className="w3-text-cyan">{fxCurrency} (Spot Rate - {fxRates[fxRates.length-1].rate})</h3>
                
            </div>
            //<C3Chart data={data} axis={axis}/>
        );
    }
}

export class Forexes extends React.Component<ForexSelectProps, {}> {
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

export class ForexSelect extends React.Component<ForexSelectProps & DispatchProps, {}> {
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
        //console.log('Props: ', this.props);
        return <div>
            
            <div className="w3-row">
                <div className="w3-col">
                    <select value={this.props.selectedFx} 
                            onChange={this.handleFxCurrencyChange}
                            className="w3-select w3-border w3-round w3-light-grey">
                        <option value="ALL" key="ALL">ALL</option>
                        {fxCurrencies}
                    </select>
                </div>
            </div>
            <div className="w3-row">
                <Forexes selectedFx={this.props.selectedFx} fxRates={this.props.fxRates}/>
            </div>
            </div>
    }
}

interface DispatchProps {
    filterRates(fxCurrency: string) : FilterRatesAction; //ActionType<string>;
    getRates():  GetRatesAction; //ActionType<{}>;
  }
  

const mapStateToProps = (state: ForexSelectProps) => {
    return {
        selectedFx: state.selectedFx,
        fxRates: state.fxRates
    };
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        filterRates: (fxCurrency: string) => dispatch(filterRates(fxCurrency)),
        getRates: () => dispatch(getRates())
    }
}

/*
const mapDispatchToProps = (dispatch: Dispatch<string>): DispatchProps => {
    return {
      filterRates: (fxCurrency: string) => dispatch(filterRates(fxCurrency)),
      getRates: () => dispatch(getRates())
    };
  };
*/
const ForexSelectContainer = connect<ForexSelectProps, DispatchProps, {}>
                                (mapStateToProps, mapDispatchToProps)
                                (ForexSelect);

export default ForexSelectContainer;