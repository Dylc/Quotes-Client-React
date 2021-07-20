import React from "react";
import { Button } from "./components";

function ButtonsController({ children }) {
  return children;
}

ButtonsController.Button = Button;
export default ButtonsController;
