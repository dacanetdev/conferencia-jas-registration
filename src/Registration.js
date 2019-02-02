import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import { Button, Radio, RadioGroup, FormLabel, FormControlLabel } from '@material-ui/core';

class Registration extends React.Component {

  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      ward: '',
      stake: '',
      gender: '',
      email: '',
      phone: '',
      specialNeeds: ''
    }

    this.handleChange = this.handleChange.bind();
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
                <FormLabel component="legend">Sexo *</FormLabel>
                <RadioGroup
                  aria-label="Sexo"
                  name="sexo"
                  row="true"
                  value={this.state.gender}
                  onChange={this.handleChange}
                >
                  <FormControlLabel value="female" control={<Radio />} label="Femenino" />
                  <FormControlLabel value="male" control={<Radio />} label="Masculino" />
                </RadioGroup>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField id="stake" name="stake" label="Estaca" fullWidth />
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
                  id="phone"
                  name="phone"
                  label="Teléfono"
                  fullWidth
                  autoComplete="billing phone"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="specialNeed"
                  name="specialNeeds"
                  label="Necesidades Especiales"
                  fullWidth
                  autoComplete="special"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="specialNeeds"
                  name="specialNeeds"
                  label="Necesidades Especiales"
                  multiline={true}
                  rows={3}
                  fullWidth
                  autoComplete="billing needs"
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
