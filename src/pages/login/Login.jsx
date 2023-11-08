import { Link } from "react-router-dom"
import "./login.css"

export default function Login() {
  return (
    <div className="page">
        
    <div className="login">
    <span className="logintitle">Login</span>
        <form className="loginform">
            <label>Email</label>
            <input type="text" placeholder="Enter your email" className="logininput"/>
            <label>Password</label>
            <input type="password" placeholder="Enter your Password" className="logininput" />
            <button className="loginbtn">Login</button>
        </form>
        <button className="loginregisterbtn">
          <Link className="link" to="/register">Register</Link>
        </button>
    </div>
    </div>
  )
}
