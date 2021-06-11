import React from 'react'
import AllUsers from './accounts/AlUsers'
import Inbox from './chat/Inbox'
import {
	HashRouter as Router,
	Switch,
	Route
} from "react-router-dom";
  

function TotalBox(props) {
    return (
        <main className="content">
    <div className="container p-0">

		<h1 className="h3 mb-3">{props.userData['name']}</h1>

		<div className="card">
			<div className="row g-0">
				<AllUsers setstoreUser={props.setstoreUser} setstoreUserID={props.setstoreUserID}/>
				<Router>
					<Switch>
						<Route exact path='/message/:user'>
							<Inbox storeUserID={props.storeUserID} isLoggedIn={props.isLoggedIn} userData={props.userData} storeUser={props.storeUser} setstoreUser={props.setstoreUser} setisLoggedIn={props.setisLoggedIn}/>
						</Route>
						<Route exact path='/message/messages'>
							Your inbox
						</Route>
					</Switch>
				</Router>
			</div>
		</div>
	</div>
</main>
    )
}

export default TotalBox
