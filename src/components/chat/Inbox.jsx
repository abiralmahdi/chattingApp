import React from 'react'
import InboxHeader from './InboxHeader'
import MessageBox from './MessageBox'
function Inbox(props) {
    return (
        
        <div className="col-12 col-lg-7 col-xl-9">
            <InboxHeader storeUser={props.storeUser} isLoggedIn={props.isLoggedIn} setisLoggedIn={props.setisLoggedIn}/>
            <MessageBox storeUserID={props.storeUserID} storeUser={props.storeUser} userData={props.userData}/>
        </div>

    )
}

export default Inbox
