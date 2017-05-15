import React from 'react';
import D02Calculator from '../services/D02Calculator';
import Url from '../services/Url';

export default class App extends React.Component {
  constructor(props) {
    super(props);


    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.d02Calculator = new D02Calculator();

    this.initVars();
  }

  handleSubmit(event) {
    this.setState({value: event.target.value});
  }

  handleChange(event) {
    const name = event.target.name;
    this.state.vars[name] = event.target.value;

    this.state.result = this.d02Calculator.calculate(this.state.vars);

    this.setState(this.state);

    this.updateChart();
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

    this.updateChart();
  }

  updateChart() {
    let dataArray = [];
    const start = 1
    const end = 6;
    const increment = 0.5;

    const areaStart = 3;
    const areaEnd = 5;

    const VO2 = this.state.result.VO2;
    const Hgb = this.state.vars.Hgb;
    const Co = this.state.vars.Co;
    const SaO2 = this.state.vars.SaO2;

    dataArray.push(['DO2/VO2 Ratio', 'HgB', 'HgB',  { role: 'annotation' }])

    for(let i=start;i<=end;i+=increment) {
      let x = i;
      let y = (((((VO2*x)/10)/Co)/(SaO2/100))/1.34)

      let area = undefined;

      if(i >= 3 && i <= 5) {
        area = y;
      }

      dataArray.push([i, y, area, area]);
    }


    window.drawChart(dataArray);
  }

  render() {
    return (
      <div>
        <div className='result'>
          <form>
            { this.vars.map((v) => {
              return <div className='form-group'>
                <label>
                  {v}
                  <input type="text" name={v} value={this.state.vars[v]} onChange={this.handleChange} className='form-control'/>
                </label>
              </div>
            }) }
          </form>
        </div>
        <h3><pre>{ JSON.stringify(this.state.result, null, 4) }</pre></h3>
      </div>
    );
  }
}
