import React from "react";
import MacWindow from "./MacWindow";
import "./spotify.scss";
export default function Spotify({windowName, setWindowsState}) {
  return (
    <MacWindow windowName={windowName} setWindowsState={setWindowsState}>
      <div className="spotify-window">
        <iframe
          data-testid="embed-iframe"
          style={{borderRadius: "12px"}}
          src="https://open.spotify.com/embed/playlist/6N70nOlQc3lWw7xdRJaqEs?utm_source=generator"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
    </MacWindow>
  );
}
