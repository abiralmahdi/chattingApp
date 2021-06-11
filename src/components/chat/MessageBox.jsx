import React, {useEffect, useState} from 'react'
import TextRight from './TextRight'
import TextLeft from './TextLeft'
import axios from 'axios'

function MessageBox(props) {
	const [texts, settexts] = useState([])
	let userIDD = JSON.parse(localStorage.getItem('userData'))
	const [textState, settextState] = useState('')
	

	let userStored = ''
	if (props.storeUser == ''){
		userStored = localStorage.getItem('storeUserID')
	}
	else{
		userStored = props.storeUserID
	}
	

	useEffect(() => {
		async function fetchData(){
			const req = await axios.get(`https://abirs-django-chatapp.herokuapp.com/fetchText/${userStored}/${userIDD['username']}`)
			document.getElementById('textBox').scrollTo(0, 10000000000)
			settexts(req.data)
		}
		setInterval(fetchData, 1000)
		// fetchData()
	}, [])

	function handleSubmit(e){
		axios.post(`https://abirs-django-chatapp.herokuapp.com/texting`, {
			
				"text": e.target[0].value,
				"sender": userIDD['username'],
				"recvr": userStored
			
        }).then(
			res => {
				console.log(res.data)
				document.getElementById('messageBoxx').value = ''
			}
		)
		e.preventDefault()
	}

	

    return (
        <>
            <div className="position-relative">
						<div className="chat-messages p-4" id='textBox' style={{overflowY: 'scroll', height: '400px'}}>

							{texts.map(
								text => (
									<>
									{text['sender'] === userIDD['username']
									?
									<TextRight text={text['text']} dateTime={text['dateTime']} sender={text['sender']} reciever={text['recvr']}/>
									:
									<TextLeft text={text['text']} dateTime={text['dateTime']} sender={text['recvr']} reciever={text['sender']}/>
								}
									
									</>
								)
							)}
							
						</div>
					</div>

					<div className="flex-grow-0 py-3 px-4 border-top">
						<form onSubmit={handleSubmit} className="input-group">

								<input type="text" className="form-control p-2" placeholder="Type your message" id='messageBoxx' onChange={(e) => {settextState(e.target.value)}}/>
								<button className="btn btn-primary my-1">Send</button>

						</form>
					</div>
        </>
    )
}

export default MessageBox
