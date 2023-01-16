import "./App.css";
import { useState } from "react";

function App() {
  const [viewing, setViewing] = useState("fyp");

  if (viewing === "fyp") {
    return (
      <div className="App">
        <div className="container">
          <header>
            <div className="top-header">
              <div className="logos column-full">
                <div className="pfp"></div>
              </div>
              <div className="fyp-container column-half">
                <h3
                  className="column-half text-center blue-underline"
                  onClick={() => {
                    setViewing("fyp");
                  }}
                >
                  For You
                </h3>
              </div>
              <div className="following-container column-half">
                <h3
                  className="column-half text-center"
                  onClick={() => {
                    setViewing("following");
                  }}
                >
                  Following
                </h3>
              </div>
            </div>
          </header>
        </div>
      </div>
    );
  } else {
    return (
      <div className="App">
        <div className="container">
          <header>
            <div className="top-header">
              <div className="logos column-full">
                <div className="pfp"></div>
              </div>
              <div className="fyp-container column-half">
                <h3
                  className="column-half text-center"
                  onClick={() => {
                    setViewing("fyp");
                  }}
                >
                  For You
                </h3>
              </div>
              <div className="following-container column-half">
                <h3
                  className="column-half text-center blue-underline"
                  onClick={() => {
                    setViewing("following");
                  }}
                >
                  Following
                </h3>
              </div>
            </div>
          </header>
        </div>
      </div>
    );
  }
}

export default App;
