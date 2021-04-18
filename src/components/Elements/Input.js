import React from "react";

function Input() {
  return (
    <div className="element--body">
      <div className="element--heading">
        <h4>Input</h4>
      </div>
      <div className="element--content">
        <div className="formInput">
          <input
            type="text"
            autoComplete="off"
            required
          />
          <label for="name" className="labelName">
            <span className="contentName">Write Label Here</span>
          </label>
        </div>
      </div>
      <div className="element--code">
        <iframe
          title="avatar"
          align="left"
          src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=seti&wt=none&l=auto&ds=true&dsyoff=0px&dsblur=0px&wc=true&wa=false&pv=30px&ph=59px&ln=false&fl=1&fm=Hack&fs=14px&lh=163%25&si=false&es=4x&wm=false&code=%2520%253Cdiv%2520className%253D%2522formInput%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cinput%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520type%253D%2522text%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520autoComplete%253D%2522off%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520required%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Clabel%2520for%253D%2522name%2522%2520className%253D%2522labelName%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cspan%2520className%253D%2522contentName%2522%253EWrite%2520Label%2520Here%253C%252Fspan%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Flabel%253E%250A%2520%253C%252Fdiv%253E"
          style={{
            width: "690px",
            height: "400px",
            border: "0",
            transform: "scale(1)",
            overflow: "hidden",
          }}
          sandbox="allow-scripts allow-same-origin"
        ></iframe>
      </div>
    </div>
  );
}

export default Input;
