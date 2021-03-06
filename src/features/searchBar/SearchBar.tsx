import React from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import {
  fade,
  makeStyles,
  Theme,
  createStyles,
} from "@material-ui/core/styles";
import {
  fetchQuoteByQueryAsync,
  setIsSearching,
  selectIsSearching,
} from "./searchBarSlice";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    search: {
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      "&:hover": {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(3),
        width: "auto",
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    inputRoot: {
      color: "inherit",
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
    },
  })
);

export function SearchBar() {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const history = useHistory();

  const isSearching = useAppSelector(selectIsSearching);

  if (isSearching && history.location.pathname !== "/searched") {
    history.push("/searched");
  } else if (!isSearching && history.location.pathname === "/searched") {
    history.push("/");
  }

  const handleOnSearch = (event) => {
    const query = event.target.value;
    console.log("query:", query);
    const isSearching = query === "";
    dispatch(setIsSearching(!isSearching));
    dispatch(fetchQuoteByQueryAsync(query));
  };

  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        onChange={handleOnSearch}
        placeholder="Search???"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ "aria-label": "search" }}
      />
    </div>
  );
}
