import React, {useState, useEffect} from 'react'
import { BrowserRouter,Route, Switch ,Link} from 'react-router-dom'
import Home from './components/Home'
import User from './components/User'


const App =()=>{


  return(
    <div>
  <BrowserRouter >
    <span className='navBar'> <p className="title"><strong>To-Do List</strong></p> <p ><Link className='home' to='/'>Home</Link></p>
  </span>

  <div className="body">
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
    
    

    </div>
    </BrowserRouter>

    </div>
  )


}
export default App