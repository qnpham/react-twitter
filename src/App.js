import "./App.css";
import { useState } from "react";
import Fyp from "./fyp.js";

function App() {
  const [viewing, setViewing] = useState("fyp");

  function HeaderPage(props) {
    if (props.page === "fyp") {
      return (
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
      );
    } else {
      return (
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
      );
    }
  }

  let headerButtons = null;
  let page = null;

  if (viewing === "fyp") {
    headerButtons = <HeaderPage page="fyp" />;
    page = <Fyp />;
  } else {
    headerButtons = <HeaderPage page="following" />;
  }

  return (
    <div className="App">
      <div className="container">
        <header>{headerButtons}</header>
        <main>{page}</main>
      </div>
    </div>
  );
}

export default App;
