import React from "react";
import Messages from "./Messages";

const SelectedProfile = ({ selectedProfile }) =>
  selectedProfile ? (
    <div className="selected-profile">
      <h3>Now chatting with {selectedProfile.name}!</h3>
      <Messages profile={selectedProfile} />
    </div>
  ) : (
    <div className="selected-profile">
      <p>Pick on a user to begin chatting!</p>
    </div>
  );

export default SelectedProfile;
