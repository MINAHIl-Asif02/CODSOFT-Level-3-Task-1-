import './header.css'

export default function Header() {
  return (
    <div className='header'>

      <div className='headertitles'>
          <span className='headertitlesmall'>React & Node</span>
     <span className='headertitleslarge'>Blog</span>
      </div>
      <img 
      className='headerimg'
      src="https://images.unsplash.com/photo-1508898578281-774ac4893c0c?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGJhY2tncm91bmQlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D" alt="" srcset="" />
    </div>
  )
}

