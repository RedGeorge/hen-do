import '../App.css';
import Riddle3Riddle from '../Components/RiddleSection.jsx';
import TanyaOrAndySection from '../Components/TanyaOrAndySection.jsx';
import DrinkSection from '../Components/DrinkSection.jsx';

function Riddle3 (){
    return(
        <div className="Riddle3">
                <TanyaOrAndySection />
                <DrinkSection />
                <Riddle3Riddle />
      </div>
    );
};

export default Riddle3;