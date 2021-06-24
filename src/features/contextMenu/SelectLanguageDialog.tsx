import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { useDispatch } from "react-redux";
import { selectLang, ILanguage, enumLanguages, setLang} from "./contextMenuSlice";
import { useAppSelector } from "../../app/hooks";
import styles from "./ContextMenu.module.css";

const useStyles = makeStyles({
  container: {
    flex: "0 1 50%",
    display: "flex",
    justifyContent: "center",
  },
  button: {
    margin: 4,
  },
});

const languages : ILanguage[] = [
  {
    name: "English",
    abb: enumLanguages.EN,
  },
  {
    name: "Russian",
    abb: enumLanguages.RU
  },
  {
    name: "Hebrew",
    abb: enumLanguages.HE
  }
];

interface ISelectLanguageDialog {
  handleToggleOpenSelectLangDialog: () => void;
  handleContextMenuClose: () => void;
}

function SelectLanguageDialog(props: ISelectLanguageDialog) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { handleContextMenuClose, handleToggleOpenSelectLangDialog } = props;

  const [selectedLang, setSelectedLang] = useState(useAppSelector(selectLang))

  const handleSetLang = (language: ILanguage) => {
    dispatch(setLang(language.abb))
    setSelectedLang(language.abb)
  }

  return (
    <Dialog
      open={true}
      onClose={() => {
        handleToggleOpenSelectLangDialog()
        handleContextMenuClose();
      }}
      aria-labelledby="select-langauge-dialog"
    >
      <DialogTitle id="select-langauge-dialog">Select Language</DialogTitle>
      <List className={styles.list}>
        {languages.map((language) => (
          <ListItem
            button
            className={styles.listItem}
            classes={{selected: styles.listItemSelected}}
            selected={selectedLang === language.abb }
            onClick={() => handleSetLang(language)}
            key={language.name}
          >
            <ListItemText primary={language.name} />
          </ListItem>
        ))}
      </List>
    </Dialog>
  );
}

export default SelectLanguageDialog;
