import React, {useState, useEffect} from 'react'
import { BrowserRouter,Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import User from './components/User'

const App =()=>{


  return(
    <div>
  <h1>To-Do List</h1>

  <div className="body">
    <BrowserRouter >
    <nav>
      
    </nav>
    

    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route exact path='/user/:id'>
        <User />
      </Route>
    </Switch>
    
    
    </BrowserRouter>

    </div>
    </div>
  )


}
export default App