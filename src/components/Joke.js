import React from 'react'
function ContactCard(props){
    return (
        <div>
            {/* display:props.question ? "blocked" : "none" */}
            <h3 style={{display:!props.question && "none"}}>Question: {props.question}</h3>
            <h3 style={{color: !props.question && "#888888"}}>Answer: {props.punchline}</h3>
        </div>
    )
}
export default ContactCard;