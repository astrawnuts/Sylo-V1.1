import React, { ReactElement } from "react";
import PreviousPage from "../../components/PreviousPage/PreviousPage";
import "./NewContact.scss";

interface Props { }


// To handle all things contacts related
export default function NewContact({ }: Props): ReactElement {

    return (
        <div>
            <PreviousPage HeaderTitle="New Contact" to="/contacts" />

            <form action="" className="NewContact">
                <input type="text" className="input" placeholder="Name" />
                <input type="text" className="input" placeholder="Ethereum address" />
                <p className="NewContact__error">Please enter a valid Ethereum address</p>

                <a type="button" className="button button__orange">Save</a>
            </form>
        </div>

    );
}
