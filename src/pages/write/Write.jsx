import "./write.css"

export default function Write() {
  return (
    <div className="page1">
    <div className="write">
        <img 
        className="writeimg"
        src="https://images.unsplash.com/photo-1676867902971-b9a618f6becf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D&w=1000&q=80" alt="" srcset="" />
       <form className="writeform">
        <div className="writeformgroup">
            <label htmlFor="fileinput">
            <i className="writeicon fa-solid fa-folder-plus"></i>
            </label>
            <input type="file" id="fileinput" style={{display:"none"}}/>
            <input type="text" placeholder="Title" className="writeinput" autoFocus={true} />
        </div>
        <div className="writeformgroup">
            <textarea placeholder="Add your story..." type="text" className="writetitle"></textarea>
        </div>
        <button className="writesubmit">Publish</button>
       </form>
        
        
        </div>
        </div>
  )
}
