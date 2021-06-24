import React from "react";
import { Controller as ReactHookController, Control } from "react-hook-form";
import TextField from "@material-ui/core/TextField";
import { get } from "lodash";
import { DELIMETER } from '../utilites'; 
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    reactHookController: {
      marginTop: "1em",
      "& div": {
        width: "100%",
      },
    },
  })
);

interface ITextFieldController {
  path: any;
  label: string;
  multiline?: boolean;
  isArray?: boolean;
  quote: unknown;
  control: Control<Record<string, any>> | undefined;
}

export default function TextFieldController(props: ITextFieldController) {
  const classes = useStyles();
  const { path, label, multiline, isArray, quote, control } = props;
  const defaultValue = isArray ? get(quote, path, []).join(DELIMETER) : get(quote, path, "");
  
  return (
    <div className={classes.reactHookController}>
      <ReactHookController
        name={path}
        control={control}
        defaultValue={defaultValue}
        render={({ field }) => (
          <TextField
            label={label}
            multiline={multiline}
            rows={multiline ? 6 : 1}
            variant="outlined"
            {...field}
          />
        )}
      />
    </div>
  );
}
