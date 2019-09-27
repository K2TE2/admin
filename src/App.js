import React, { Component } from 'react';
import './App.css';
import Login from './containers/Login'
import { Route } from 'react-router-dom'
import Dashboard from './components/Dashboard';
import DashboardIcon from '@material-ui/icons/Dashboard'
import AddResident from './containers/AddResident';
import AddGaurd from './containers/AddGaurd'

class App extends Component {

  drawerList = {
    'Add Resident': ['add-resident', <DashboardIcon />],
    'Add Gaurd': ['add-gaurd', <DashboardIcon />],
  }

  render() {
    return (
      <div className="App">
        <Route exact path='/login' component={Login} />
        <Route path='/login/dashboard' component={() =>
          <Dashboard drawerList={this.drawerList}>
            <Route exact path='/login/dashboard/add-resident' component={AddResident} />
            <Route exact path='/login/dashboard/add-gaurd' component={AddGaurd} />
          </Dashboard>
        }
        />
      </div>
    );
  }
}

export default App;
