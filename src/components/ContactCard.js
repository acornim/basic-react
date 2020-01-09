import React from 'react'
function ContactCard(props){
    return (
        <div className="contact-card">
            <img src={props.contacts.imgUrl}/>
            <h3>{props.contacts.name}</h3>
            <p>phone : {props.contacts.contact}</p>
             <p>email : {props.contacts.email}</p>

        </div>
    )
}
export default ContactCard;