import React from "react";
import "./App.css";
import cards from "./data";
import CardBack from "./images/CardBack.jpg";

function App() {
  return (
    <div className="App border my-5">
      <div className="container">
        <div className="row">
          {/* 1 */}
          <div className="col-3 my-1">
            {/* 2 */}
            <img
              className="mx-auto"
              src={CardBack}
              //   used percentages instead of pixels to be responsive with the screen size
              height="100%"
              width="100%"
              key="back"
            />
            {}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
 