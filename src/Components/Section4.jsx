import React from "react";
import "./Section4.css";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import Item from "./Item";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

function Section4() {
  return (
    <div className="main__fourth">
      <h3 className="headline">Today Trainings</h3>
      <Carousel breakPoints={breakPoints}>
        <Item>
          <div className="fourth__container">
            <div className="c1">
              <p className="para__training">Box</p>
              <h5>Sport Club</h5>
              <p className="para__ex">10.00</p>
            </div>
            <div className="c2">
              <p className="para__training">40</p>
              <h5>min</h5>
              <p className="para__ex">Warm-up</p>
            </div>
            <div className="c3">
              <p className="para__training">20</p>
              <h5>min</h5>
              <p className="para__ex">Stretch</p>
            </div>
            <MoreVertIcon className="vertical" fontSize="large" />
          </div>
        </Item>
        <Item>
          {" "}
          <div className="fourth__container">
            <div className="c1">
              <p className="para__training">lifting</p>
              <h5>Sport Club</h5>
              <p className="para__ex">12.00</p>
            </div>
            <div className="c2">
              <p className="para__training">20</p>
              <h5>min</h5>
              <p className="para__ex">Warm-up</p>
            </div>
            <div className="c3">
              <p className="para__training">20</p>
              <h5>min</h5>
              <p className="para__ex">Pull-ups</p>
            </div>
            <MoreVertIcon className="vertical" fontSize="large" />
          </div>{" "}
        </Item>
        <Item>
          <div className="fourth__container">
            <div className="c1">
              <p className="para__training">Crossfit</p>
              <h5>Sport Club</h5>
              <p className="para__ex">12.00</p>
            </div>
            <div className="c2">
              <p className="para__training">20</p>
              <h5>min</h5>
              <p className="para__ex">Warm-up</p>
            </div>
            <div className="c3">
              <p className="para__training">20</p>
              <h5>min</h5>
              <p className="para__ex">Pull-ups</p>
            </div>
            <MoreVertIcon className="vertical" fontSize="large" />
          </div>
        </Item>
        <Item>
          <div className="fourth__container">
            <div className="c1">
              <p className="para__training">Box</p>
              <h5>Sport Club</h5>
              <p className="para__ex">10.00</p>
            </div>
            <div className="c2">
              <p className="para__training">40</p>
              <h5>min</h5>
              <p className="para__ex">Warm-up</p>
            </div>
            <div className="c3">
              <p className="para__training">20</p>
              <h5>min</h5>
              <p className="para__ex">Stretch</p>
            </div>
            <MoreVertIcon className="vertical" fontSize="large" />
          </div>
        </Item>
        <Item>
          <div className="fourth__container">
            <div className="c1">
              <p className="para__training">Box</p>
              <h5>Sport Club</h5>
              <p className="para__ex">10.00</p>
            </div>
            <div className="c2">
              <p className="para__training">40</p>
              <h5>min</h5>
              <p className="para__ex">Warm-up</p>
            </div>
            <div className="c3">
              <p className="para__training">20</p>
              <h5>min</h5>
              <p className="para__ex">Stretch</p>
            </div>
            <MoreVertIcon className="vertical" fontSize="large" />
          </div>
        </Item>
        <Item>
          <div className="fourth__container">
            <div className="c1">
              <p className="para__training">Box</p>
              <h5>Sport Club</h5>
              <p className="para__ex">10.00</p>
            </div>
            <div className="c2">
              <p className="para__training">40</p>
              <h5>min</h5>
              <p className="para__ex">Warm-up</p>
            </div>
            <div className="c3">
              <p className="para__training">20</p>
              <h5>min</h5>
              <p className="para__ex">Stretch</p>
            </div>
            <MoreVertIcon className="vertical" fontSize="large" />
          </div>
        </Item>
      </Carousel>
    </div>
  );
}

export default Section4;
