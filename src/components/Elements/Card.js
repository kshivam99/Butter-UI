import React from "react";

function Card() {
  return (
    <div className="element--body">
      <div className="element--heading">
        <h4>Cards</h4>
      </div>
      <div
        className="element--content"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          rowGap: "1rem",
        }}
      >
        <div className="component-card1">
          <img src="https://i.ibb.co/cXjsdLX/puma.png" alt="" />
          <h3>Puma Shoes</h3>
          <h5>₹5110.00</h5>
          <button>Buy Now</button>
          <div className="product-bg"></div>
        </div>
        <div className="component-card2">
          <img
            src="https://www.thefashionisto.com/wp-content/uploads/2019/07/Male-Model-Suit-Tuxedo-Stylish-Handsome.jpg"
            alt=""
          />
          <div className="component-card2-desc">
            <div className="component-card2-top">
              <p>40% OFF</p>
            </div>
            <div className="component-card2-bottom">
              <h3>Black Tuxedo Suit</h3>
              <h5>Roadster</h5>
              <small>
                ₹19999{" "}
                <span>
                  <s>49999</s>
                </span>
              </small>
            </div>
          </div>
        </div>
        <div className="component-card3">
          <img
            src="https://i.pinimg.com/originals/09/79/d7/0979d7f2e9292c3f09c41d0f56a506c5.jpg"
            alt=""
          />
          <div className="component-card3-top">
            <h5>New</h5>
            <h3>Watch</h3>
            <p>The watch that suits your wardrobe</p>
          </div>
          <div className="component-card3-bottom">
            <button>₹10000</button>
          </div>
        </div>
        <div className="component-card4">
          <button className="component-card4-cancel">X</button>
          <img
            src="https://images-na.ssl-images-amazon.com/images/I/51QO4iATxCL._SL1088_.jpg"
            alt=""
          />
          <h3>Bean Bag</h3>
          <h5>Rs.1999</h5>
          <p>Only Few Left!!</p>
        </div>
        <div className="component-card5">
          <div className="component-card5-text">
            <h3>Yoga se Hoga</h3>
            <h2>Join Now</h2>
            <p>Get assisted from professional yoga instructors </p>
          </div>
          <button>swipe</button>
        </div>
        <div className="component-card6">
          <img
            src="https://miro.medium.com/max/1000/1*fsseXIPGEhwmg6kfgXyIjA.jpeg"
            alt=""
          />
          <h2>Learn MERN</h2>
          <p>
            Want to learn Web Dev but confused how to start? No need to worry
            again!
          </p>
          <button>Start</button>
        </div>
      </div>
      <div className="element--code">
        <iframe
          title="avatar"
          style={{
            marginTop: "2rem",
            width: "690px",
            height: "1600px",
            border: "0",
            transform: "scale(1)",
            overflow: "hidden",
          }}
          src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=seti&wt=none&l=htmlmixed&ds=true&dsyoff=0px&dsblur=0px&wc=true&wa=false&pv=30px&ph=59px&ln=false&fl=1&fm=Hack&fs=14px&lh=163%25&si=false&es=4x&wm=false&code=%253Cdiv%2520className%253D%2522component-card1%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%2520src%253D%2522https%253A%252F%252Fi.ibb.co%252FcXjsdLX%252Fpuma.png%2522%2520alt%253D%2522%2522%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ch3%253EPuma%2520Shoes%253C%252Fh3%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ch5%253E%25E2%2582%25B95110.00%253C%252Fh5%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%253EBuy%2520Now%253C%252Fbutton%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522product-bg%2522%253E%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522component-card2%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520src%253D%2522https%253A%252F%252Fwww.thefashionisto.com%252Fwp-content%252Fuploads%252F2019%252F07%252FMale-Model-Suit-Tuxedo-Stylish-Handsome.jpg%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520alt%253D%2522%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522component-card2-desc%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522component-card2-top%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%253E40%2525%2520OFF%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522component-card2-bottom%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ch3%253EBlack%2520Tuxedo%2520Suit%253C%252Fh3%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ch5%253ERoadster%253C%252Fh5%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Csmall%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%25E2%2582%25B919999%257B%2522%2520%2522%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cspan%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cs%253E49999%253C%252Fs%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fspan%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fsmall%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522component-card3%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520src%253D%2522https%253A%252F%252Fi.pinimg.com%252Foriginals%252F09%252F79%252Fd7%252F0979d7f2e9292c3f09c41d0f56a506c5.jpg%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520alt%253D%2522%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522component-card3-top%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ch5%253ENew%253C%252Fh5%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ch3%253EWatch%253C%252Fh3%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%253EThe%2520watch%2520that%2520suits%2520your%2520wardrobe%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522component-card3-bottom%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%253E%25E2%2582%25B910000%253C%252Fbutton%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522component-card4%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%2520className%253D%2522component-card4-cancel%2522%253EX%253C%252Fbutton%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520src%253D%2522https%253A%252F%252Fimages-na.ssl-images-%2520%2520amazon.com%252Fimages%252FI%252F51QO4iATxCL._SL1088_.jpg%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520alt%253D%2522%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ch3%253EBean%2520Bag%253C%252Fh3%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ch5%253ERs.1999%253C%252Fh5%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%253EOnly%2520Few%2520Left%21%21%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522component-card5%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522component-card5-text%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ch3%253EYoga%2520se%2520Hoga%253C%252Fh3%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ch2%253EJoin%2520Now%253C%252Fh2%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%253EGet%2520assisted%2520from%2520professional%2520yoga%2520instructors%2520%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A"
          sandbox="allow-scripts allow-same-origin"
        ></iframe>
      </div>
    </div>
  );
}

export default Card;
