import Reviews from "./Reviews";
import nightmare3 from "./nightmare3.png"
/*imported reviews function from reviews component and imported movie image*/
export default function Nightmare3() {
    return (
        /*class of card with h4 for the movie title, image with height and width attributes,
        another div for the synopsis, then calling the reviews function, followed by my own 
        review*/
        <div className='card'>
            <h4>A Nightmare on Elm Street 3: Dream Warriors</h4>
            <img className="image" src={nightmare3} width={120} height={175}/>
            <div>Freddy returns for round 3. A group of teenagers in a psych ward
                 learn to harness their powers in the dream world and team up to 
                 battle the iconic horror villain. Heather Langenkamp reprises her role as Nancy
                 Thompson to lead the troubled teens to victory.</div><br/>
            <Reviews />
            <div>By far the best of the Freddy franchise. Welcome to prime time.</div>
        </div>
        
    )
}