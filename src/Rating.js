import React, { useState } from "react";
import "./Rating.css"
/*imports usestate and css file for rating component*/
export default function Rating() {
  /*sets the state so the rating is at 0 starts when the app opens and none of the starts are
  hovered over/yellow*/
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    return (
      /*jsx for star rating. maps the array with index of 5 to make 5 stars. creates a button with
      a span of 5 stars. ternary operater that changes whether the stars are on or off (yellow or
        grey, at the index that is being hovered over or has already been clicked*/
      <div className="star-rating">
        {[...Array(5)].map((star, index) => {
          index += 1;
          return (
            <button
              type="button"
              key={index}
              className={index <= (hover || rating) ? "on" : "off"}
              onClick={() => setRating(index)}
              onMouseEnter={() => setHover(index)}
              onMouseLeave={() => setHover(rating)}
            >
              <span className="star">&#9733;</span>
            </button>
          );
        })}
      </div>
    );    
}
