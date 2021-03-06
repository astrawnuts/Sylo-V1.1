import React, { ReactElement } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "./Contacts.scss";
import PreviousPage from "../../components/PreviousPage/PreviousPage";
import Contact from "../../components/Contact/Contact";

interface Props { }

interface Person {
  name: string,
  etherID: string,
}

// To handle all things contacts related
export default function Contacts({ }: Props): ReactElement {
  let counter:number = 0;

  //initialising an empty people array of type Person
  const [people, setpeople] = React.useState<Person[]>([]);

  //first check if there are any people in local storage
  const storedPeople: Person[] = JSON.parse(localStorage.getItem("people") || 'null');

  //if people are in the local storage then set the values from localstorage
  React.useEffect(() => {
    if (storedPeople) {
      setpeople(people => storedPeople);
    }
  }, []);

  function returnPerson(person: Person, index: number, num: number) {
    if (people.length == 0) {
      return <div>No contacts stored. Add new contacts to see them here.</div>
    } else {
      return <Contact ID={num} key={index} name={person.name} />
    }
  }


  return (

      <div>
        <div>

          <PreviousPage HeaderTitle="Address Book" to="/" />
          <Contact addButton name="New Contact" />


          {/* if their are people in local storage render them */}
          {people.length != 0 && people.map((person, index) => {
            
            return returnPerson(person, index, counter++)
          })}

          {/* if there are no people in local storage then display message */}
          {people.length == 0 && <div>No contacts stored. Add new contacts to see them here.</div>
          }

        </div>
        <Link className="button button__blue" to="/" type="button">Disconnect</Link>


      </div>
  
  );
}
