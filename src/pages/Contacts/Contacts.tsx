import React, { ReactElement } from "react";
import {Link} from "react-router-dom";
import "./Contacts.scss";
import PreviousPage from "../../components/PreviousPage/PreviousPage";
import Contact from "../../components/Contact/Contact";

interface Props {}

interface Person {
  name: string, 
  etherID: string,
}

// To handle all things contacts related
export default function Contacts({}: Props): ReactElement {

  //initialising an empty people array of type Person
  const people:Person[] = [];


  //first check if there are any people in local storage
  const storedPeople:string = JSON.parse(localStorage.getItem("people") || '{}');

  //if there are you need to loop over them and draw them in the view

  //else show a message like no contacts in database

  //allow person to create new contacts and store them to local storage

 
  people[0] = { 
    name:"Tom", 
    etherID:"Hanks" 
 }; 

 people[1] = { 
  name:"Bill", 
  etherID:"Trainer" 
}; 


 localStorage.setItem("people", JSON.stringify(people));



  return (
    <div>
      <div>
     
        <PreviousPage HeaderTitle="Address Book" to="/" />

        <Contact name="Steve Bronson" />
        <Contact name="Steve Jobs" />
        <Contact name="Harrison Ford Lettuce" />
        <Contact name="Harriot Turner" />
      </div>
      <Link className="button button__blue" to="/" type="button">Disconnect</Link>
    </div>
  );
}
