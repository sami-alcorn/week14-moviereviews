import BlueVelvet from './BlueVelvet'
import Nightmare3 from './Nightmare3'
import WhatAboutBob from './WhatAboutBob'
/*imported funtions for each movie from their respective components
and used them in jsx for movielist function*/

export default function MovieList() {
    return (
        <div id="movie-list-div">
        <BlueVelvet />
        <Nightmare3 />
        <WhatAboutBob />
        </div>
    )
}
