import React from "react";
import NoResultsSvg from "../noResults.svg";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      marginTop: "2em",
    },
    text: {
      fontFamily: "Nunito",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: 18,
      lineHeight: 4,
      color: "#1B1D1F",
    },
  })
);

function NoResults() {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <img src={NoResultsSvg} />
      <p className={classes.text}> No resuts found </p>
    </div>
  );
}

export default NoResults;
