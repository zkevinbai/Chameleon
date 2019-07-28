import React from 'react';
import './App.css';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      colorR: "150",
      colorG: "150",
      colorB: "150",
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    let change = {}
    change[e.target.name] = e.target.value
    this.setState(change)
  }

  render() {
    return (
      <div className="app">
        <div className="colors">
          <div className="color-components">
            <div 
              className="color-r color-component"
              style={{ 'backgroundColor': `rgb(${this.state.colorR}, 0, 0)` }}
            >
              <span className="color-text">
                Red: {this.state.colorR}
              </span>
            </div>

            <div 
              className="color-g color-component"
              style={{ 'backgroundColor': `rgb(0, ${this.state.colorG}, 0)` }}
            >
              <span className="color-text">
                Green: {this.state.colorG}
              </span>
            </div>

            <div 
              className="color-b color-component"
              style={{ 'backgroundColor': `rgb(0, 0, ${this.state.colorB})` }}
            >
              <span className="color-text">
                Blue: {this.state.colorB}
              </span>
            </div>
          </div>

          <div
            className="color-rgb color-component"
            style={{ 'backgroundColor': `rgb(${this.state.colorR}, ${this.state.colorG}, ${this.state.colorB})` }}
          >
            <span className="color-text">
              RGB: {this.state.colorR}, {this.state.colorG}, {this.state.colorB}
            </span>
          </div>
        </div>
        <div className="input">
          <div className="rgb-inputs">
            R: <input 
                type="text" 
                name="colorR"
                value={this.state.colorR}
                onChange={this.handleChange}
                ></input>
            G: <input 
                type="text" 
                name="colorG"
                value={this.state.colorG}
                onChange={this.handleChange}
                ></input>
            B: <input 
                type="text" 
                name="colorB"
                value={this.state.colorB}
                onChange={this.handleChange}
                ></input>
          </div>
        </div>
      </div>
    )
  }
}
