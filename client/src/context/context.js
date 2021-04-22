import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [entrySubmittedStatus, setEntrySubmitted] = useState(false);
  const [submittedEntry, setSubmittedEntry] = useState('');
  const [openLogin, setOpenLogin] = useState(false);
  const [loginDialog, setLoginDialog] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const submissionStatus = (entryStatus) => {
    setEntrySubmitted(entryStatus);
  };

  const setDailyEntry = (entry) => {
    setSubmittedEntry(entry);
  }

  const openLoginModal = (status) => {
    setOpenLogin(status);
  }

  const loginSwitch = (status) => {
    setLoginDialog(status);
  }

  const handleLoginStatus = () => {
    setLoggedIn(true);
  }

  return (
    <AppContext.Provider
      value={{
        entrySubmittedStatus,
        loggedIn,
        loginDialog,
        openLogin,
        submittedEntry,
        handleLoginStatus,
        openLoginModal,
        loginSwitch,
        setDailyEntry,
        submissionStatus
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
