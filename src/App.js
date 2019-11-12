import React from 'react';
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import './App.css';
import HomePage from  './pages/homepage/HomePage'
import ShopPage from './pages/shop/Shop'
import Header from  './components/header/Header'
import Authentication from './components/authentication/Authentication'
import  {setCurrentUser}  from './redux/user/userAction'

import { auth, createUserProfileDocument } from "./firebase/firebase.util";

class App extends React.Component{

  unSubscribeFromAuth = null

  componentDidMount() {

      const { setCurrentUser } = this.props;

      this.unSubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
           if (userAuth) {
               const userRef = await createUserProfileDocument(userAuth)

               userRef.onSnapshot( snapshot => {
                   setCurrentUser({
                       id: snapshot.id,
                       ...snapshot.data()
                   });

                   console.log(this.state)
               })

           }

           setCurrentUser(userAuth)

      })
  }

  componentWillUnmount() {
      this.unSubscribeFromAuth();
  }


  render(){
      return (
          <div>
              <Header />
              <Switch>
                  <Route exact path='/' component={HomePage} />
                  <Route exact path='/shop' component={ShopPage}/>
                  <Route exact path='/signin' component={Authentication}/>
              </Switch>
          </div>
      );
  }
}

const mapDispatchProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchProps)(App);
