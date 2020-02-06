import React from 'react'

import HomePage from './pages/homepage/homepage.component'

import { Route, Switch } from 'react-router-dom'

import './App.css'

const Mens = () => (
  <div>
    <h1>Mens Us</h1>
  </div>
)
const Shop = () => (
  <div>
    <h1>Shop it!</h1>
  </div>
)

function App() {
  return (
    <div>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop/mens' component={Mens} />
          <Route path='/about/shop' component={Shop} />
        </Switch>
    </div>
  );
}

export default App;
