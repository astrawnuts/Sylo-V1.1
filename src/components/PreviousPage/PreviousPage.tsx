import React, { ReactElement } from 'react';
import "./PreviousPage.scss";
import {

    Link
} from "react-router-dom";

interface PreviousPageProps {
    HeaderTitle: string,
    to: string,

}

export default function PreviousPage({ HeaderTitle, to }: PreviousPageProps): ReactElement {
    return (
        <div className="header">
            <div className="header__container">
                <Link className="header__previous" to={to}><img src="left-arrow.svg" alt="Arrow pointing left meaning return to the previous page." /></Link>
                <h1 className="header__title">{HeaderTitle}</h1>
            </div>
        </div>
    );
}
