import React from "react";
import "./Section5.css";
import Badge from "@material-ui/core/Badge";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import TextsmsIcon from "@material-ui/icons/Textsms";
import { deepOrange } from "@material-ui/core/colors";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";

const StyledBadge = withStyles((theme) => ({
  badge: {
    backgroundImage: "linear-gradient(120deg, #d4fc79 0%, #82aa38 100%)",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "$ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}))(Badge);

const SmallAvatar = withStyles((theme) => ({
  root: {
    width: 22,
    height: 22,
    border: `2px solid ${theme.palette.background.paper}`,
  },
}))(Avatar);

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },

  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

const Accordion = withStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    backgroundImage: "linear-gradient(120deg, #d4fc79 0%, #82aa38 100%)",
    border: "1px solid black",
    borderRadius: "15px",
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: "auto",
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundImage: "linear-gradient(120deg, #d4fc79 0%, #82aa38 100%)",
    borderBottom: "1px solid black",
    borderRadius: "15px",
    marginBottom: -1,
    minHeight: 56,
    "&$expanded": {
      minHeight: 56,
    },
  },
  content: {
    "&$expanded": {
      margin: "12px 0",
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails);

function Section5() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(null);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className="fifth__container">
      <h3 className="heading">Your Trainers</h3>
      <div className="fifth">
        <Accordion
          square
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography>MMA Coach</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className={classes.root}>
              <StyledBadge
                overlap="circular"
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                variant="dot"
              >
                <Avatar className={classes.orange}>J</Avatar>
              </StyledBadge>
            </div>
            <div className="fifth__container">
              <h2>Jacob Jones</h2>
              <p>Boxing Coach</p>
            </div>
            <TextsmsIcon className="sms" />
          </AccordionDetails>
        </Accordion>
      </div>

      <div className="fifth">
        <Accordion
          square
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography>Boxing Coach</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className={classes.root}>
              <StyledBadge
                overlap="circular"
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                variant="dot"
              >
                <Avatar className={classes.orange}>J</Avatar>
              </StyledBadge>
            </div>
            <div className="fifth__container">
              <h2>Jacob Jones</h2>
              <p>Boxing Coach</p>
            </div>
            <TextsmsIcon className="sms" />
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}
export default Section5;
