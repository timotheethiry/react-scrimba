import React from "react";
import ContactCard from "./ContactCard";

function ContactCard(props) {
    return (
        <div>
            <img src={props.contact.imgUrl} />
            <h3>{props.contact.name}</h3>
            <p>Phone : {props.contact.phone}</p>
            <p>Email : {props.contact.email}</p>
        </div>
    )
};

export default ContactCard;