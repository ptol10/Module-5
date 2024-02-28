import { users, posts } from "./home";

const SingleUser = () => {
  return (
    <div>
      <h1>User Details:</h1>
      <p>ID: {users.id}</p>
      <p>Name: {users.name}</p>
      <p>Occupation: {users.occupation}</p>
    </div>
  );
};

export default SingleUser;