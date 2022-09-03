import '../App.css';
import Riddle2Riddle from '../Components/RiddleSection.jsx';
import TanyaOrAndySection from '../Components/TanyaOrAndySection.jsx';
import DrinkSection from '../Components/DrinkSection.jsx';

function Riddle2 (){
    return(
        <div className="Riddle2">
                <TanyaOrAndySection />
                <DrinkSection />
                <Riddle2Riddle />
      </div>
    );
};

export default Riddle2;