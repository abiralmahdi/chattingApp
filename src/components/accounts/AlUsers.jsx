import axios from 'axios'
import React, {useEffect, useState} from 'react'
import IndivUser from './IndivUser'

function AllUsers(props) {
	
	const [users, setusers] = useState([])

	useEffect(() => {
		async function fetchData(){
			const request = await axios.get('http://127.0.01:8000/accounts/fetchUsers')
			setusers(request.data)
		}
		
		fetchData()
	}, [])

	console.log(users)

    return (
        <div className="col-12 col-lg-5 col-xl-3 border-right">

					<div className="px-4 d-none d-md-block">
						<div className="d-flex align-items-center">
							<div className="d-flex">
								<input type="text" className="form-control my-4 p-2" placeholder="Search..."/>
								<button className='btn btn-primary btn-sm my-4'>Search</button>
							</div>
						</div>
					</div>

					<div style={{overflowY: 'scroll', height: '500px'}}>
						{users.map(
							user => (
								<IndivUser setstoreUserID={props.setstoreUserID} user={user} setstoreUser={props.setstoreUser}/>
							)
						)}
						
						
					</div>
					

					<hr className="d-block d-lg-none mt-1 mb-0"/>
				</div>
    )
}

export default AllUsers
