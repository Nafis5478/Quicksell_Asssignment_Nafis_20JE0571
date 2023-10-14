import React from "react";
import { useSelector } from "react-redux";
import { BsReception4, BsPlusLg } from "react-icons/bs"; //BsReception4
import "../styles/Dashboard.css";
import Card from "../components/Card";
import logo from "../images/logo512.png"
const Dashboard = () => {
  const { dataSelected, user } = useSelector((state) => state.dataSelectSlice);

  return (
    dataSelected && (
      <div className="container" style={{ justifyContent: "space-evenly" }}>
        {dataSelected.map((element, index) => {
          return (
            <>
              <div
                key={index}
                className="dashboard"
                // style={{zIndex:"-1"}}
              >
                {/* <div style={{backgroundColor:"#204843"}}> */}

                
                <div className="cardHeading1">
                  <div
                    className="sideView1"
                    style={{ display: "flex", alignItems: "center", backgroundColor:"#204843" }}
                  >
                    {!user ? (
                      <BsReception4 style={{backgroundColor:"#204843"}}/>
                    ) : (
                      <>
                        <div className="image" style={{backgroundColor:"#204843"}}>
                          <img
                            src={logo}
                            alt="error"
                          />
                        </div>
                      </>
                    )}
                    <span style={{backgroundColor:"#204843"}}>
                      {element[index]?.title} {element[index]?.value?.length}
                    </span>
                  </div>
                  <div className="sideView2" style={{backgroundColor:"#204843"}}>
                    <BsPlusLg style={{backgroundColor:"#204843"}}/>
                    <span style={{ letterSpacing: "2px",backgroundColor:"#204843" }}>...</span>
                  </div>
                </div>
                <div className="selectList" >
                  {element[index]?.value?.map((element, ind) => {
                    return (
                      // <div >
                        <Card
                          id={element.id}
                          title={element.title}
                          tags={element.tag}
                          style={{backgroundColor:"blue"}}
                          />
                      // </div>
                    );
                  })}
                </div>
                </div>
              {/* </div> */}
            </>
          );
        })}
      </div>
    )
  );
};

export default Dashboard;
