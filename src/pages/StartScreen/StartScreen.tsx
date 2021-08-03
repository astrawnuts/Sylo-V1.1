import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
import "./StartScreen.scss";

interface Props { }

// The Start Screen
export default function StartScreen({ }: Props): ReactElement {
  return (
    <>
      <div className="page">
        <h1 className="page__title">Crypto address book</h1>
        <img src="landingImage.png" alt="Logo image of the Sylo Smart Wallet Fox." />
        <p className="page__paragraph">The easiest and quickest way to mange and  pay your contacts.
          Connect your wallet to begin.</p>
        <Link className="button button__orange" to="/contacts" type="button">Connect Wallet</Link>
      </div>
      </>
      );
}
