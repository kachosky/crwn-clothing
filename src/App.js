import React from 'react';
import { Switch, Route }      from 'react-router-dom'
import './App.css';
import HomePage from  './pages/homepage/HomePage'
import ShopPage from './pages/shop/Shop'
import Header from  './components/header/Header'
import Authentication from './components/authentication/Authentication'

import { auth } from "./firebase/firebase.util";

class App extends React.Component{

  constructor(props) {
      super(props)

      this.state = {
          currentUser : null
      }
  }

  unSubscribeFromAuth = null

  componentDidMount() {
      this.unSubscribeFromAuth = auth.onAuthStateChanged(user => {
           this.setState({ currentUser: user })
      })
  }

  componentWillUnmount() {
      this.unSubscribeFromAuth();
  }


  render(){
      return (
          <div>
              <Header currentUser={this.state.currentUser}/>
              <Switch>
                  <Route exact path='/' component={HomePage} />
                  <Route exact path='/shop' component={ShopPage}/>
                  <Route exact path='/signin' component={Authentication}/>
              </Switch>
          </div>
      );
  }
}

export default App;
