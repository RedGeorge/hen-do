import React, { useState, useEffect } from 'react';
import '../App.css';
import AndyFunny from '../Andy-Funny.jpg';
import TanyaFunny from '../Tanya-Funny.jpg';

function Home(){

    useEffect( () => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch('/Home');
        const items = await data.json();
        setItems(items);
    };

    return(
        <div className="Home">
                <div className="TanyaOrAndy">
                    <p>Insert Tanya Or Andy Question Here</p>
                </div>
                <div className="TanyaOrAndyButtons">
                    <span className="Tanya">
                      <button className="TanyaButton">  
                        <img className="TanyaImage" alt="Pic of Tanya" src={TanyaFunny}/>
                        <p>Tanya</p></button>
                    </span>
                    <span className="Andy">
                        <button className="AndyButton"> 
                        <img className="AndyImage" alt="Pic of Andy" src={AndyFunny}/>
                        <p>Andy</p></button>
                    </span>
                </div>
      </div>
    );
};

export default Home;