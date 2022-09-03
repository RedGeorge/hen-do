//Code for showing which drinks will be ordered depending on whether TanyaOrAndyQCorrect is true or false.
import React, { useContext } from 'react';
import { tanyaOrAndyContext } from '../Context.js';
import '../App.css';

export default function DrinkSection () {
    
    function HomeDrink() {
    const {tanyaOrAndy, setTanyaOrAndy} = useContext(tanyaOrAndyContext);
    if (tanyaOrAndy == "andy") {
        return (
            <p className="DrinkCorrect">
                Correct, it's Andy! You two will be ordering Baby Guinness's when you've solved this riddle!
            </p>
    )} else if (tanyaOrAndy == "tanya") {
        return (
            <p className="DrinkIncorrect">No ma'am, prepare to order some tequilas when you've solved this riddle!</p>
        )
    }

}

function Riddle2Drink() {
    const {tanyaOrAndy, setTanyaOrAndy} = useContext(tanyaOrAndyContext);
    if (tanyaOrAndy == "tanya") {
        return (
            <p className="DrinkCorrect">
                Correct, it's Tanya. Aww the little sap. You two will be ordering Aperol Spritz's when you get to the next place!
            </p>
    )} else if (tanyaOrAndy== "andy") {
        return (
            <p className="DrinkIncorrect">That is cor-WRONG! Wwhen you arrive at the next place, it'll be time for some...... Mind Erasers! (Vodka, coffee liquer and soda water.)</p>
        )
    }
}

function Riddle3Drink() {
    const {tanyaOrAndy, setTanyaOrAndy} = useContext(tanyaOrAndyContext);
    if (tanyaOrAndy == "andy") {
        return (
            <p className="DrinkCorrect">
                Correct, it was Andy! So romantic! Fun fact, Tanya was the fourth person he'd asked to be his girlfriend that night! Just kidding, she was only the second! Anyway, you've earned yourselves some Passionfruit Martinis at the next stop!
            </p>
    )} else if (tanyaOrAndy == "tanya"){
        return (
            <p className="DrinkIncorrect">Boo, you whore(s). It was Andy! You ladies have just dropped yourselves in it, big time! When you get to the next stop, it's Negronis all around, barkeep! </p>
        )
    }
}
    
    if (window.location.pathname === "/") {
        return (
            <HomeDrink />
        )
    } else if (window.location.pathname === "/Riddle2") {
        return (
            <Riddle2Drink />
        )
    } else if (window.location.pathname === "/Riddle3") {
        return (
            <Riddle3Drink />
        )
    }
}

