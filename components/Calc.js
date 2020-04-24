import React, { Component } from 'react';
import { connect } from 'react-redux';

class Calc extends Component {
  style = {
    fontSize:"12pt",
    padding:"5px 10px"
  }

  constructor(props) {
    super(props);
    this.state = {
      input: '',
    };
    this.doChange = this.doChange.bind(this);
    this.doKeyPress = this.doKeyPress.bind(this);    
    this.doAction = this.doAction.bind(this);
    this.reset = this.reset.bind(this);
  }

  doChange(e) {
    this.setState ({
      input: e.target.value
    })
  }

  doKeyPress(e) {
    if (event.keyCode == 13) {
      this.doAction(e);
    }
  }

  doAction(e) {
    this.setState ({
      input: '',
    });
    return this.props.dispatch({ type:'ENTER', value:this.state.input });
  }
  
  reset() {
    return this.props.dispatch({ type:'RESET' });
  }

  render() {
    let result = [];
    let n = this.props.data.length;
    for (let i = 0; i < n;i++) {
      result.push(<tr key={i}><th>{this.props.data[i]}</th><td>{this.props.number[i]}</td></tr>);
    }
    return (
      <div>
        <p>TOTAL: {this.props.result}</p>
        <input type="text" style={this.style} size="40" value={this.state.input} onChange={this.doChange} onKeyPress={this.doKeyPress} />
        <button style={this.style} onClick={this.doAction}>Enter</button>
        <button style={this.style} onClick={this.reset}>Reset</button>
        <hr />
        <table>
          <tbody>{result}</tbody>
        </table>
        <p>{this.props.message}</p>
      </div>
    )
  }
}

Calc = connect((state) => state)(Calc);
export default Calc;