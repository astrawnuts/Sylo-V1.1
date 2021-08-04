import React, { ReactElement } from 'react'
import "./SendMoney.scss";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams
} from "react-router-dom";
import PreviousPage from "../../components/PreviousPage/PreviousPage";


interface Props {

}

interface Person {
    name: string,
    etherID: string,
  }

export default function SendMoney({ }: Props): ReactElement {

    function getPhotoName({ name }: Person) {
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


  //first check if there are any people in local storage
  const storedPeople: Person[] = JSON.parse(localStorage.getItem("people") || 'null');



    const { id } = useParams<{ id: string }>();
    console.log(id);

    return (
        <div>
            <PreviousPage HeaderTitle={'Send to ' + storedPeople[parseInt(id)].name} to="/contacts" />
            
            <div className="profile__photo">{getPhotoName(storedPeople[parseInt(id)])}</div>
            <div className="profile__eth">{storedPeople[parseInt(id)].etherID}</div>
            <input className="input" type="text" placeholder="0 ETH" />
            <div className="profile__fee">Tx fee: 0.00021 ETH $0.53</div>

            <a href="#" type="button" className="button button__orange profile__send">Send</a>

        </div>
    )
}
