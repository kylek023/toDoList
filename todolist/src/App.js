import React, {useState, useEffect} from 'react'
import { BrowserRouter,Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import User from './components/User'

const App =()=>{


  return(

  <div>
    <BrowserRouter>
    <h1><em>To-Do List</em></h1>

    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route path='/user/:id'>
        <User />
      </Route>
    </Switch>
    
    
    </BrowserRouter>

    </div>
  )


}
export default App