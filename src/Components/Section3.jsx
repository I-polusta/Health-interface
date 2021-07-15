import React from "react";
import "./Section3.css";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

function Section3() {
  const classes = useStyles();

  return (
    <div className="third">
      <img
        className="img"
        src="https://cdn.pixabay.com/photo/2012/04/18/14/06/popeye-37117__340.png"
        alt="gym"
      />
      <div className="third__container">
        <div className={classes.root}>
          <p className="textp">
            Sign up for a personal trainer to improve your results
          </p>
          <button className="signbtn">Sign Up</button>
        </div>
      </div>
    </div>
  );
}

export default Section3;
