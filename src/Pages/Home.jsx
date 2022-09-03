import React from 'react';
import '../App.css';
import HomeRiddle from '../Components/RiddleSection.jsx';
import TanyaOrAndySection from '../Components/TanyaOrAndySection.jsx';
import DrinkSection from '../Components/DrinkSection.jsx';

function Home() {
    //let tanyaOrAndyQAnswered = true;
    return(
        <div className="Home">
                <TanyaOrAndySection />
                <DrinkSection />
                <HomeRiddle />
      </div>
    );
};

export default Home;