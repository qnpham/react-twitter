import "./App.css";
import { useState } from "react";
import Fyp from "./fyp.js";
import Following from "./following";

function App() {
  const [viewing, setViewing] = useState("fyp");
  const [screenWidth, setScreenWidth] = useState(window.screen);
  window.addEventListener("resize", () => {
    setScreenWidth(window.screen.width);
  });
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
        <i className="fa-solid fa-bell"></i>
        <i className="fa-solid fa-envelope"></i>
      </div>
    );
  }

  function Sidebar(props) {
    return (
      <div className="side-container">
        <div className="side-buttons">
          <i className="fa-solid fa-house-user pointer"></i>
          <i className="fa-solid fa-magnifying-glass pointer"></i>
          <i className="fa-solid fa-bell pointer"></i>
          <i className="fa-solid fa-envelope pointer"></i>
          <i className="fa-solid fa-house-user pointer"></i>
          <i className="fa-solid fa-magnifying-glass pointer"></i>
          <i className="fa-solid fa-bell pointer"></i>
          <i className="fa-solid fa-envelope pointer"></i>
          <div className="sidetweet-btn pointer">+</div>
        </div>
        <div className="side-pfp-container">
          <div className="pfp"></div>
        </div>
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

  if (screenWidth < 500) {
    return (
      <div className="App">
        <div className="container">
          <header>{headerButtons}</header>
          <main>
            {page}
            <div className="plus-container">
              <span className="plus">+</span>
            </div>
          </main>
        </div>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  } else {
    return (
      <div className="App">
        <Sidebar />
        <div className="container">
          <header>
            <h2 className="home-text">Home</h2>
            {headerButtons}
          </header>
          <main>
            <div className="tweets-container">{page}</div>
          </main>
        </div>
      </div>
    );
  }
}

export default App;
