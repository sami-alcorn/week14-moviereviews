/*imported usestate and rating function from rating component*/
import React, { useState } from 'react';
import Rating from './Rating';

export default function Reviews() {
    /*sets the state for the review input form and the reviews array*/
    const [reviewValue, setReviewValue] = useState("");
    const [reviewsList, setReviews] = useState([]);
    /*function for submit button with prevent default to keep it from refreshing the page*/
    const handleSubmit = (event) => {
        event.preventDefault()
        /*checking to see if input value is an empty string and if not, update the state
        to push the review input to the array of reviews, then the review value is set to 
        an empty string to clear the input*/
        if (reviewValue.trim() !== '') { 
            setReviews([...reviewsList, reviewValue])
            setReviewValue('')
        }
    }
     /*returns the jsx for the form. form has input and submit botton. then calls the rating
     functions from rating component. the div also holds the reviews, map method used to create
     a new div for each review submitted*/  
    return (
        <div>
            <form onSubmit={handleSubmit}>
            <h6>Rate and review this movie.</h6>
                <input type="text" value={reviewValue} onChange={(event) => setReviewValue(event.target.value)} />
                <button type="submit" className="btn btn-primary btn-sm">Submit</button>
                <Rating />
            </form>
            <h4>Reviews:</h4>
                {reviewsList.map((review) => (
                    <div> {review} </div>
                ))}
        </div>
    )
}