import React, {useContext} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'

import AuthState from './context/authContext/authState'
import authContext from './context/authContext/authContext'

import NavBar from './Components/navbar'
import Footer from './Components/footer'
import Home from './Components/home/Home'
import SignIn from './Components/signin/SignIn'
import SignUp from './Components/signup/Signup'
import Contact from './Components/contact'
import About from './Components/about'
import Dashboard from './Components/Dashboard/Dashboard'
//import ZFM from './Components/zfm'  
import PrivateRoute from './Components/routes/PrivateRoute'
import setToken from './utils/setToken'

if(localStorage.token){
  setToken(localStorage.token)
}

function App(){
  return(
    <AuthState>
      <Router>
          <NavBar/> 
            <Switch>
              <Route path="/"  exact component={Home}/> 
              <Route path="/home"  component={Home}/>
              <Route path="/signin"  component={SignIn}/>
              <Route path="/signup"    component={SignUp}/>
              <Route path="/contact"  component={Contact}/>
              <Route path="/about"    component={About}/>
              <PrivateRoute path="/user"  exact component={Dashboard}/> 
              <PrivateRoute path="/details"  exact component={Dashboard}/>
              <PrivateRoute path="/webconnection" exact component={Dashboard}/>
              <PrivateRoute path="/userManagement" exact component={Dashboard}/>
              <PrivateRoute path="/userQueries" exact component={Dashboard}/>
              <PrivateRoute path="/settings" exact component={Dashboard}/>
              <PrivateRoute path="/settings/email" exact component={Dashboard}/>
              <PrivateRoute path="/settings/paswrd" exact component={Dashboard}/>
              <PrivateRoute path="/settings/pic" exact component={Dashboard}/>
              <PrivateRoute path="/queries" exact component={Dashboard}/>
              <PrivateRoute path="/tutorials" exact component={Dashboard}/>
            </Switch>
            <Footer/>
      </Router>
    </AuthState>
  );
}

export default App;
