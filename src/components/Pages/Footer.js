import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row1">
          {/* Column1 */}
          <div className="col1">
            <h2>Services</h2><br/>
            <h1 className="list-unstyled">
              {/* <li>Add Content Here</li>
              <li>Add Content Here</li>
              <li>Add Content Here</li> */}
            </h1>
          </div>
          {/* Column2 */}
          <div className="col1">
            <h2>Industries</h2><br/>
            <ui className="list-unstyled">
              {/* <li>Add Content Here</li>
              <li>Add Content Here</li>
              <li>Add Content Here</li> */}
            </ui>
          </div>
          {/* Column3 */}
          <div className="col1">
            <h2>Resources</h2><br/>
            <ui className="list-unstyled">
              {/* <li>Add Content Here</li>
              <li>Add Content Here</li>
              <li>Add Content Here</li> */}
            </ui>
          </div>

          
          <div className="col1">
            <h2>Products</h2><br/>
            <ui className="list-unstyled">
              {/* <li>Add Content Here</li>
              <li>Add Content Here</li>
              <li>Add Content Here</li> */}
            </ui>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col1-sm">
            {/* &copy;{new Date().getFullYear()} EmbeddedVision | All rights reserved |
            Terms Of Service | Privacy */}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;