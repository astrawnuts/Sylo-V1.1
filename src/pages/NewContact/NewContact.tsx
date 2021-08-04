import React, { ChangeEvent, ReactElement } from "react";
import PreviousPage from "../../components/PreviousPage/PreviousPage";
import "./NewContact.scss";
import { useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

interface Props { }


interface Person {
    name: string,
    etherID: string,
}

// To handle all things contacts related
export default function NewContact({ }: Props): ReactElement {
    //initialising an empty people array of type Person
    const [people, setpeople] = useState<Person[]>([]);

    const [form_name, setname] = useState('' as any);
    const [form_EthID, setEthID] = useState('' as any);

    //first check if there are any people in local storage
    const storedPeople: Person[] | any = JSON.parse(localStorage.getItem("people") || 'null');

    //if people are in the local storage then set the values from localstorage
    React.useEffect(() => {
        if (storedPeople) {
            setpeople(people => storedPeople);
        }
    }, []);

    const handleNameChange = (event: any) => {
        //   console.log(event.target.value);
        setname(event.target.value);

    }

    const handleEthChange = (event: any) => {
        // console.log(event.target.value);
        setEthID(event.target.value);
    }

    const saveContact2 = (event: any) => {
        // event.preventDefault();
        if (form_name != '' && form_EthID != '') {
            if (storedPeople) {
                storedPeople[storedPeople.length] = { name: form_name, etherID: form_EthID }
                setpeople(storedPeople);
            } else {
                // storedPeople is null meaning it doesnt exist because local storage was empty
                //hence create a local stored people and initialise it
                let storedPeople: Person[] = [];
                storedPeople.push({ name: form_name, etherID: form_EthID });
                setpeople(storedPeople);

            }
            console.log(people);
            // localStorage.setItem("people", JSON.stringify(people));
            localStorage.setItem("people", JSON.stringify(people));

            // saveContact(event);
        }
    }

    function saveContact(event: any) {
        event.preventDefault();
     
        if (form_name != '' && form_EthID != '') {
            if (storedPeople) {
                storedPeople[storedPeople.length] = { name: form_name, etherID: form_EthID }
                setpeople(storedPeople);
            } else {
                // storedPeople is null meaning it doesnt exist because local storage was empty
                //hence create a local stored people and initialise it
                let storedPeople: Person[] = [];
                storedPeople.push({ name: form_name, etherID: form_EthID });
                setpeople(storedPeople);
                
            
                localStorage.setItem("people", JSON.stringify(storedPeople));
                return null;
        
            }

            }
                      
            localStorage.setItem("people", JSON.stringify(storedPeople));

        }
    





    return (
        <div>
            <PreviousPage HeaderTitle="New Contact" to="/contacts" />

            <form action="" className="NewContact">
                <input type="text" className="input" placeholder="Name" onChange={e => handleNameChange(e)} />
                <input type="text" className="input" placeholder="Ethereum address" onChange={e => handleEthChange(e)} />
                <p className="NewContact__error">Please enter a valid Ethereum address</p>

                <Link to="#" type="button" className="button button__orange" onClick={ (Event) => saveContact(Event) }>Save</Link>
            </form>
        </div>

    );
}
