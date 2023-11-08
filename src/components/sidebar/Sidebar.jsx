import "./sidebar.css"

export default function sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebaritem">
        <span className="sidebartitle">ABOUT ME</span>
        <img 
        className="sidebarimage"
        src="https://plus.unsplash.com/premium_photo-1690971631390-4f3fa92315f9?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmxvZyUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D" alt="" srcset="" />
      <p className="sidebarpara">Lorem ipsum dolor  facere sint obcaecati delectus architecto repudiandae fugiat dignissimos unde rem recusandae earum, labore, ea quas tempore.</p>
      </div>
      <div className="sidebaritem">
        <span className="sidebartitle">CATEGORIES</span>
        <ul className="sidebarlist">
          <li className="sidebarlistitem">life</li>
          <li className="sidebarlistitem">Music</li>
          <li className="sidebarlistitem">Styles</li>
          <li className="sidebarlistitem">Sports</li>
          <li className="sidebarlistitem">Tech</li>
          <li className="sidebarlistitem">Cinema</li>
        </ul>
      </div>
      <div className="sidebaritem">
        <span className="sidebartitle">FOLLOW US</span>
        <div className="sidebarsocial">
        <i className="sidebaricon fa-brands fa-square-facebook"></i>
        <i className="sidebaricon fa-brands fa-square-twitter"></i>
        <i className="sidebaricon fa-brands fa-square-pinterest"></i>
        <i className="sidebaricon fa-brands fa-square-instagram"></i>
        </div>
        </div>
      </div>
  )
}
