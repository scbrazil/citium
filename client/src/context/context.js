import React, { createContext, useEffect, useState } from 'react';
import { useMediaQuery } from '@material-ui/core';
import axios from 'axios';
import Theme from '../Theme.js';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [entrySubmittedStatus, setEntrySubmitted] = useState(false);
  const [submittedEntry, setSubmittedEntry] = useState('');
  const [openLogin, setOpenLogin] = useState(false);
  const [loginDialog, setLoginDialog] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [showSplash, setShowSplash] = useState(false);
  const isMobile = useMediaQuery(Theme.breakpoints.down('xs'));

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

  const handleSplash = () => {
    setShowSplash(false);
  }

  return (
    <AppContext.Provider
      value={{
        entrySubmittedStatus,
        isMobile,
        loggedIn,
        loginDialog,
        openLogin,
        showSplash,
        submittedEntry,
        handleLoginStatus,
        handleSplash,
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
