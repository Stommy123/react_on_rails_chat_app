const Header = ({ currentUser, notifications }) => {
  const [state, setState] = useState({ notifications });
  let interval = useRef();
  const fetchNotifications = async _ => {
    const {
      data: { notifications }
    } = await axios.get("/notifications.json");
    console.log(notifications);
    setState({ ...state, notifications });
  };
  useEffect(
    _ => {
      setState({ ...state, notifications });
    },
    [state]
  );
  useEffect(_ => {
    interval = setInterval(() => fetchNotifications(), 1000);
    return _ => clearInterval(interval);
  }, []);
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
};

export default Header;
