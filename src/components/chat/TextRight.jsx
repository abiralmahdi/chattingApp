import React from 'react'

function TextRight(props) {
    return (
        <div className="chat-message-right pb-4">
			<div>
				<div className="text-muted small text-nowrap mt-2">{props.dateTime}</div>
			</div>
			<div className="flex-shrink-1 bg-dark text-light rounded py-2 px-3 mr-3">
				<div className="text-muted text-sm mb-2"><b>YOU</b></div>
				{props.text}
			</div>
		</div>
    )
}

export default TextRight
