//Code for TanyaOrAndy Section with buttons and true or false logic. Also need to set the state for tanyaOrAndyQAnswered to false initially and then true once answered as well as tanyaOrAndyQCorrect to true or false.
import React, { useContext } from 'react';
import '../App.css';
import { tanyaOrAndyContext } from '../Context';
import AndyFunny from '../Andy-Funny.jpg';
import TanyaFunny from '../Tanya-Funny.jpg';


export default function TanyaOrAndySection() {
    const {tanyaOrAndy, setTanyaOrAndy} = useContext(tanyaOrAndyContext)

    

    function tanyaSelected() {
        setTanyaOrAndy("tanya");
    };

    function andySelected() {
        setTanyaOrAndy("andy");
    }

    function printState() {
        console.log(tanyaOrAndy)
    }

    printState();

    function HomeQuestion() {
        return (
            <p className="tanyaOrAndyQuestion">
                Loren and Holly, this one's for you two! Which one do you think sleeps on the left side of the bed?
            </p>
        )
    }

    function Riddle2Question() {
        return (
            <p className="tanyaOrAndyQuestion">
                Adeena and Linda, this one's yours! Who said the words "I love you" first?
            </p>
        )
    }

    function Riddle3Question() {
        return (
            <p className="tanyaOrAndyQuestion">
                Pip and Charlotte, ready for your question?! Who asked the other to be their boyfriend/girlfriend?
            </p>
        )
    }

    
    
    function TanyaOrAndyQuestion () {
        if (window.location.pathname === "/") {
            return (
                <HomeQuestion />
            )
        } else if (window.location.pathname === "/Riddle2") {
            return (
                <Riddle2Question />
            )
        } else if (window.location.pathname === "/Riddle3") {
            return (
                <Riddle3Question />
            )
        }
    }

    TanyaOrAndyQuestion();

    return (
        
        <div className="TanyaOrAndy">
            <div className="TanyaOrAndyQuestion">
                <TanyaOrAndyQuestion />
            </div>
            <div className="TanyaOrAndyButtons">
                <span 
                    className="Tanya" 
                    onClick={tanyaSelected}>
                    <input 
                        type="radio" 
                        name="TanyaOrAndy" 
                        id="TanyaButton" 
                    />
                    <div id="TanyaButtonSection">
                        <label htmlFor="TanyaButton"><img className="TanyaImage" alt="Pic of Tanya" src={TanyaFunny}/><p id="TanyaButtonLabel">Tanya</p></label>
                    </div>
                </span>
                <span 
                    className="Andy"
                    onClick={andySelected}>
                    <input 
                    type="radio" 
                    name="TanyaOrAndy" 
                    id="AndyButton" 
                    />
                    <div id="AndyButtonSection">
                        <label htmlFor="AndyButton"><img className="AndyImage" alt="Pic of Andy" src={AndyFunny}/><p id="AndyButtonLabel">Andy</p></label>
                    </div>
                </span>
            </div>
            <span className="Neither">
                <input 
                        type="radio" 
                        name="TanyaOrAndy" 
                        id="NeitherSelected" 
                        defaultChecked
                    />
            </span> 
        </div>

        
    )
}

//if TanyaButton is clicked set tanyaOrAndyQCorrect to true/ false 
//if AndyButton is clicked set tanyaOrAndyQCorrect to true/ false 
// if either are clicked set tanyaOrAndyQAnswered to true


export function Riddle4Question() {
    const {tanyaOrAndy, setTanyaOrAndy} = useContext(tanyaOrAndyContext)

    return (
        <div>
            <p className="tanyaOrAndyQuestion">
                Tanya! Since it'd be a bit unfair to ask you a 'Tanya or Andy' question, the final question is a bit different for you! One of the Hens has a secret token- now guess which Hen it is! (And if you get it wrong, the forfeit is to be decided by the Hens!). Once you've found the token, click the button below to reveal the riddle for your final stop on this scavenger hunt!
            </p>
            <div className="FinalRiddleButton">
                <button onClick={() => setTanyaOrAndy('tanya')}>?</button>
            </div>
        </div>
    )
}


// Potential improvement code to be used to validate answers to riddles by adding input fields with predefined values
//
// function Riddle2QuestionAnswer() {
//     return (
//         <p className="tanyaOrAndyQuestion">
//             Adeena and Linda, this one's yours!
//         </p>
//     )
// }



// function Riddle3QuestionAnswer() {
//     return (
//         <p className="tanyaOrAndyQuestion">
//             Pip and Charlotte, ready for your question?!
//         </p>
//     )
// }



// function Riddle4QuestionAnswer() {
//     return (
//         <p className="tanyaOrAndyQuestion">
//             Tanya! Since it'd be a bit unfair to ask you a 'Tanya or Andy' question, the final question is a bit different for you! One of the Hens has a secret token- now guess which Hen it is!
//         </p>
//     )
// }
