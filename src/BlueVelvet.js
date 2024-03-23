import Reviews from "./Reviews";
import bluevelvet from "./bluevelvet.png"
/*imported reviews function from reviews component and imported movie image*/

export default function BlueVelvet() {
    return (
        /*class of card with h4 for the movie title, image with height and width attributes,
        another div for the synopsis, then calling the reviews function, followed by my own 
        review*/
        <div className='card'>
            <h4>Blue Velvet</h4>
            <img className="image" src={bluevelvet} width={120} height={175}/>
            <div>Dennis Hopper and Kyle MacLachlan star in this artistic thriller about a psychotic
                gang of criminals who've kidnapped a nightclub singer's child. The film takes place in 
                a seemingly sleepy town that's harboring some very dark secrets.
            </div><br/>
            <Reviews />
            <div>This movie is truly disturbing. David Lynch is a total weirdo.</div>
        </div>
    )
}