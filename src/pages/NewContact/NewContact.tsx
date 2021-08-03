import React, { ReactElement } from "react";
import PreviousPage from "../../components/PreviousPage/PreviousPage";

interface Props { }


// To handle all things contacts related
export default function NewContact({ }: Props): ReactElement {

    return (

        <div>
            <PreviousPage HeaderTitle="New Contact" to="/contacts" />
            
        </div>

    );
}
