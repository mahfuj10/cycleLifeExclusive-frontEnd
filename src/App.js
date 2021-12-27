import { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import AuthProvider from './Components/Context/AuthProvider/AuthProvider';
import Cycles from './Components/Cycles/Cycles/Cycles';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
import Payment from './Components/Dashboard/Payment/Payment';
import Home from './Components/Home/Home/Home';
import { searchContext } from './Components/Home/Navigation/Navigation/Navigation';
import LoginBox from './Components/Login/LoginBox/LoginBox';
import PrivateRoute from './Components/Login/PrivateRoute/PrivateRoute';
import RegisterBox from './Components/Login/RegisterBox/RegisterBox';

function App() {

  const [searchValue, setSearchValue] = useState('');

  return (

    <AuthProvider>
      <searchContext.Provider value={[searchValue, setSearchValue]}>
        <BrowserRouter>
          <Switch>

            <Route exact path="/">
              <Home
              />
            </Route>

            <Route path="/home">
              <Home />
            </Route>

            <Route path="/cycles">
              <Cycles />
            </Route>

            <PrivateRoute path="/dashboards">
              <Dashboard />
            </PrivateRoute>


            <Route path="/login">
              <LoginBox />
            </Route>

            <Route path="/register">
              <RegisterBox />
            </Route>

            <Route path="/payment">
              <Payment />
            </Route>

          </Switch>
        </BrowserRouter>
      </searchContext.Provider>
    </AuthProvider>
  );
}

export default App;
