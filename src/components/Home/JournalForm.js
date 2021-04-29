import React, { useContext, useState } from "react";
import { AppContext } from "../../context/context.js";
import {
  Button,
  Card,
  FormGroup,
  FormLabel,
  Grid,
  Input,
  Link,
  makeStyles,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    // paddingTop: '10em',
    marginTop: '7em'
  },
  cardStyle: {
    color: "#fff",
    backgroundColor: "#2d2d2d",
    padding: "0.8em 0.6em 1em 0.6em",
    opacity: '0.97',
  },
  textBox: {
    color: "#fff",
    '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
      borderColor: '#575757'
    }
  },
  buttonContainer: {
    padding: '1em 0em 0em 0em'
  },
  submitButton: {
    backgroundColor: "#9292e1",
    "&:hover": {
      backgroundColor: "#7171ae",
      color: "#ffffff",
    },
    marginLeft: "0.5em",
    marginRight: "0.1em",
    size: "small",
  },
  clearButton: {
    backgroundColor: "#ffffff",
    marginRight: "1em",
    "&:hover": {
      backgroundColor: "#c96565",
      color: "#ffffff",
    },
  },
  loginButton: {
    backgroundColor: "#a2a2fc",
  },
  entryStyles: {
    color: "#ffffff",
  },
}));

const JournalForm = () => {
  const classes = useStyles();
  const [textInput, setTextInput] = useState("");
  const [submittedEntry, setSubmittedEntry] = useState("");
  const { setDailyEntry, submissionStatus } = useContext(AppContext);

  const handleSubmit = (event) => {
    event.preventDefault;
    // if (submittedEntry.length > 0) {
      submissionStatus(true);
    // }
  };

  return (
    <div className={classes.root}>
    <Card className={classes.cardStyle}>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <TextField
            className={classes.textBox}
            variant="outlined"
            multiline
            fullWidth
            rows="10"
            placeholder="Write a short note."
            InputLabelProps={{
              style: { color: "#fff" },
            }}
            inputProps={{
              className: classes.textBox,
            }}
            // onChange={event => { handleInputChange(event)}}
            onInput={(e) => {
              setDailyEntry(e.target.value);
            }}
          ></TextField>
          <Grid container direction="row" className={classes.buttonContainer}>
            <Button
              className={classes.submitButton}
              variant="contained"
              size="small"
              style={{ fontSize: '16px' }}
              onClick={(event) => {
                handleSubmit(event);
              }}
            >
              Submit >
            </Button>
            <Button
              className={classes.clearButton}
              variant="contained"
              size="small"
              style={{ fontSize: '16px' }}
            >
              Clear
            </Button>
            <Typography variant="caption" style={{ fontSize: '14px', marginLeft: "0.7em" }}>
              Login to Save
            </Typography>
          </Grid>
        </FormGroup>
      </form>
    </Card>
    </div>
  );
};

export default JournalForm;
