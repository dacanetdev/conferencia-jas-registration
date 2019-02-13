import React from 'react';
import { Paper, Grid, Card, CardMedia } from '@material-ui/core';
import * as css from './welcome.css';

class Welcome extends React.Component {
  render() {
    return (
      <div>
        <div className="header">
          <h3>
            Felicidades!!! Ya estás inscrito en la Conferencia JAS 2019
            <h5>El evento del año para los JAS</h5>
          </h3>
        </div>
        <div className="image-root">
          <div className="image-container">
            <img src="jas1.jpg" className="thumb-nail" />
          </div>
          <div className="image-container">
            <img src="jas2.jpg" className="thumb-nail" />
          </div>
        </div>
      </div>
    );
  }
}

export default Welcome;
