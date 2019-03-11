import React, { Component } from "react";
import axios from "axios";

export default class Profiles extends Component {
  state = { profiles: [] };
  componentDidMount() {
    this.fetchProfiles();
  }
  fetchProfiles = async _ => {
    const { data: profiles } = await axios.get("/profiles.json");
    this.setState({ profiles });
  };
  render() {
    const { profiles } = this.state;
    return (
      <div className="root">
        <div className="contentArea">
          <div className="settingHeader">Who would you like to chat with?</div>
          <div className="profiles">
            {profiles.map(profile => (
              <div className="item routeInfo" key={profile.id}>
                <a href={`/profiles/${profile.id}/messages`}>{profile.name}</a>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
