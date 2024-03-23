
import Reviews from './Reviews';
import whataboutbob from './whataboutbob.png'
/*imported reviews function from reviews component and imported movie image*/
export default function WhatAboutBob() {
    return (
        /*class of card with h4 for the movie title, image with height and width attributes,
        another div for the synopsis, then calling the reviews function, followed by my own 
        review*/
        <div className='card'>
            <h4>What About Bob?</h4>
            <img className="image" src={whataboutbob} width={120} height={175}/>
            <div>Come along for the vacation of a lifetime. Join therapist Dr. Leo Marvin as he is
                driven insane by his most neurotic patient, Bob.
            </div><br/>
            <Reviews />
            <div>Comedic gold. Bill Murray will babystep his way right into your heart.</div>
        </div>
    )
}
