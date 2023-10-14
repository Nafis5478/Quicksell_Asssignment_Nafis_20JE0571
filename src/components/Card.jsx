import React from "react";
import { BsExclamationSquareFill } from "react-icons/bs";
import "../styles/Card.css";
import logo from "../images/logo512.png"

const Card = ({ id, title, tags, status }) => {
  return (
    <div className="container">
      <div className="cardHeading2" style={{ justifyContent: "space-between" }}>
          {id}
        

        <div className="image">
          
          <img src={logo} alt="error" />

          {/* <div className="status"></div> */}
        </div>
      </div>

      <div className="title">
        {title}
      </div>

      <div className="tags">
        <div className="tag">
          <BsExclamationSquareFill style={{backgroundColor:"#204843"}}/>
          {/* <i className="fa-solid fa-exclamation " style={{backgroundColor:"black"}}></i> */}
        </div>
        {tags?.map((element, index) => {
          return (
            <div key={index} className="tag">
              {/* <span>●</span> */}
               {element}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
