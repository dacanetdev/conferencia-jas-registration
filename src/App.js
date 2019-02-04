import React from 'react';
import './App.css';
import Routes from './routes';
import firebase from 'firebase';
import config from './firebase.config';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.app = firebase.initializeApp(config);
  }

  componentWillMount() {
    /*
    const participantRef = this.app.firestore().collection('participants');

    participantRef.onSnapshot(querySnapshot => {
      const participants = [];
      querySnapshot.forEach(participant => {
        participants.push(participant.data());
      })

      this.setState({
        participants: participants,
        loading: false
      });

      this.props.children && React.cloneElement(this.props.children, {
        ref: this.state.participantRef,
        participants: this.state.participants
      });

      console.log(this.state.participants)
    }, error => console.log(error))
    */
  }

  render() {
    return (
      <div>
        <h1>Conferencia JAS 2019</h1>
        <Routes data={this.props}></Routes>
      </div>
    );
  }
}

export default App;
