import React from 'react';
import { Switch, Route }      from 'react-router-dom'
import './App.css';
import HomePage from  './pages/homepage/HomePage'
import ShopPage from './pages/shop/Shop'

const HatsPage = () => (
    <div>
        <h1>
            HATS PAGE
        </h1>
    </div>
)


function App() {
  return (
    <div>
        <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/shop' component={ShopPage}/>
            <Route path='/hats' component={HatsPage}/>
        </Switch>
    </div>
  );
}

export default App;
