import React from "react";

const Profiles = ({ profiles, selectProfile }) => (
  <div className="profiles">
    {profiles.map(profile => (
      <div
        onClick={_ => selectProfile(profile.id)}
        key={profile.id}
        className="profile"
      >
        <div className="profile-name">{profile.name}</div>
      </div>
    ))}
  </div>
);

export default Profiles;
