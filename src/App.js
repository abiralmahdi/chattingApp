import './App.css';
import React, {useState, useEffect} from 'react'
import Login from './components/accounts/Login'
import TotalBox from './components/TotalBox';
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Register from './components/accounts/Register';
import Cookies from 'universal-cookie'
import axios from 'axios';



function App() {

  // hooks
  const [isLoggedIn, setisLoggedIn] = useState(false)
  const [storeUser, setstoreUser] = useState('')
  const [storeUserID, setstoreUserID] = useState('')
  const [userData, setuserData] = useState([])

  const cookies = new Cookies

  const username = cookies.get('username', {path:'/'})
  const password = cookies.get('password', {path:'/'})

  useEffect(() => {
    axios.get(`https://abirs-django-chatapp.herokuapp.com/accounts/fetchSingleUser/${username}`).then(
      res => {
        setuserData(res.data)
        localStorage.setItem('userData', JSON.stringify(res.data))
      }
    )
  }, [])
  

  useEffect(() => {
    if (username !== undefined){
      setisLoggedIn(true)
    }
    else{
      setisLoggedIn(false)
    }

  }, [])

  return (
    <>
    <br/>
    <Router>
    <Switch>
          <Route exact path="/">
            <Login isLoggedIn={isLoggedIn} setisLoggedIn={setisLoggedIn}/>
          </Route>
          <Route exact path="/register">
            <Register isLoggedIn={isLoggedIn} setisLoggedIn={setisLoggedIn}/>
          </Route>

          <Route exact path="/message/:type">
            <TotalBox 
                      storeUserID={storeUserID} 
                      setstoreUserID={setstoreUserID} 
                      isLoggedIn={isLoggedIn} 
                      setisLoggedIn={setisLoggedIn} 
                      storeUser={storeUser} 
                      setstoreUser={setstoreUser} 
                      userData={userData}
                      />
          </Route>
    </Switch>
    </Router>


    </>
  );
}

export default App;
