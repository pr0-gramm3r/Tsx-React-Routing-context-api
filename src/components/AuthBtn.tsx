import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { isAuthenticated, logoutUser } from "./utils/auth";

const AuthBtn = () => {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState<boolean>(isAuthenticated());

  // keep in sync if session changes in another tab
  useEffect(() => {
    function handleStorageChange() {
      setLoggedIn(isAuthenticated());
    }
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  function handleLogout() {
    logoutUser();
    setLoggedIn(false);
    navigate("/authLogin");
  }

  if (loggedIn) {
    return (
      <div className="auth" onClick={handleLogout}>
        <h3>
          Logout{" "}
          <i className="fas fa-sign-out-alt"></i>
        </h3>
      </div>
    );
  }

  return (
    <Link to="/authLogin" className="auth">
      <h3>
        Login <i className="fas fa-sign-in-alt"></i>
      </h3>
    </Link>
  );
};

export default AuthBtn;