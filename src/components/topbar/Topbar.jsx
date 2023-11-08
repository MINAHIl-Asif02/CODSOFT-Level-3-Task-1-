import { Link } from 'react-router-dom';
import './topbar.css'

export default function Topbar() {
  const user=true;
  return (
    <div className='top'>
        <div className='topleft'>
        <i className=" topicon fa-brands fa-square-facebook"></i>
        <i className="topicon fa-brands fa-square-twitter"></i>
        <i className="topicon fa-brands fa-square-pinterest"></i>
        <i className="topicon fa-brands fa-square-instagram"></i>
        </div>
        <div className='topcenter'>
            <ul className='toplist'>
              <li className='toplistitem'>
                <Link className='link' to="/">HOME</Link>
              </li>
              <li className='toplistitem'>
              <Link className='link' to="/">ABOUT</Link>
              </li>
              <li className='toplistitem'>
              <Link className='link' to="/">CONTACT</Link>
              </li>
              <li className='toplistitem'>
              <Link className='link' to="/write">WRITE</Link>

              </li>
              <li className='toplistitem'>
                {user&&"LOGOUT"}
              </li>
            </ul>
        </div>
        <div className='topright'>
          {
            user ?(
              <img 
            className='topimg'
            src="https://images.unsplash.com/photo-1523264766116-1e09b3145b84?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODN8fG1vZGVsfGVufDB8fDB8fHww" alt="" srcset="" />
            ):(
              <ul className='toplist'>
                <li className='toplistitem'>
              <Link className='link' to="/login">LOGIN</Link>
              </li>
              <li className='toplistitem'>
              <Link className='link' to="/register">REGISTER</Link>
              </li>
              </ul>
            )
          }
            
            <i className="topsearchicon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}
