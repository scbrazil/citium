import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [entrySubmittedStatus, setEntrySubmitted] = useState(false);
  const [submittedEntry, setSubmittedEntry] = useState('');
  const [modalOpen, setModalOpen] = useState(false);

  const submissionStatus = (entryStatus) => {
    setEntrySubmitted(entryStatus);
  };

  const setDailyEntry = (entry) => {
    setSubmittedEntry(entry);
  }

  const openLoginModal = () => {
    setModalOpen(true);
  }

  return (
    <AppContext.Provider
      value={{
        entrySubmittedStatus,
        modalOpen,
        submittedEntry,
        openLoginModal,
        setDailyEntry,
        submissionStatus
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
