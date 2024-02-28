import React from "react";
import { Link } from "react-router-dom";


const UserDetails = (props) => (
  <div>
    <h2>List of users</h2>
    <ul>
      {props.users.map((user) => (
        <li key={user.id}>
          <Link to={`/users/${user.id}`}>{user.name}</Link>
        </li>
      ))}
    </ul>
  </div>
);

export default UserDetails;