import React, { ReactElement } from 'react'
import "./Contact.scss";

interface ContactProps {
    name: String, 
}

export default function Contact({name}: ContactProps): ReactElement {
    function hi({name}: ContactProps) {
        const myArr = name.split(" ");
        let str:string = "";
        myArr.forEach(element => {
            str += element.substring(0,1).toUpperCase() + " ";
        });

        return str;

    }


    return (
        <div className="contact">
            <div className="contact__row">
                <div className="contact__photo">{hi({name})}</div>
                <div className="contact__name">{name}</div>
            </div>
        </div>
    )
}
