import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../userContext";

export default function Header() {
  let { authToken, setAuthToken } = useContext(UserContext);

  return (
    <>
      <div>
        
        <Link to="/places">Places</Link>
        <Link to="/posts">Posts</Link>
        <Link to="/about">About</Link>
      
        Token: <strong>{authToken}</strong>
      </div>
      <hr />
    </>
  );
}