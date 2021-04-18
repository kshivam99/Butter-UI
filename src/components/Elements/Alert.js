import React from 'react'

function Alert() {
    return (
<div className="element--body">
      <div className="element--heading">
        <h4>Avatar</h4>
      </div>
      <div className="element--content">
        <img
          class="avatar--img sm--avatar"
          src="https://cdn1.truelancer.com/upload-full/701651-vector-cartoon-portrait-avatar-illustration-fanart.jpg"
          alt=""
        />
        <img
          class="avatar--img md--avatar"
          src="https://www.seoclerk.com/pics/319222-1IvI0s1421931178.png"
          alt=""
        />
        <img
          class="avatar--img lg--avatar"
          src="https://img.etimg.com/thumb/width-400,height-300,msid-80496800,imgsize-/robert-downey-jr-launches-vc-fund-to-support-tech-that-will-address-environmental-challenges.jpg"
          alt=""
        />
      </div>
      <div className="element--code">
        <iframe
          title="avatar"
          align="left"
          src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=night-owl&wt=none&l=auto&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=0px&ph=0px&ln=false&fl=1&fm=Fira+Code&fs=14px&lh=152%25&si=false&es=2x&wm=false&code=%2520%253Cimg%250A%2520%2520class%253D%2522avatar--img%2520sm--avatar%2522%250A%2520%2520src%253D%2522%2522%250A%2520%2520alt%253D%2522%2522%250A%252F%253E%250A%253Cimg%250A%2520%2520class%253D%2522avatar--img%2520md--avatar%2522%250A%2520%2520src%253D%2522%2522%250A%2520%2520alt%253D%2522%2522%250A%252F%253E%250A%253Cimg%250A%2520%2520class%253D%2522avatar--img%2520lg--avatar%2522%250A%2520%2520src%253D%2522%2522%250A%2520%2520alt%253D%2522%2522%250A%252F%253E"
          style={{
            width: "75%",
            height: "24.5rem",
            left: "0",
            transform: "scale(1)",
            overflow: "hidden"
          }}
          sandbox="allow-scripts allow-same-origin"
        ></iframe>
      </div>
    </div>
    )
}

export default Alert
