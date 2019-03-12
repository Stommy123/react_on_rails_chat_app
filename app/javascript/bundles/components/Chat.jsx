import React, { useState } from "react";
import Header from "./Header";
import Profiles from "./Profiles";
import SelectedProfile from "./SelectedProfile";

const Chat = ({ current_user, notifications, profiles }) => {
  const [selectedProfileId, setSelectedProfileId] = useState(-1);
  const selectProfile = id => setSelectedProfileId(id);
  const selectedProfile = profiles.find(p => p.id === selectedProfileId);
  return (
    <div className="chatroom">
      <Header currentUser={current_user} notifications={notifications} />
      <Profiles profiles={profiles} selectProfile={selectProfile} />
      <SelectedProfile selectedProfile={selectedProfile} />
    </div>
  );
};

export default Chat;
