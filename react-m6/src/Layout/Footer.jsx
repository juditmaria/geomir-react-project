import { useContext } from "react";
import { UserContext } from '../userContext';

export default function Footer() {
  let { authToken, setAuthToken } = useContext(UserContext);

  return (
    <>
      <div>
        <p>footer</p>
      </div>
    </>
  );
}
