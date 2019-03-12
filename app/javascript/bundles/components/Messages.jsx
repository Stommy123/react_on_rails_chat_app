import React, { Component } from "react";
import { isEqual } from "lodash";
import axios from "axios";

export default class Messages extends Component {
  constructor(props) {
    super(props);
    window.messages = this;
    this.state = { messages: [], message: String() };
  }

  componentDidMount() {
    this.fetchMessages();
  }
  shouldComponentUpdate(prevProps, prevState) {
    const { profile } = this.props;
    const { profile: prevProfile } = prevProps;
    const { messages, message } = this.state;
    const { messages: prevMessages, message: prevMessage } = prevState;
    return (
      profile.id !== prevProfile.id ||
      message !== prevMessage ||
      !isEqual(messages, prevMessages)
    );
  }
  componentDidUpdate() {
    const {
      profile: { id }
    } = this.props;
    this.fetchMessages(id);
  }
  fetchMessages = async id => {
    const { profile } = this.props;
    const profileId = id || profile.id;
    const { data: messages } = await axios.get(
      `/profiles/${profileId}/messages.json`
    );
    this.setState({ messages });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { profile } = this.props;
    const { message } = this.state;
    const { data } = axios.post(
      `/profiles/${profile.id}/messages.json`,
      { message: { content: message } },
      { headers: { "Content-Type": "application/json" } }
    );
    this.setState({ message: String() });
    this.fetchMessages();
  };

  handleMessageChange = e => this.setState({ message: e.target.value });

  render() {
    const { messages, message } = this.state;
    return (
      <div className="messagesContainer">
        <ul className="messages">
          {messages.map(message => (
            <div className="item" key={message.id}>
              {`${message.sender.name}:  `}
              {message.content}
            </div>
          ))}
        </ul>
        <div className="messages-form">
          <span
            id="channel"
            style={{ display: "hidden" }}
            data-channel="<%= @channel %>"
          />
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              id="message"
              value={message}
              onChange={this.handleMessageChange}
              placeholder="Type here..."
            />
            <input type="submit" value="Send!" />
          </form>
        </div>
      </div>
    );
  }
}
