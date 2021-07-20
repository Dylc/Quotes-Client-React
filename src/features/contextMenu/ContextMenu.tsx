import React, { useState, SetStateAction, Dispatch } from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { useHistory } from "react-router-dom";

import { useAppDispatch } from "../../app/hooks";
import styles from "./ContextMenu.module.css";
import SelectLanguageDialog from "./SelectLanguageDialog";
import { SHARED_MESSAGES } from "../../lang/messages";

interface IContextMenu {
  setContextMenuAnchorEl: Dispatch<SetStateAction<HTMLElement | null>>;
  anchorEl: HTMLElement | null;
}
export function ContextMenu(props: IContextMenu) {
  const { setContextMenuAnchorEl, anchorEl } = props;
  const dispatch = useAppDispatch();
  const history = useHistory();

  const [openSelectLangDialog, setOpenSelectLangDialog] =
    useState<boolean>(false);

  const handleClose = () => {
    setContextMenuAnchorEl(null);
  };

  const handleToggleOpenSelectLangDialog = () => {
    setOpenSelectLangDialog(!openSelectLangDialog);
  };

  const handleAddNewQuote = () => {
    history.push("/add");
    handleClose();
  };

  return (
    <>
      <Menu
        id="context-menu"
        anchorEl={anchorEl}
        className={styles.contextMenu}
        keepMounted
        open={true}
        onClose={handleClose}
      >
        <MenuItem onClick={handleToggleOpenSelectLangDialog}>
          {SHARED_MESSAGES.languages()}
        </MenuItem>
        <MenuItem onClick={handleAddNewQuote}>
          {SHARED_MESSAGES.addNew()}
        </MenuItem>
      </Menu>
      {openSelectLangDialog && (
        <SelectLanguageDialog
          handleToggleOpenSelectLangDialog={handleToggleOpenSelectLangDialog}
          handleContextMenuClose={handleClose}
        />
      )}
    </>
  );
}
