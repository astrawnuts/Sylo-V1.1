import React, { ReactElement } from "react";
import {Link} from "react-router-dom";

interface Props { }

// The Start Screen
export default function StartScreen({ }: Props): ReactElement {
  return (
    <>
      <h1>Crypto address book</h1>
      <img src="landingImage.png" alt="Logo image of the Sylo Smart Wallet Fox." />
      <p>The easiest and quickest way to mange and  pay your contacts.
        Connect your wallet to begin.</p>
      <Link className="button button__orange" to="/contacts" type="button">Connect Wallet</Link>

    </>
  );
}
