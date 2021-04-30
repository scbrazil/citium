import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../context/context.js";
import { Grid, makeStyles, Typography } from "@material-ui/core";

const CurrentLevel = () => {
  let currentLevel = 7;
  let [level, setLevel] = useState(null);
  const { user } = useContext(AppContext);
  // const [totalDay, setTotalDays] = useContext(null);

  // useEffect(() => {
  //   if (Object.keys(user).length > 0) {
  //     if (Date.now() - user.progress.lastSubmission <= 86400000) {
  //       setTotalDays(user.progress.totalDays++);
  //     }
  //     if (totalDays - user.progress.lastLevelDays === 7) {
  //       setLevel(user.progress.level++);
  //     }
  //   }
  // }, [user]);

  // Invoked context function increasing level in DB
  const levelChecker = () => {};

  return (
    <>
      <div>
        <Typography
          align="center"
          style={{ fontSize: "16px", fontWeight: "bold" }}
        >
          {`Level`}
        </Typography>
      </div>
      <div>
        <Typography
          align="center"
          style={{
            fontSize: "32px",
            fontWeight: "bold",
            paddingTop: "0.2em",
          }}
        >
          {currentLevel}
          {/* {level} */}
        </Typography>
      </div>
    </>
  );
};

export default CurrentLevel;
