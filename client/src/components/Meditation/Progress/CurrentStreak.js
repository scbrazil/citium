import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../context/context.js";
import { Grid, makeStyles, Typography } from "@material-ui/core";
// import user from '../../dummyData.js';

const CurrentStreak = () => {
  // let consecutiveDays = 3;
  const [userUpdated, setUserUpdated] = useState(false);
  const [streak, setStreak] = useState(1);
  const { user, setUser, increaseStreak } = useContext(AppContext);
  console.log("The fucking user: ", user.progress);
  // const [dummy, setDummy] = useState(user);

  useEffect(() => {
    if (Object.keys(user).length > 0 ) {
      streakChecker()
      // setUserUpdated(!userUpdated);
      if (Date.now() - user.progress.lastSubmission <= 86400000) {
        setStreak(user.progress.streak + 1);
      }
    }
  }, [user]);

  const streakChecker = async () => {
    if (Date.now() - user.progress.lastSubmission <= 86400000) {
      increaseStreak();
    }
  }

  return (
    <>
      <div>
        <Typography
          align="center"
          style={{ fontSize: "16px", fontWeight: "bold" }}
        >
          {`Streak`}
        </Typography>
      </div>
      <div>
        {/* {Object.keys(user).length > 0 ? ( */}
        {streak ? (
          <Typography
            align="center"
            style={{
              fontSize: "32px",
              fontWeight: "bold",
            }}
          >
            {streak}
          </Typography>
        ) : (
          <div></div>
        )}
      </div>
      <div>
        <Typography
          align="center"
          style={{
            fontSize: "14px",
            fontWeight: "bold",
          }}
        >
          DAYS
        </Typography>
      </div>
    </>
  );
};

export default CurrentStreak;
