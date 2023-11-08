import "./setting.css"
import Sidebar from "../../components/sidebar/Sidebar"

export default function Setting() {
  return (
   <div className="page">

    <div className="setting">
        <div className="settingwrapper">
           <div className="settingtitle">
            <span className="settingupdatetitle">Update Your Account</span>
            <span className="settingdeletetitle">Delete Account</span>
           </div>
           <form className="settingform">
            <label >Profile Picture</label>
            
            <div className="settingprofilepic">
                <img src="https://images.unsplash.com/photo-1496483353456-90997957cf99?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fG1vdW50YWluJTIwbmF0dXJlJTIwcGljfGVufDB8fDB8fHww" alt="" srcset="" />
           <label htmlFor="fileinput">
           <i className="settingprofilepicicon fa-regular fa-circle-user"></i>
           </label>
           <input type="file" id="fileinput" style={{display:"none"}} />
            </div>
            <label>Username</label>
            <input type="text" placeholder="Minahil"/>
            <label>Email</label>
            <input type="email" placeholder="Minahilasif626@gmail.com"/>
            <label>Password</label>
            <input type="password" placeholder="***"/>
            <button className="settingsubmit">Update</button>
           </form>
        </div>
        <Sidebar/>
    </div>
    </div>
  )
}
