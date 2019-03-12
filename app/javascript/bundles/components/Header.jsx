import React, { Component } from "react";
import axios from "axios";

const handleLogout = () => {
  const link = document.createElement("a");
  link.setAttribute("href", "/users/sign_out");
  link.setAttribute("rel", "nofollow");
  link.setAttribute("data-method", "delete");
  document.body.appendChild(link);
  link.click();
};

class Header extends Component {
  state = { notifications: this.props.notifications };
  componentDidMount() {
    this.interval = setInterval(() => this.fetchNotifications(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  fetchNotifications = async _ => {
    const {
      data: { notifications }
    } = await axios.get("/notifications.json");
    this.setState({ notifications });
  };
  render() {
    const { notifications } = this.state;
    const { currentUser } = this.props;
    return (
      <div className="header">
        <table className="details">
          <tbody>
            <tr>
              <td>Hello, {currentUser.name}!</td>
            </tr>
            <hr />
            <tr>
              <td>You have {notifications} new notifications!</td>
            </tr>
            <hr />
            <tr onClick={handleLogout}>
              <td>
                <a>Sign out!</a>
              </td>
            </tr>
          </tbody>
        </table>
        <h1>Who would you like to chat with?</h1>
      </div>
    );
  }
}

export default Header;
