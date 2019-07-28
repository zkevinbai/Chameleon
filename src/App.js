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
              className="color-r"
              style={{ 'background-color': `rgb(${this.state.colorR}, 0, 0)` }}
            >
              Red: {this.state.colorR}
            </div>
            <div 
              className="color-g"
              style={{ 'background-color': `rgb(0, ${this.state.colorG}, 0)` }}
            >
              Green: {this.state.colorG}
            </div>
            <div 
              className="color-b"
              style={{ 'background-color': `rgb(0, 0, ${this.state.colorB})` }}
            >
              Blue: {this.state.colorB}
            </div>
          </div>

          <div
            className="color-rgbb"
            style={{ 'background-color': `rgb(${this.state.colorR}, ${this.state.colorG}, ${this.state.colorB})` }}
          >
            RGB
          </div>
        </div>
        <div className="input">
          Input
        </div>
      </div>
    )
  }
}
