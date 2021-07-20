import React from "react";
import Alert from "@material-ui/lab/Alert";
import AlertTitle from "@material-ui/lab/AlertTitle";
import Portal from "@material-ui/core/Portal";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    alert: {
      position: "sticky",
      bottom: 0,
      width: "auto",
      zIndex: 1,
    },
  })
);

export default ({ onClose, children }) => {
  const classes = useStyles();

  return (
    <Portal>
      <Alert severity="success" className={classes.alert} onClose={onClose}>
        <AlertTitle>Success</AlertTitle>
        {children}
      </Alert>
    </Portal>
  );
};
