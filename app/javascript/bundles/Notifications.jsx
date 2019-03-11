import React, { Component } from "react";
import axios from "axios";

export default class Notifications extends Component {
  state = {
    messages: this.props.messages,
    profiles: this.props.profiles
  };

  fetchNotifications = async _ => {
    const {
      data: { notifications: messages, profiles }
    } = await axios.get("/notifications.json");
    this.setState({ messages, profiles });
  };

  componentDidMount() {
    this.interval = setInterval(() => this.fetchNotifications(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { messages, profiles } = this.state;
    return (
      <div className="route">
        <a className="routeInfo" href="#" role="button" data-toggle="dropdown">
          {messages} Messages
        </a>
        <div>
          {profiles.map(({ id, name }) => (
            <a className="item" key={id} href={`/profiles/${id}/messages`}>
              From: {name}
            </a>
          ))}
        </div>
      </div>
    );
  }
}
