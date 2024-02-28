import { BrowserRouter as Link } from "react-router-dom";
import { users, posts } from "./home";

const UserDetails = () => (
  <div>
    <h2>List of users</h2>
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <Link to={`/user/${user.id}`}>{user.name}</Link>
        </li>
      ))}
    </ul>
  </div>
);


export default UserDetails;