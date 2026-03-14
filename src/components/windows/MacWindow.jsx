import React from "react";
import {Rnd} from "react-rnd";
import "./macWindow.scss";

const MacWindow = ({children, width = "40vw", height = "60vh", windowName, setWindowsState}) => {
  const handleClose = () => {
    if (setWindowsState && windowName) {
      setWindowsState((state) => ({...state, [windowName]: false}));
    }
  };

  return (
    <Rnd
      default={{
        width: width,
        height: height,
        x: 200,
        y: 50,
      }}
    >
      <div className="window">
        <div className="nav">
          <div className="dots">
            <div onClick={handleClose} className="dot red"></div>
            <div className="dot yellow"></div>
            <div className="dot green"></div>
          </div>

          <div className="title">
            <p>Saralaratna - zsh</p>
          </div>
        </div>
        <div className="main-content">{children}</div>
      </div>
    </Rnd>
  );
};

export default MacWindow;
