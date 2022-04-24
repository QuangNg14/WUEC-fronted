import React, { useContext, useEffect, useState } from "react";
import "./Header.css";
import { AiOutlineSearch } from "react-icons/ai";
import { Context as NameContext } from "../../contexts/searchContext";
import { db } from "../../services/firebase";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import Menu from "../menu/Menu"

const Header = () => {
  const [value, setValue] = useState("");
  const {
    state: { name },
    findName,
  } = useContext(NameContext);
  const { logout } = useAuth();
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  const onLogout = () => {
    navigate("/login");
    logout();
  };
  return (
    
    <div className="outer">
       <Menu />
    <div className="inner">
     
      <div className="prod-left">
        <h1 className="prod-head"><span style={{color: '#0f457f'}}>HELLO</span> ENTREPRENEURS!</h1>
        <h4 className="prod-head-sub">Ready to start the next unicorn?</h4>
      </div>
      <div className="prod-right">
        <img src="https://github.com/abhinanduN/codepen/blob/master/human-image.png?raw=true" className="prod-human-img" alt="prod" />
      </div>
    </div>
  </div>
  );
};

export default Header;
