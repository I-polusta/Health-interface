import React, { Component, useState, newState } from "react";
import "./Section1.css";
import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import { deepOrange } from "@material-ui/core/colors";
import Badge from "@material-ui/core/Badge";
import NotificationsIcon from "@material-ui/icons/Notifications";
import TuneIcon from "@material-ui/icons/Tune";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import PropTypes from "prop-types";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import PersonIcon from "@material-ui/icons/Person";
import AddIcon from "@material-ui/icons/Add";
import Typography from "@material-ui/core/Typography";
import { blue } from "@material-ui/core/colors";
import Button from "@material-ui/core/Button";

//prompt for username
const emails = ["username@gmail.com", "user02@gmail.com"];
let name;
name = prompt("HI!! May I know your name please");

let msg = {
  user: name,
};

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

//styling starts here
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
    avatar: {
      backgroundColor: blue[100],
      color: blue[600],
    },
  },

  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
}));
//styling starts here

//Dialog starts here
function SimpleDialog(props) {
  const classes = useStyles();
  const { onClose, selectedValue, opens } = props;

  const handleClose__dialog = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };
  console.log("working");
  return (
    <Dialog
      onClose={handleClose__dialog}
      aria-labelledby="simple-dialog-title"
      open={opens}
    >
      <DialogTitle id="simple-dialog-title">Your Accounts</DialogTitle>
      <List>
        {console.log("not wirking\\")}
        {emails.map((email) => (
          <ListItem
            button
            onClick={() => handleListItemClick(email)}
            key={email}
          >
            <ListItemAvatar>
              <Avatar className={classes.avatar}>
                <PersonIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={email} />
          </ListItem>
        ))}

        <ListItem
          autoFocus
          button
          onClick={() => handleListItemClick("addAccount")}
        >
          <ListItemAvatar>
            <Avatar>
              <AddIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Add account" />
        </ListItem>
      </List>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  selectedValue: PropTypes.string.isRequired,
};
//Dialog ends here

function Section1() {
  const classes = useStyles();
  // settings menu start here
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick__setting = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose__setting = () => {
    setAnchorEl(null);
  };
  // settings menu end here
  // Dialog handling start here
  const [opens, setOpens] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);
  const handleOpens__dialog = () => {
    console.log("hello");
    setOpens(true);
  };

  const handleClose__dialog = (value) => {
    setOpens(false);
    setSelectedValue(value);
  };

  // Dialog handling end here

  // notification handling start here
  const [state, setState] = React.useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });

  const { vertical, horizontal, open } = state;

  const handleClicked__notify = (newState) => () => {
    setState({ open: true, ...newState });
  };

  const handleClosed__notify = () => {
    setState({ ...state, open: false });
  };
  // notification handling ends here

  let count = 10;

  // const [num, setNum] = React.useState(count);
  // const handleCount = (count) => {
  //   let update = count--;
  //   setNum(update);
  // };

  const duo = () => {
    handleClosed__notify();
    // handleCount();
  };

  return (
    <div className="card__container">
      <div className={classes.root}>
        <Avatar className={classes.orange} onClick={handleOpens__dialog}>
          {msg.user.charAt(0).toUpperCase()}
        </Avatar>

        <SimpleDialog
          selectedValue={selectedValue}
          opens={opens}
          onClose={handleClose__dialog}
        />
      </div>

      <div className="first">
        <h2>Hello {msg.user}</h2>
        <p className="txt__first">type: Free Account</p>
        <Typography variant="subtitle1">Account:{selectedValue}</Typography>
      </div>
      <div className={classes.root}>
        <React.Fragment>
          <Badge badgeContent={count} color="error">
            <NotificationsIcon
              className="notify"
              onClick={handleClicked__notify({
                vertical: "top",
                horizontal: "center",
              })}
            />
          </Badge>
        </React.Fragment>
        <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          open={open}
          onClose={duo}
          message="This is your notification panel"
          key={vertical + horizontal}
        >
          <Alert onClose={duo} severity="info">
            these are your Notifications
          </Alert>
        </Snackbar>
      </div>
      <TuneIcon className="setting" onClick={handleClick__setting} />
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose__setting}
      >
        <MenuItem className="item" onClick={handleClose__setting}>
          Profile
        </MenuItem>
        <MenuItem className="item" onClick={handleClose__setting}>
          My account
        </MenuItem>
        <MenuItem className="item" onClick={handleClose__setting}>
          Logout
        </MenuItem>
        <MenuItem className="item" onClick={handleClose__setting}>
          Settings
        </MenuItem>
        <MenuItem className="item" onClick={handleClose__setting}>
          Close
        </MenuItem>
      </Menu>
    </div>
  );
}

export default Section1;
