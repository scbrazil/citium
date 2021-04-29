import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch, useHistory } from "react-router-dom";
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
    marginTop: "12em",
  },
  cardStyle: {
    color: "#fff",
    // backgroundColor: '#2d2d2d',
    background:
      "linear-gradient(to bottom right, rgba(6.3, 15.5, 40.8, 0.2), 0.1%, #25262c, 95%, rgba(21.6, 18.4, 40.8, 0.2))",
    padding: "0.8em 0.6em 1em 0.6em",
    opacity: "0.97",
  },
  textBox: {
    color: "#fff",
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      // borderColor: '#575757'
      borderColor: "#9c9b9b",
      borderWidth: "0.1px",
    },
    "&::placeholder": {
      textOverflow: "ellipsis !important",
      color: "white",
      fontSize: 16,
      // fontWeight: 'bold'
    },
  },
  buttonContainer: {
    padding: "0em 0em 0em 0em",
  },
  submitButton: {
    backgroundColor: "#9292e1",
    "&:hover": {
      backgroundColor: "#7171ae",
      color: "#ffffff",
    },
    marginLeft: "0.5em",
    marginRight: "0.1em",
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

const JournalForm = (props) => {
  const classes = useStyles();
  const [textInput, setTextInput] = useState("");
  // const [submittedEntry, setSubmittedEntry] = useState('');
  const [charactersLeft, setCharactersLeft] = useState(500);
  const [submitDisabled, setSubmitDisabled] = useState(false);
  const {
    dailyEntry,
    setDailyEntry,
    submissionStatus,
    submittedEntry,
  } = useContext(AppContext);
  const history = useHistory();
  // const { history } = props;


  useEffect(() => {
    {
      handleLengthChange();
    }
  }, [submittedEntry]);

  const handleSubmit = (event) => {
    event.preventDefault();
    // submissionStatus(true);
    localStorage.setItem('journalEntry', submittedEntry);
    history.push('/meditation');
    // setAnchorEl(null);
  };

  const handleInputChange = (e) => {
    e.preventDefault();
    setDailyEntry(e.target.value);
  };

  const handleLengthChange = (e) => {
    let length = 500 - submittedEntry.length;
    setCharactersLeft(length);
  };

  const handleClearSubmit = (e) => {
    e.preventDefault();
    setDailyEntry("");
  };

  return (
    <div className={classes.root}>
      <Card className={classes.cardStyle}>
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <TextField
              value={submittedEntry}
              // defaultValue={submittedEntry}
              className={classes.textBox}
              variant="outlined"
              multiline
              fullWidth
              rows="10"
              placeholder="Write a short entry to focus during your meditation."
              inputProps={{
                className: classes.textBox,
                maxLength: 500,
              }}
              onInput={(e) => {
                // setDailyEntry(e.target.value);
                // setDailyEntry(e.target.value);
                handleInputChange(e);
              }}
            ></TextField>
            <Grid container direction="row" className={classes.buttonContainer}>
              {/* <Link href="/meditation"> */}
                <Button
                  className={classes.submitButton}
                  id="submitButton"
                  disabled={submitDisabled}
                  variant="contained"
                  size="small"
                  style={{ fontSize: "14px" }}
                  onClick={(e) => { handleSubmit(e) }}
                >
                  Submit >
                </Button>
              {/* </Link> */}
              <Button
                className={classes.clearButton}
                variant="contained"
                size="small"
                style={{ fontSize: "14px" }}
                onClick={(e) => handleClearSubmit(e)}
              >
                Clear
              </Button>
              <Typography
                variant="caption"
                style={{ fontSize: "14px", marginLeft: "0.7em" }}
              >
                Login to Save
              </Typography>
              <div style={{ paddingLeft: "16em" }}>
                {charactersLeft > 0 ? (
                  <Typography>{charactersLeft} characters remaining</Typography>
                ) : (
                  <Typography style={{ color: "red" }}>
                    {charactersLeft} characters remaining
                  </Typography>
                )}
              </div>
            </Grid>
          </FormGroup>
        </form>
      </Card>
    </div>
  );
};

export default JournalForm;
