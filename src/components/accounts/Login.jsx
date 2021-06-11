import React, {useState} from 'react'
import './Login.css'
import {Link} from 'react-router-dom'
import Cookies from 'universal-cookie'
import axios from 'axios'

function Login(props) {


    const [usernameState, setusernameState] = useState("")
    const [passwordState, setpasswordState] = useState("")
    const cookies = new Cookies();


    function handleSubmit(e){

          axios.post(`https://abirs-django-chatapp.herokuapp.com/accounts/getAuthToken`, {
            "username":e.target[0].value,
            "password":e.target[1].value,
        })
            .then(res => {

                console.log(JSON.stringify(res.data));

                if (JSON.stringify(res.data) == '{"detail":"Incorrect credentials"}'){
                    alert('Incorrect credentials')
                }
                else{
                    cookies.set('username', e.target[0].value, { path: '/' });
                    cookies.set('password', e.target[1].value, { path: '/' });
                    cookies.set('token', JSON.stringify(res.data), { path: '/' });
                    
                    const request = axios.get(`https://abirs-django-chatapp.herokuapp.com/accounts/fetchSingleUser/${e.target[0].value}`)
                    .then(
                        request =>
                        {
                            console.log(request.data.username)
                            localStorage.setItem('userID', request.data.username) 
                            
                            window.location.href = 'chattingApp/#/message/inbox'
                        
                    }
                    ); 

                }
            })

        
        
        e.preventDefault()
    }



    return (
        <div className="wrapper fadeInDown">
            <div id="formContent">

                <div className="fadeIn first">
                    {/* <p>Please Log In First</p> */}
                <img src="https://cdn.icon-icons.com/icons2/2621/PNG/512/brand_facebook_messenger_icon_157342.png" id="icon" alt="User Icon" />
                </div>


                <form onSubmit={handleSubmit}>
                <input type="text" onChange={(e) => setusernameState(e.target.value)} id="login" className="fadeIn second" name="login" placeholder="Email"/>
                <input type="text" onChange={(e) => setpasswordState(e.target.value)} id="password" className="fadeIn third" name="login" placeholder="Password"/>
                <input type="submit" className="fadeIn fourth" value="Log In"/>
                </form>

                <div id="formFooter">
                <Link to='' href="#">Forgot Password?</Link><br/>
                <Link to='/register' className="underlineHover" href="#">Create an Account</Link>
                </div>

            </div>
        </div>
    )
}

export default Login
