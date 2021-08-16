import React from "react";
import { Quote } from "../features/quote/Quote";
import ButtonControllers from '../features/quote/ButtonControllers'

function Home() {
  return (
    <>
      <Quote />
      <div className="buttonsController">
        <ButtonControllers />
      </div>
    </>
  );
}

export default Home;
