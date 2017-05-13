import React from 'react';
import D02Calculator from '../services/D02Calculator';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {vars:{}};

    this.vars = [
      "Co",
      "Hgb",
      "SaO2",
      "PaO2",
      "SvO2",
      "PvO2",
      "DesiredDO2VO2ratio"
    ]

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.d02Calculator = new D02Calculator();
  }

  handleSubmit(event) {
    this.setState({value: event.target.value});
  }

  handleChange(event) {
    const name = event.target.name;
    this.state.vars[name] = event.target.value;

    this.state.result = this.d02Calculator.calculate(this.state.vars);

    this.setState(this.state);
  }

  render() {
    return (
     <div className='container'>
        <h2>DO2/VO2</h2>
        <h3><pre>{ JSON.stringify(this.state, null, 4) }</pre></h3>
        <div className='result'>
          <form>
            { this.vars.map((v) => {
              return <div className='form-group'>
                <label>
                  {v}
                  <input type="text" name={v} value={this.state.vars[v]} onChange={this.handleChange} />
                </label>
              </div>
            }) }
          </form>
        </div>
      </div>
    );
  }
}
