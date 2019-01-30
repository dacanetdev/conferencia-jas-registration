import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import { Button } from '@material-ui/core';

class Registration extends React.Component {
  state = {
    firstName: '',
    lastName: ''
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    })
  }

  render() {
    return (
        <React.Fragment>
          <Card>
            <CardHeader color="primary" title="Registro" subheader="Proporciona tus datos">
            </CardHeader>
            <CardContent>
              <Grid container spacing={24}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="firstName"
                    name="firstName"
                    label="Nombre"
                    fullWidth
                    autoComplete="fname"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="lastName"
                    name="lastName"
                    label="Apellido"
                    fullWidth
                    autoComplete="lname"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="ward"
                    name="ward"
                    label="Barrio"
                    fullWidth
                    autoComplete="ward"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField id="stake" name="stake" label="Estaca" fullWidth />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="city"
                    name="city"
                    label="Ciudad"
                    fullWidth
                    autoComplete="billing address-level2"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField id="state" name="state" label="Estado" fullWidth />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="email"
                    name="email"
                    label="E-mail"
                    fullWidth
                    autoComplete="billing email"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="cellphone"
                    name="cellphone"
                    label="Teléfono"
                    fullWidth
                    autoComplete="billing cellphone"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="zip"
                    name="zip"
                    label="Código Postal"
                    fullWidth
                    autoComplete="billing postal-code"
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <Button variant="contained" color="primary">
                    Registrar
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </React.Fragment>
    );
  }
}

export default Registration;
