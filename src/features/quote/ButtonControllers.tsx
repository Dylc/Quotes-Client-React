import React from "react";
import {
  selectQuotes,
  selectCounter,
  selectCount,
  incrementCounter,
  decrementCounter,
} from "./quoteSlice";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { useHistory } from "react-router-dom";
import ButtonsController from "../../common/CompoundButtonsController/ButtonsController";

function ButtonControllers() {
  const quotes = useAppSelector(selectQuotes);
  const counter = useAppSelector(selectCounter);
  const count = useAppSelector(selectCount);

  const dispatch = useAppDispatch();
  const history = useHistory();

  const decrementDisabled = counter <= 0;
  const incrementDisabled = count ? counter == count - 1 : false;
  // const incrementDisabled = (count ? count <= quotes.length : false);

  const handleEditQuote = () => {
    history.push("/edit");
  };

  return (
    <ButtonsController>
      <ButtonsController.Button
        previous
        disabled={decrementDisabled}
        onClick={() => dispatch(decrementCounter())}
      />

      <ButtonsController.Button
        next
        disabled={incrementDisabled}
        onClick={() => dispatch(incrementCounter())}
      />

      <ButtonsController.Button edit onClick={handleEditQuote} />
    </ButtonsController>
  );
}

export default ButtonControllers;
