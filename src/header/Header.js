import React, { useContext, useEffect, useState } from "react";
import "./Header.css";
import { AiOutlineSearch } from "react-icons/ai";
import { Context as NameContext } from "../contexts/searchContext";
import { db } from "../services/firebase";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

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
    <div className="header-container">
      <div className="title">
        <h5>WUEC Entrepreneurship Hub</h5>
      </div>
      <div className="tabs">
        <div>About</div>
        <div>Archive</div>
        <div>Forum</div>
        <div>Post your project</div>
      </div>
      <div className="searchBar">
        <div className="searchInputsCourse">
          <input
            type="text"
            className="header-search"
            placeholder="Search startups"
            name="s"
            value={name}
            onChange={(e) => findName(e.target.value)}
          />
        </div>
        <div
          style={{
            width: "10%",
            height: 40,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#15325c",
            color: "white",
          }}
        >
          <AiOutlineSearch size={25} />
        </div>
      </div>
      <div className="login">
        {user && (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "60%",
              justifyContent: "space-around",
            }}
          >
            <div>{user.name}</div> / <div onClick={onLogout}>Sign Out</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
