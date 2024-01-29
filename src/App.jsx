import Logo from "./assets/logo.svg?react";
import IconDocument from "./assets/icon-document.svg?react";
import IconFolder from "./assets/icon-folder.svg?react";
import IconUpload from "./assets/icon-upload.svg?react";
import './App.scss'

function App() {

  return (
    <div className="fylo-wrapper">
      <div className="fylo">
        <Logo />
        <div className="icon-wrapper">
          <span><IconDocument /></span>
          <span><IconFolder /></span>
          <span><IconUpload /></span>
        </div>
      </div>
      <div className="storage">
        <p>You’ve used <span>815 GB</span> of your storage</p>
        <div className="gradient-bar-wrapper">
          <span className="gradient-bar" data-percent="81.5" style={{width: "81.5%"}}></span>
        </div>
        <div>
          <span>0 GB</span>
          <span>1000 GB</span>
        </div>
        <div className="pop">
          <span>185</span> GB Left
        </div>            
      </div>        
    </div>
  )
}

export default App
