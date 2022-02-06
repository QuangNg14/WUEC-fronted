import React from "react";
import "./StartupBox.css";
import { FaComment } from "react-icons/fa";
import { BsCaretUpSquare } from "react-icons/bs";
const StartupBox = (props) => {
  return (
    <div className="box-container">
      <div className="image">
        <img src={props.image} className="img" />
      </div>
      <div className="content">
        <div className="name">{props.name}</div>
        <div className="description">{props.description}</div>
        <div className="info">
          <div>
            <FaComment /> &nbsp;{props.numComments}
          </div>
          <div style={{ marginLeft: 20 }}>{props.type}</div>
        </div>
      </div>
      <div className="upvote">
        <div className="inner-box">
          <BsCaretUpSquare />
          <div style={{ marginTop: "20%", fontSize: 12 }}>{props.upvotes}</div>
        </div>
      </div>
    </div>
  );
};

export default StartupBox;
