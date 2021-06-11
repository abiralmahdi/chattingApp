import React from 'react'
import { Link } from 'react-router-dom'

function IndivUser(props) {
    function storeUser(){
        window.location.href = `/chattingApp/#/message/${props.user['email']}`
        props.setstoreUser(props.user['email'])
        props.setstoreUserID(props.user['username'])
        localStorage.setItem('storeUser', props.user['email'])
        localStorage.setItem('storeUserID', props.user['username'])
    }
    return (

        <a onClick={storeUser} className="list-group-item list-group-item-action border-0 m-3">
            <div className="d-flex align-items-start">
                <img src="https://bootdey.com/img/Content/avatar/avatar5.png" className="rounded-circle mr-1" alt="Vanessa Tucker" width="40" height="40"/>
                <div className="flex-grow-1 ml-3">
                    {props.user['name']}
                </div>
            </div>
        </a>

    )
}

export default IndivUser
