import React, { Component } from "react";
import axios from "axios";

export default class Messages extends Component {
  constructor() {
    super();
    window.messages = this;
    this.state = { messages: [], message: String() };
  }

  componentDidMount() {
    this.fetchMessages();
  }

  fetchMessages = async _ => {
    const { profile } = this.props;
    const { data: messages } = await axios.get(
      `/profiles/${profile.id}/messages.json`
    );
    this.setState({ messages, message: String() });
    axios.get(`/profiles/${profile.id}/messages.json`).then(response => {
      this.setState({ messages: response.data, message: "" });
    });
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
    console.log(data);
    this.fetchMessages();
  };

  handleMessageChange = e => {
    const message = e.target.value;
    this.setState({ message });
  };

  render() {
    const { messages, message } = this.state;
    return (
      <div className="messages">
        <div className="item">
          <div>
            <ul className="messageContainer">
              {messages.map(message => {
                return (
                  <div className="item" key={message.id}>
                    {`${message.sender.name}:  `}
                    {message.content}
                  </div>
                );
              })}
            </ul>
            <form className="form" onSubmit={this.handleSubmit}>
              <div className="formItem">
                <input
                  type="text"
                  id="message"
                  className="form-control"
                  value={message}
                  onChange={this.handleMessageChange}
                  placeholder="Type here..."
                />
                <div class="button">
                  <input type="submit" value="Send!" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
