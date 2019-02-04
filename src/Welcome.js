import React from "react";
import { Paper, Grid, Card, CardMedia } from "@material-ui/core";
import * as css from './welcome.css'

class Welcome extends React.Component {

    render() {
        return <div>
            <Paper elevation={10} spacing={24} xs={12} sm={6}>
                <h3>
                    Felicidades!!! Ya estás inscrito en la Conferencia JAS 2019
                </h3>
                <h5>
                    El evento del año para los JAS
                </h5>
            </Paper>
            <Grid container spacing={24} alignContent="center">
                <Grid item xs={12} sm={6}>
                    <img src='jas1.jpg' className='thumb-nail'></img>
                </Grid>
                <Grid item xs={12} sm={6} >
                    <img src='jas2.jpg' className='thumb-nail'></img>
                </Grid>
            </Grid>
        </div >
    }
}

export default Welcome;