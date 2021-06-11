import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

function Register() {

    const [usernameState, setusernameState] = useState("")
    const [passwordState, setpasswordState] = useState("")
    const [fnameState, setfnameState] = useState("")
    const [cpasswordState, setcpasswordState] = useState("")
    const [lnameState, setlnameState] = useState("")
    const [contactState, setcontactState] = useState("")

    function handleSubmit(e){
        console.log(e.target[4].value)
        console.log(e.target[5].value)

        
        if (e.target[4].value === e.target[5].value){
            axios.post(`https://abirs-django-chatapp.herokuapp.com/accounts/registerUser`, {
                "first_name" : e.target[0].value,
                "last_name" : e.target[1].value,
                "username" : e.target[2].value,
                "password" : e.target[5].value,
                "email" : e.target[2].value,
                "contact": e.target[3].value,
            })
            .then(res => {
                console.log(res.data);
                alert('Created account successfully! Please go to the Log in page to login to your account')
                window.location.href = '/'
            })
        }
        else{
            alert('Passwords doesnot match')
        }
          
        e.preventDefault()
    }

    return (
        <div className="wrapper fadeInDown">
            <div id="formContent">

                <div className="fadeIn first">
                    <img src="https://cdn.icon-icons.com/icons2/2621/PNG/512/brand_facebook_messenger_icon_157342.png" id="icon" alt="User Icon" />
                </div>


                <form onSubmit={handleSubmit}>
                    <input type="text" id="fname" className="fadeIn second" name="name" onChange={(e) => setfnameState(e.target.value)} placeholder="First Name"/>
                    <input type="text" id="lname" className="fadeIn second" name="name" onChange={(e) => setlnameState(e.target.value)} placeholder="Last Name"/>
                    <input type="email" id="email" className="fadeIn second" name="email" onChange={(e) => setusernameState(e.target.value)} placeholder="Email"/>
                    <input type="tel" id="contact" className="fadeIn second" name="contact" onChange={(e) => setcontactState(e.target.value)} placeholder="Contact"/>
                    <input type="text" id="password" className="fadeIn third" name="login" onChange={(e) => setpasswordState(e.target.value)} placeholder="Password"/>
                    <input type="text" id="c-password" className="fadeIn third" name="login" onChange={(e) => setcpasswordState(e.target.value)} placeholder="Confirm Password"/>
                    <input type="submit" className="fadeIn fourth" value="Sign Up"/>
                </form>

                <div id="formFooter">
                <Link to='/' className="underlineHover">Login</Link>
                </div>

            </div>
        </div>
    )
}

export default Register
