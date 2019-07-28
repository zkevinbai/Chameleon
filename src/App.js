import React from 'react';
import './App.css';

export default class App extends React.Component {
  render() {
    return (
      <div className="app">
        <div className="colors">
          <div className="color-components">
            <div className="color-r">
              Red
            </div>
            <div className="color-g">
              Green
            </div>
            <div className="color-b">
              Blue
            </div>
          </div>

          <div className="color-rgb">
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
