import React, { ReactElement } from "react";
import {Link} from "react-router-dom";

interface Props {}

// To handle all things contacts related
export default function Contacts({}: Props): ReactElement {
  return (
    <div>
      <h1 className="title">Address Book</h1>
      <Link className="button button__blue" to="/" type="button">Disconnect</Link>
    </div>
  );
}
