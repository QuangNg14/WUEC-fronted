import React, { useState } from "react";
import "./StartupBox.css";
import { FaComment } from "react-icons/fa";
import { BsCaretUpSquare } from "react-icons/bs";
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

const StartupBox = (props) => {
  const classes = useStyles()
  const [open, setOpen] = useState(false)

  const closeModal = () => {
    setOpen(false)

  }
  return (
    <div className="box-container">

      <div className="image" onClick={() => setOpen(true)}>
        <img src={props.image} className="img" />
      </div>
      <div className="content">
        <Modal
          open={open}
          onClose={closeModal}
          className={classes.paper}
          style={{ 'maxHeight': '1000px', 'overflowY': 'scroll', position: "absolute" }}
        >
          <div>
            hello
          </div>

        </Modal>
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

const useStyles = makeStyles((theme) => ({
  paper: {
    marginLeft: "20%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "60%",
    height: "auto",
    backgroundColor: "black",
    overflowY: "scroll"

  },
  
}));


export default StartupBox;
