import React, { useContext, useState } from "react";
import "./Menu.css";
import { AiOutlineSearch } from "react-icons/ai";
import { Context as NameContext } from "../../contexts/searchContext";
import { useNavigate } from "react-router-dom";


const Menu = () => {
  const [value, setValue] = useState("");
  const {
    state: { name },
    findName,
  } = useContext(NameContext);
  const navigate = useNavigate()
  return (
    <div className="header-container">
      <div className="title">
   <img className = "logoimage" src = "https://s3.amazonaws.com/penn.clubs/clubs_small/85a8bca906f24ce492d63e20740591eb.png" alt = "logo"/>
      </div>
      <div className="tabs">
      <div>About</div>
        <div>Start-up Archive</div>
        <div>Community Forum</div>
        <div onClick={()=>{navigate("/form")}}>Share Your Project</div>
      </div>
      <div className="searchBar">
        <div className="searchInputsCourse">
          <input
            type="text"
            className="header-search"
            placeholder="Search"
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
      <div className="login"></div>
    </div>
  );
};

export default Menu;