import React from 'react';
import D02Calculator from '../services/D02Calculator';
import Url from '../services/Url';

import i18n from '../services/i18n';

export default class App extends React.Component {
  constructor(props) {
    super(props);


    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.d02Calculator = new D02Calculator();

    this.initVars();
  }

  componentDidMount() {
    this.updateChart();
  }

  handleSubmit(event) {
    this.setState({value: event.target.value});
  }

  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    this.state.vars[name] = value;

    this.state.result = this.d02Calculator.calculate(this.state.vars);
    this.state.roundedResults = this.d02Calculator.round(this.state.result);

    this.setState(this.state);

    this.updateChart();

    const qp = {};
    qp[name] = value;
    Url.set(qp);

  }

  initVars() {
    this.state = {vars:{}};

    this.vars = [
      "Co",
      "Hgb",
      "SaO2",
      "PaO2",
      "SvO2",
      "PvO2",
      "DesiredDO2VO2ratio"
    ];

    this.vars.forEach((v) => {
      this.state.vars[v] = +Url.getParameterByName(v);
    });

    this.state.result = this.d02Calculator.calculate(this.state.vars);
    this.state.roundedResults = this.d02Calculator.round(this.state.result);

  }

  updateChart() {
    let dataArray = [];
    const start = 2
    const end = 6;
    const increment = 0.5;

    const areaStart = 3;
    const areaEnd = 5;

    const VO2 = this.state.result.VO2;
    const Hgb = this.state.vars.Hgb;
    const Co = this.state.vars.Co;
    const SaO2 = this.state.vars.SaO2;

    dataArray.push(['DO2/VO2 Ratio', 'HgB', 'Optimal Hgb Range',  { role: 'annotation' }])

    for(let i=start;i<=end;i+=increment) {
      let x = i;
      let y = (((((VO2*x)/10)/Co)/(SaO2/100))/1.34)

      let area = undefined;

      if(i >= areaStart && i <= areaEnd) {
        area = y;
      }

      dataArray.push([i, y, area, area]);
    }


    window.drawChart(dataArray);
  }

  render() {
    return (
      <div className='container'>
        <h2 className='underlined'>{i18n("applicationTitle")}</h2>
        <div className='row'>
          <div className='col-md-4'>
            <h3>Input values</h3>
            <form>
              { this.vars.map((v) => {
                return <div className='form-group' key={v}>
                  <label>{i18n(v)}</label>
                  <input type="text" name={v} value={this.state.vars[v]} onChange={this.handleChange} className='form-control'/>
                </div>
              }) }
            </form>
          </div>
          <div className='col-md-8'>
            <h3>Outputs</h3>
            <table className='table table-condensed table-striped'>
              <tbody>
                  { Object.keys(this.state.roundedResults).map(r => {
                    return (
                      <tr>
                        <th>{i18n(r, this.state)}</th>
                        <td>{this.state.roundedResults[r]}</td>
                      </tr>
                    )
                  })}
              </tbody>
            </table>
            <div id="chart_div"></div>
          </div>
        </div>
        <div>

        </div>
      </div>
    );
  }
}
