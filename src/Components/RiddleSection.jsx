import React, { useContext } from 'react';
import { tanyaOrAndyContext } from '../Context.js';
import '../App.css';

export default function RiddleSection () {
    if (window.location.pathname === "/") {
        return (
            <HomeRiddle />
        )
    } else if (window.location.pathname === "/Riddle2") {
        return (
            <Riddle2Riddle />
        )
    } else if (window.location.pathname === "/Riddle3") {
        return (
            <Riddle3Riddle />
        )
    } else if (window.location.pathname === "/Riddle4") {
        return (
            <Riddle4Riddle />
        )
    }
}



export function HomeRiddle() {
    const {tanyaOrAndy, setTanyaOrAndy} = useContext(tanyaOrAndyContext);
    if (tanyaOrAndy !== "neither") {
        return (
            <h2 className="riddleQuestion">
                If this hunt was a body, you're starting at the top, and this animal's nose, looks a bit like a cock.
            </h2>
    )} else {
        return (
            <h2 className="riddleRevealInstruction">Answer the Tanya or Andy question to reveal your first riddle and the drink to be ordered by Loren and Holly!</h2>
        )
    }

}

export function Riddle2Riddle() {
    const {tanyaOrAndy, setTanyaOrAndy} = useContext(tanyaOrAndyContext);
    if (tanyaOrAndy !== "neither") {
        return (
            <h2 className="riddleQuestion">
                Now the alcohol is creeping through your veins, like an animal stalked by a Bird of Prey, the name of the next place is also the position in which Tanya will be ending her wedding day.
            </h2>
        )} else {
        return (
            <h2 className="riddleRevealInstruction">Answer the Tanya or Andy question to reveal your first riddle and the drink to be ordered by Adeena and Linda!</h2>
        
        )
    }
}

export function Riddle3Riddle() {
    const {tanyaOrAndy, setTanyaOrAndy} = useContext(tanyaOrAndyContext);
    if (tanyaOrAndy !== "neither") {
        return (
            <h2 className="riddleQuestion">
                They say to cure a hangover, the hair of the dog is the way to go. But this canine is so far from pretty, you'd be surprised they made it into a show.
            </h2>
        )} else {
        return (
            <h2 className="riddleRevealInstruction">Answer the Tanya or Andy question to reveal your first riddle and the drink to be ordered by Pip and Charlotte!</h2>
        
        )
    }
}


export function Riddle4Riddle() {
    const {tanyaOrAndy, setTanyaOrAndy} = useContext(tanyaOrAndyContext);
    if (tanyaOrAndy !== "neither") {
        return (
            <h2 className="riddleQuestion">
                You're nearing the end of this journey, though short, hopefully it was sweet. This final destination is more sugar than booze, and you're really in for a "_____(z)"!
            </h2>
        )}
    }
