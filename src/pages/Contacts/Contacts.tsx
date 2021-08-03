import React, { ReactElement } from "react";
import {Link} from "react-router-dom";
import "./Contacts.scss";
import PreviousPage from "../../components/PreviousPage/PreviousPage";
import Contact from "../../components/Contact/Contact";

interface Props {}

// To handle all things contacts related
export default function Contacts({}: Props): ReactElement {
  return (
    <div>
      <div>
     
        <PreviousPage HeaderTitle="Address Book" to="/" />

        <Contact />
      </div>
      <Link className="button button__blue" to="/" type="button">Disconnect</Link>
    </div>
  );
}
