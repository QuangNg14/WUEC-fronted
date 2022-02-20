import React, { useContext, useState } from "react";
import "./Header.css";
import { AiOutlineSearch } from "react-icons/ai";
import { Context as NameContext } from "../contexts/searchContext";

const Header = () => {
  const [value, setValue] = useState("");
  const {
    state: { name },
    findName,
  } = useContext(NameContext);
  return (
    <div className="header-container">
      <div className="title">
        <h3>DEVPOST</h3>
      </div>
      <div className="tabs">
        <div>Hackathons</div>
        <div>Projects</div>
        <div>Host a Hackathon</div>
      </div>
      <div className="searchBar">
        <div className="searchInputsCourse">
          <input
            type="text"
            className="header-search"
            placeholder="Search projects"
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
            backgroundColor: "#003e54",
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

export default Header;
