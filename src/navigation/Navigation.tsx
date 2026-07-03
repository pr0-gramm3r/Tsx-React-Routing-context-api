import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import Dashboard  from "../components/Dashboard"
import Activity   from "../components/Activity"
import Contact    from "../components/Contact"
import About      from "../components/About"
import Auth       from "../components/Auth"
import  { type FC } from "react"
import "../App.css"

const Navigation :FC = () => {
  return (
    <div className="container">
      <BrowserRouter>
      {/* Navigation */}
      <nav>
        <h1><i className="fab fa-phoenix-framework"></i>Work Flow</h1>
        <Link to="/" >Dashboard</Link> 
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/activity">Activity</Link>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/activity" element={<Activity />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default Navigation
