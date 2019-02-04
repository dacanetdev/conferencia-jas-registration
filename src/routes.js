import React from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

import Registration from './Registration';
import Registrations from './Registrations';
import Login from './Login';
import Welcome from './Welcome';

const Routes = (props) => (
    <Router {...props}>
        <div>
            <Route path="/" exact={true} component={Registration}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/registrations" component={Registrations}></Route>
            <Route path="/welcome" component={Welcome}></Route>
        </div>
    </Router>
);

export default Routes;