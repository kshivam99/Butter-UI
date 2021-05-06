import React from 'react'

function Import() {
    return (
        <div className="element--body">
        <div className="element--heading">
          <h4>Import it in your css file</h4>
        </div>
        <div className="element--content">
          
        </div>
        <div className="element--code">
        
        <iframe
          title="import"
          align="left"
          src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=seti&wt=none&l=auto&ds=true&dsyoff=0px&dsblur=0px&wc=true&wa=false&pv=30px&ph=59px&ln=false&fl=1&fm=Hack&fs=14px&lh=163%25&si=false&es=4x&wm=false&code=%2520%2540import%2520url%28%27*hosted%2520css%2520link*%27%29%253B"
          style={{
            width: "75%",
            height: "24.5rem",
            left: "0",
            border:"none",
            borderRadius: "1rem",
            transform: "scale(1)",
            overflow: "hidden"
          }}
          sandbox="allow-scripts allow-same-origin"
        ></iframe>
        </div>
      </div>
    )
}

export default Import
