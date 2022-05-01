import React, { useState } from "react";
import "./NewStartupBox.css";
import { FaComment } from "react-icons/fa";
import { BsCaretUpSquare } from "react-icons/bs";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";

const NewStartupBox = (props) => {
  return (
    <div className="box-container">
      <div className="top-image">
        <img src={props.image} className="img" />
      </div>
      <div className="bottom-content">
        <div className="header-content">
          <b className="header-name">{props.name}</b>
        </div>
        <div className="project-description">
          <div style={{ marginLeft: 10 }}>{props.description}</div>
        </div>
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  paper: {
    marginLeft: "20%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "60%",
    height: "auto",
    backgroundColor: "black",
    overflowY: "scroll",
  },
}));

export default NewStartupBox;
