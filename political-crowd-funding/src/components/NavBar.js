import React from "react";
import { useAuth0 } from "./Auth0/Auth0";
import { Link } from 'react-router-dom';

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <div>
      {!isAuthenticated && (
        <button
          onClick={() =>
            loginWithRedirect({})
          }
        >
          Log in
        </button>
      )}

      {isAuthenticated && (
        <>
          <button onClick={() => logout()}>Log out</button>
          <span>
            <Link to="/home">Click here to enter</Link>
          </span>
        </>
      )}
    </div>
  );
};

export default NavBar;