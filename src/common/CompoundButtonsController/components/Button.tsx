import React, { ReactNode } from 'react'
import styles from "./styles.module.css";
import IconButton from "@material-ui/core/IconButton";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import EditIcon from "@material-ui/icons/Edit";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

interface IButtonsController{
    disabled?: boolean
    previous?: boolean
    next?: boolean
    edit?: boolean
    onClick: ()=>void
    children?: unknown
}

function Button({disabled, previous, next, edit, onClick, children} : IButtonsController) {
    return (
      <IconButton aria-label="button-controll" disabled={disabled} onClick={onClick}>
        {previous && <ArrowBackIcon/>}
        {next && <ArrowForwardIcon/>}
        {edit && <EditIcon/>}
        {children}
      </IconButton>
    );
}

export { Button }
