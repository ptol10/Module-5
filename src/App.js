import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { users, posts } from "./home";
import SingleUser from "./SingleUser";
import UserDetails from "./UserDetails";

function App() {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/users">User Details</Link>
        </li>

        {/* <li>
          <Link to="/posts">Post Details</Link>
        </li> */}
      </ul>
      <hr />

      <Routes>
        <Route path="/" exact Component={Home} />
        <Route path="/users" Component={UserDetails} />
        {/* <Route path="/posts/:id" Component={PostDetails} /> */}
        <Route path="/users/:id" Component={SingleUser} />
        {/* <Route path="/*" Component={NoUsers} /> */}
      </Routes>
    </Router>
  );
}

const Home = () => <h1>Welcome Home</h1>;


const NoUsers = () => <h2>No Users found.</h2>;

const PostDetails = () => <div></div>;

const NoPosts = () => <h2>No Posts found for current user.</h2>;

export default App;
