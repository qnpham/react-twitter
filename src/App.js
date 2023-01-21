import "./App.css";
import { useState } from "react";
import Fyp from "./fyp.js";
import Following from "./following";

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

  function Footer(props) {
    return (
      <div className="footer-container">
        <i className="fa-solid fa-house-user"></i>
        <i className="fa-solid fa-magnifying-glass"></i>
        <i class="fa-solid fa-bell"></i>
        <i class="fa-solid fa-envelope"></i>
      </div>
    );
  }

  let headerButtons = null;
  let page = null;

  if (viewing === "fyp") {
    headerButtons = <HeaderPage page="fyp" />;
    page = <Fyp />;
  } else {
    headerButtons = <HeaderPage page="following" />;
    page = <Following />;
  }

  return (
    <div className="App">
      <div className="container">
        <header>{headerButtons}</header>
        <main>{page}</main>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
