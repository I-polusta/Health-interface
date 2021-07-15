import React from "react";
import "./Section2.css";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import { deepOrange, green, orange } from "@material-ui/core/colors";
import Avatar from "@material-ui/core/Avatar";
import SnoozeIcon from "@material-ui/icons/Snooze";
import FavoriteIcon from "@material-ui/icons/Favorite";
import EmojiFoodBeverageIcon from "@material-ui/icons/EmojiFoodBeverage";

//styling starts here
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",

    "& > *": {
      margin: theme.spacing(0),
    },
  },

  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
}));

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 10,
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor:
      theme.palette.grey[theme.palette.type === "light" ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: "#1a90ff",
  },
}))(LinearProgress);
//styling ends here

function Section2() {
  const classes = useStyles();

  return (
    <div className="second">
      <h5 className="main">Health Status</h5>
      <div className="second__container">
        <div className="health__container">
          <h3>6:25</h3>
          <div className="contain">
            <div className={classes.root}>
              <SnoozeIcon className="icon__clock" fontSize="large" />
              <h6 className="tag">Hours</h6>
            </div>
          </div>
          <BorderLinearProgress variant="determinate" value={50} />
        </div>

        <div className="health__container">
          <h3>120</h3>
          <div className="contain">
            <FavoriteIcon className="icon__heart" fontSize="large" />
            <h6 className="tag">Bpm</h6>
          </div>
          <BorderLinearProgress variant="determinate" value={50} />
        </div>

        <div className="health__container">
          <h3>18</h3>
          <div className="contain">
            <EmojiFoodBeverageIcon className="icon__cal" fontSize="large" />
            <h6 className="tag">Kcal</h6>
          </div>
          <BorderLinearProgress variant="determinate" value={50} />
        </div>
      </div>
    </div>
  );
}

export default Section2;
