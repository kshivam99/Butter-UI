import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BiRupee } from "react-icons/bi";
const rating = 4;

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
        <div className="card1--body">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaeuGc4S4MfhkETfBXad8cNk8E7quuEtynMw&usqp=CAU"
            alt=""
          />
          <div className="badge">fast delivery</div>
          <div className="rating--row">
            {[...Array(rating)].map((i) => (
              <AiFillStar color={"#D97706"} size={24} />
            ))}
          </div>
          <div className="card--details">
            <h4>Lowe Alpine Edge II 22 Ltr Backpack - Matrix 8</h4>
            <div className="price--row">
              <h5 className="new__price">
                <BiRupee />
                10000
              </h5>
              <h5 className="old__price">
                <BiRupee />
                12000
              </h5>
            </div>
            <h5 className="offer">16% OFF</h5>
          </div>
        </div>

        <div className="card1--body">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaeuGc4S4MfhkETfBXad8cNk8E7quuEtynMw&usqp=CAU"
            alt=""
          />
          <div className="badge">fast delivery</div>
          <div className="rating--row">
            {[...Array(rating)].map((i) => (
              <AiFillStar color={"#D97706"} size={24} />
            ))}
          </div>
          <div className="card--details">
            <h4>Lowe Alpine Edge II 22 Ltr Backpack - Matrix 8</h4>
            <div className="price--row">
              <h5 className="new__price">
                <BiRupee />
                10000
              </h5>
              <h5 className="old__price">
                <BiRupee />
                12000
              </h5>
            </div>
            <h5 className="offer">16% OFF</h5>
          </div>
          <div className="overlay">
            <h2>Out of Stock</h2>
          </div>
        </div>

        <div className="card1--body">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaeuGc4S4MfhkETfBXad8cNk8E7quuEtynMw&usqp=CAU"
            alt=""
          />
          <div className="badge">fast delivery</div>
          <div className="rating--row">
            <p>No ratings yet</p>
          </div>
          <div className="card--details">
            <h4>Lowe Alpine Edge II 22 Ltr Backpack - Matrix 8</h4>
            <div className="price--row">
              <h5 className="new__price">
                <BiRupee />
                10000
              </h5>
              <h5 className="old__price">
                <BiRupee />
                12000
              </h5>
            </div>
            <h5 className="offer">16% OFF</h5>
          </div>
        </div>
      </div>

      <div className="element--content">
        <div className="card2--body">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaeuGc4S4MfhkETfBXad8cNk8E7quuEtynMw&usqp=CAU"
            alt=""
          />
          <div className="card--details">
            <div className="rating--row">
              {[...Array(rating)].map((i) => (
                <AiFillStar color={"#D97706"} size={24} />
              ))}
            </div>
            <h4>Lowe Alpine Edge II 22 Ltr Backpack - Matrix 8</h4>
            <h5 className="new__price">
              <BiRupee />
              10000
            </h5>
            <h5 className="old__price">
              <BiRupee />
              12000
            </h5>
            <h5 className="offer">16% OFF</h5>
          <div className="btn--row">
            <button className="btn--primary btn-md">Add to cart</button>
            <button className="btn--outline">Remove from wishlist</button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
