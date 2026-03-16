import React from "react";
import "./dock.scss";

const Dock = ({windowsState, setWindowsState}) => {
  return (
    <footer className="dock">
      <div
        onClick={() => {
          setWindowsState((state) => ({...state, github: true}));
        }}
        className="icon github"
      >
        <img src="/doc-icons/github.png" alt="" />
      </div>

      <div
        onClick={() => {
          setWindowsState((state) => ({...state, notes: true}));
        }}
        className="icon note"
      >
        <img src="/doc-icons/notes.png" alt="" />
      </div>

      <div
        onClick={() => {
          setWindowsState((state) => ({...state, resume: true}));
        }}
        className="icon pdf"
      >
        <img src="/doc-icons/pdf.png" alt="" />
      </div>

      <div
        onClick={() => {
          window.open("https://calendar.google.com/", "_blank");
        }}
        className="icon calender"
      >
        <img src="/doc-icons/calender1.png" alt="" />
      </div>

      <div
        onClick={() => {
          setWindowsState((state) => ({...state, spotify: true}));
        }}
        className="icon spotify"
      >
        <img src="/doc-icons/spotify.png" alt="" />
      </div>

      <div
        onClick={() => {
          window.open("mailto:sarala@example.com", "_blank");
        }}
        className="icon mail"
      >
        <img src="/doc-icons/mail.png" alt="" />
      </div>

      <div
        onClick={() => {
          window.open("https://www.linkedin.com", "_blank");
        }}
        className="icon link"
      >
        <img src="/doc-icons/link.png" alt="" />
      </div>

      <div
        onClick={() => {
          setWindowsState((state) => ({...state, cli: true}));
        }}
        className="icon cli"
      >
        <img src="/doc-icons/cli.png" alt="" />
      </div>
    </footer>
  );
};

export default Dock;
