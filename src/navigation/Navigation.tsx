import { BrowserRouter, Link, Route, Routes, useLocation } from "react-router-dom"
import Dashboard  from "../components/Dashboard"
import Activity   from "../components/Activity"
import Contact    from "../components/Contact"
import About      from "../components/About"
import AuthLogin  from "../components/AuthLogin"
import  { type FC } from "react"
import "../App.css"
import AuthSignup from "../components/AuthSignup"
import ProtectedRoute from "../routes/ProtectedRoute"

const App :FC = () => {

  const location = useLocation();
  const hideNavRoutes = ["/authLogin", "/authSignup"];
  const hideNav = hideNavRoutes.includes(location.pathname);

  return (
    <div className="container">
      {/* Navigation */}
      {!hideNav && (

        <nav>
        <h1><i className="fab fa-phoenix-framework"></i>Work Flow</h1>
        <Link to="/" >Dashboard</Link> 
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/activity">Activity</Link>
      </nav>
      )}

      {/* Routes */}
      <Routes>

        <Route path="/authLogin" element={<AuthLogin />} />
        <Route path="/authSignup" element={<AuthSignup />} />
        
        {/* Protected Routes */}
        <Route element={<ProtectedRoute />} >

          <Route path="/" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/activity" element={<Activity />} />
        </Route>
      </Routes>
    </div>
  )
}

const Navigation:FC = ()=>{
  return(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
}

export default Navigation
