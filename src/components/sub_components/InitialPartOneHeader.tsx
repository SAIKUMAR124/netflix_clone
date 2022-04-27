import React from "react";
import "./InitialPartOneHeader.css";
import {SiNetflix} from "react-icons/si";

const InitialPartOneHeader = () => {
  return (
    <div className="InitialPartOneHeader">
      <div className="InitialNetflix-icon">
        <SiNetflix aria-label="Netflix Logo" />
      </div>
      <div className="InitialNetflix-btn"><button>Sign In</button></div>
    </div>
  );
};

export default InitialPartOneHeader;
