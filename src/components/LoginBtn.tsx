import { Link } from "react-router-dom";

const Login = () => {

  return (
    <Link to="/auth" className="auth">
      <h3>Login <i className="fas fa-sign-in-alt"></i></h3>
    </Link>
  )
}

export default Login
