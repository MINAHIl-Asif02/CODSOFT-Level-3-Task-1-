import "./register.css"
import { Link } from "react-router-dom"

export default function Register() {
  return (
    <div className="page">
        
    <div className="register">
    <span className="registertitle">Register</span>
        <form className="registerform">
        <label>Username</label>
            <input type="text" placeholder="Enter your Username..." className="registerinput"/>
            <label>Email</label>
            <input type="text" placeholder="Enter your email..." className="registerinput"/>
            <label>Password</label>
            <input type="password" placeholder="Enter your Password..." className="registerinput" />
            <button className="registerbtn">Register</button>
        </form>
        <button className="registerloginbtn">
        <Link className="link" to="/login">Login</Link>
        </button>
    </div>
    </div>
  )
}
