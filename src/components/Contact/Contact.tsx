import React, { ReactElement } from 'react'
import "./Contact.scss";
import { Link } from "react-router-dom";


interface ContactProps {
    ID?: number,
    name: String,
    addButton?: boolean,
}

export default function Contact({ name, addButton, ID }: ContactProps): ReactElement {

    function getPhotoName({ name }: ContactProps) {
        let myArr; 
        try {
            myArr = name.split(" ");
        } catch {
            return;
        }
        let str: string = "";
        myArr.forEach(element => {
            str += element.substring(0, 1).toUpperCase() + " ";
        });

        return str;

    }


    return (
        <>

            {addButton == true &&
                <Link to="/newcontact" className="clean">
                    <div className="contact">
                        <div className="contact__row">
                            <div className="contact__plus"><img src="plus-icon.svg" alt="add new contact icon and button" /></div>
                            <div className="contact__name contact--alternative-text">{name}</div>
                        </div>
                    </div>
                </Link>


            }

            {addButton == undefined && 
            <Link to={'/sendmoney/' + ID} >
                <div className="contact">
                    <div className="contact__row">
                        <div className="contact__photo">{getPhotoName({ name })}</div>
                        <div className="contact__name">{name}</div>
                    </div>
                </div>
            </Link>
            }
        </>
    )
}
