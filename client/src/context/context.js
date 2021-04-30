import React, { createContext, useEffect, useState } from 'react';
import { useMediaQuery } from '@material-ui/core';
import axios from 'axios';
import Theme from '../Theme.js';
import dummy from '../components/dummyData.js';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [entrySubmittedStatus, setEntrySubmitted] = useState(false);
  const [submittedEntry, setSubmittedEntry] = useState('');
  const [openLogin, setOpenLogin] = useState(false);
  const [loginDialog, setLoginDialog] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [showSplash, setShowSplash] = useState(true);
  const isMobile = useMediaQuery(Theme.breakpoints.down('xs'));
  const [dumb, setDumb] = useState(dummy);
  const [user, setUser] = useState({});

  // useEffect(() => {
  //   getDumb();
  // }, [dummy])

  useEffect(() => {
    getUserById();
  }, [])

  useEffect(() => {
    if (Object.keys(user).length) streakChecker();
  }, [user])

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

  // const streakChecker = async () => {
  //   if (Date.now() - user.progress.lastSubmission <= 86400000) {
  //     setDummy(dummy.progress.streak++);
  //   }
  // }

  // Modify to update DB
  const increaseStreak = () => {
    // setUser(user.progress.streak++);
  }

  // Get user by id
  const id = '608b7ee525c353df65207bcd';
  const getUserById = async () => {
    try {
      let user = await axios.get(`/user/${id}`);
      console.log('returned data: ', user.data);
      await setUser(user.data);
    } catch (err) {
      console.error('User retrieval failed: ', err);
    }
  }

  const streakChecker = async () => {
    console.log(user)
    if (Date.now() - user.progress.lastSubmission <= 86400000) {
      increaseStreak();
    }
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
        user,
        handleLoginStatus,
        handleSplash,
        increaseStreak,
        openLoginModal,
        loginSwitch,
        setDailyEntry,
        // streakChecker,
        submissionStatus
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
