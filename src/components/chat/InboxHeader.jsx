import React, {useEffect, useState} from 'react'
import Cookies from 'universal-cookie'
import axios from 'axios'

function InboxHeader(props) {
	const [userData, setuserData] = useState([])
	const cookies = new Cookies
	let userStored = ''
	if (props.storeUser == ''){
		userStored = localStorage.getItem('storeUser')
	}
	else{
		userStored = props.storeUser
	}
	

	function Logout(){
		props.setisLoggedIn(false)
		cookies.remove('username', {path:'/'})
		cookies.remove('password', {path:'/'})
		window.location.href = '/#'
	}

	useEffect(() => {
		const request = axios.get(`http://127.0.01:8000/accounts/fetchSingleUser/${cookies.get('username', {path:'/'})}`)
		.then(
			res=>{
				setuserData(res.data)
			}
		)
		
	}, [])

    return (
        
        <div className="py-2 px-4 border-bottom d-none d-lg-block">
						<div className="d-flex align-items-center py-1">
							<div className="position-relative mr-5">
								<img src="https://bootdey.com/img/Content/avatar/avatar3.png" className="rounded-circle mr-1" alt="Sharon Lessman" width="40" height="40"/>
							</div>
							<div className="flex-grow-1 pl-5">
								<strong >{userStored}</strong>
							</div>
							<div>
								<button className="btn btn-primary btn-lg mr-1 mx-3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-phone feather-lg"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg></button>
								<button className="btn btn-info btn-lg mr-1 mx-3 d-none d-md-inline-block"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-video feather-lg"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg></button>
								
								{
								props.isLoggedIn === true
								&&
								<button className="btn btn-dark border btn-lg mx-3" onClick={Logout}>Logout</button>	
								}
								
							</div>
						</div>
					</div>
    )
}

export default InboxHeader
