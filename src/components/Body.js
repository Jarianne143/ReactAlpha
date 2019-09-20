import React from "react"
import SideNavigationBar from "./sidebar/SideNavigationBar";  
import Dashboard from "./pagecontent/Dashboard"

const Body = () => {
  return (
      <div className="container-fluid">
          <div className="row">
              <div className="col-sm-12 col-lg-2 side_nav">
                  <SideNavigationBar />
              </div>
              <div className="col-sm-12 col-lg-10 no-x-p">
                  <Dashboard />
              </div>
          </div> 
      </div> 
  );
};

export default Body