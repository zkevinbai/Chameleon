import React from 'react';
import './App.css';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      colorR: "100",
      colorG: "100",
      colorB: "100",
    }
  }

  render() {
    return (
      <div className="app">
        <div className="colors">
          <div className="color-components">
            <div 
              className="color-r color-component"
              style={{ 'background-color': `rgb(${this.state.colorR}, 0, 0)` }}
            >
              <span className="color-text">
                Red: {this.state.colorR}
              </span>
            </div>

            <div 
              className="color-g color-component"
              style={{ 'background-color': `rgb(0, ${this.state.colorG}, 0)` }}
            >
              <span className="color-text">
                Green: {this.state.colorG}
              </span>
            </div>

            <div 
              className="color-b color-component"
              style={{ 'background-color': `rgb(0, 0, ${this.state.colorB})` }}
            >
              <span className="color-text">
                Blue: {this.state.colorB}
              </span>
            </div>
          </div>

          <div
            className="color-rgb color-component"
            style={{ 'background-color': `rgb(${this.state.colorR}, ${this.state.colorG}, ${this.state.colorB})` }}
          >
            <span className="color-text">
              RGB: {this.state.colorR}, {this.state.colorG}, {this.state.colorB}
            </span>
          </div>
        </div>
        <div className="input">
          Input
        </div>
      </div>
    )
  }
}
