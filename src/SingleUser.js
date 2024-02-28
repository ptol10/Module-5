import { users } from "./home";
import { useParams } from "react-router-dom";


const SingleUser = () => {
  const {id} = useParams();

  const user = users.find((obj) => obj.id.toString() === id);


  return (
<div>
      {user ? (
        <div>
          <h1>User Details:</h1>
          <p>ID: {user.id}</p>
          <p>Name: {user.name}</p>
          <p>Occupation: {user.occupation}</p>
        </div>
      ) : (
        <h1>User not found</h1>
      )}
    </div>
  );
}

export default SingleUser;