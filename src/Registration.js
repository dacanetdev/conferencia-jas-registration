import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import { Button, Radio, RadioGroup, FormLabel, FormControlLabel, List, ListItem, Avatar } from '@material-ui/core';
import { ErrorOutline } from '@material-ui/icons';
import firebase from 'firebase';

class Registration extends React.Component {
  state = {
    firstName: '',
    lastName: '',
    ward: '',
    stake: '',
    gender: '',
    email: '',
    phone: '',
    specialNeeds: ''
  }

  errorList = [];

  constructor(props, context) {
    super(props, context);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    })
  }

  handleSubmit() {
    this.validateFields();

    if(this.errorList.length !== 0)
    {
      return;
    }

    const participantRef = firebase.app().firestore().collection('participants');
    participantRef.add(this.state)
      .then(() => {
        this.props.history.push('/welcome');
      })
  }

  validateFields() {
    this.errorList = [];
    for (const key in this.state) {
      if (this.state.hasOwnProperty(key)) {
        if(key === 'specialNeeds') continue;

        if(!this.state[key]){
          this.errorList.push(key)
        }

      }
    }
  }

  checkField(name) {
    return this.errorList.indexOf(name) > 0;
  }

  listErrors() {
    return this.errorList.map(error =>
      <ListItem>
      <Avatar>
        <ErrorOutline></ErrorOutline>
        {error}
      </Avatar>
    </ListItem>
    );
  }

  render() {
    let errorMessage;
    if(this.errorList.length !== 0) {
      errorMessage =
      <List>
        {this.listErrors()}
      </List>
    }

    return (
      <React.Fragment>
        {errorMessage}
        <Card>
          <CardHeader color="primary" title="Registro" subheader="Proporciona tus datos">
          </CardHeader>
          <CardContent>
            <Grid container spacing={24}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="firstName"
                  defaultValue={this.state.firstName}
                  name="firstName"
                  label="Nombre"
                  error={this.checkField('firstName')}
                  fullWidth
                  autoComplete="fname"
                  onChange={this.handleChange('firstName')}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="lastName"
                  name="lastName"
                  defaultValue={this.state.lastName}
                  label="Apellido"
                  fullWidth
                  autoComplete="lname"
                  onChange={this.handleChange('lastName')}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="ward"
                  name="ward"
                  defaultValue={this.state.ward}
                  label="Barrio"
                  fullWidth
                  autoComplete="ward"
                  onChange={this.handleChange('ward')}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="stake"
                  name="stake"
                  defaultValue={this.state.stake}
                  label="Estaca"
                  fullWidth
                  autoComplete="stake"
                  onChange={this.handleChange('stake')}
                />
              </Grid>
              <Grid item xs={6} sm={3}>
                <FormLabel component="legend">Sexo *</FormLabel>
                <RadioGroup
                  aria-label="Sexo"
                  name="sexo"
                  row={true}
                  value={this.state.gender}
                  onChange={this.handleChange('gender')}
                >
                  <FormControlLabel value="F" control={<Radio />} label="Femenino" />
                  <FormControlLabel value="M" control={<Radio />} label="Masculino" />
                </RadioGroup>
              </Grid>
              <Grid item xs={6} sm={3}>
                <TextField
                  required
                  id="phone"
                  name="phone"
                  defaultValue={this.state.phone}
                  label="Teléfono"
                  fullWidth
                  autoComplete="phone"
                  onChange={this.handleChange('phone')}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="email"
                  name="email"
                  defaultValue={this.state.email}
                  label="E-mail"
                  fullWidth
                  autoComplete="email"
                  onChange={this.handleChange('email')}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="specialNeeds"
                  name="specialNeeds"
                  defaultValue={this.state.specialNeeds}
                  label="Necesidades Especiales"
                  multiline={true}
                  rows={3}
                  fullWidth
                  autoComplete="needs"
                  onChange={this.handleChange('specialNeeds')}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <Button variant="contained" color="primary" onClick={this.handleSubmit()} >
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
