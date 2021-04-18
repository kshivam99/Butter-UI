import React from "react";

function Alert() {
  return (
    <div className="element--body">
      <div className="element--heading">
        <h4>Alert</h4>
      </div>
      <div
        className="element--content"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <div className="component-alert1">
          <div className="alert-success">
            <p>Your Transaction has been Successfully Made!</p>
          </div>
        </div>
        <div className="component-alert2">
          <div className="alert-failure">
            <p>Something went wrong! Please try after some time!</p>
          </div>
        </div>
        <div className="component-alert3">
          <div className="alert-success-animate">
            <img
              src="https://www.freeiconspng.com/thumbs/success-icon/success-icon-10.png"
              alt=""
            />
            <div className="alert-success-animate-text">
              <h3>Success!</h3>
              <p>The process was successfull</p>
              <button>close</button>
            </div>
          </div>
        </div>
        <div className="component-alert4">
          <div className="alert-failure-animate">
            <img src="https://i.ibb.co/j3YhwW4/err.png" alt="" />
            <div className="alert-failure-animate-text">
              <h3>Oops!</h3>
              <p>Error occured</p>
              <button>close</button>
            </div>
          </div>
        </div>
      </div>
      <div className="element--code">
        <iframe
          title="avatar"
          align="left"
          src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=seti&wt=none&l=htmlmixed&ds=true&dsyoff=0px&dsblur=0px&wc=true&wa=false&pv=30px&ph=59px&ln=false&fl=1&fm=Hack&fs=14px&lh=163%25&si=false&es=4x&wm=false&code=%253Cdiv%2520className%253D%2522component-alert1%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522alert-success%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%253EYour%2520Transaction%2520has%2520been%2520Successfully%2520Made%21%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522component-alert2%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522alert-failure%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%253ESomething%2520went%2520wrong%21%2520Please%2520try%2520after%2520some%2520time%21%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522component-alert3%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522alert-success-animate%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520src%253D%2522https%253A%252F%252Fwww.freeiconspng.com%252Fthumbs%252Fsuccess-icon%252Fsuccess-icon10.png%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520alt%253D%2522%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522alert-success-animate-text%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ch3%253ESuccess%21%253C%252Fh3%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%253EThe%2520process%2520was%2520successfull%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%253Eclose%253C%252Fbutton%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522component-alert4%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522alert-failure-animate%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%2520src%253D%2522https%253A%252F%252Fi.ibb.co%252Fj3YhwW4%252Ferr.png%2522%2520alt%253D%2522%2522%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522alert-failure-animate-text%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ch3%253EOops%21%253C%252Fh3%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%253EError%2520occured%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%253Eclose%253C%252Fbutton%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E"
          style={{
            width: "690px",
            height: "1000px",
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

export default Alert;
