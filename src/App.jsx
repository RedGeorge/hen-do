import './App.css';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar.jsx';
/*import AndyFunny from './Andy-Funny.jpg';
import TanyaFunny from './Tanya-Funny.jpg';
*/
function App() {
  return (
    <div className="App">
      <Navbar />
      <p className="navbarWarning">
        Only use the navbar if the QR codes do not work! Don't cheat like a loser!
      </p>
      <header className="App-header">
        <p>
          Tanya & Her Bad Bitches' Scavenger Hunt
        </p>
      </header>

      <Outlet />      
    </div>
  );
}


export default App;

/* <div className="TanyaOrAndy">
        <p>Insert Tanya Or Andy Question Here</p>
      </div>
        <div className="TanyaOrAndyButtons">
        <span className="Tanya">
          <button className="TanyaButton">  </button>
            <img className="TanyaImage" alt="Pic of Tanya" src={TanyaFunny}/>
            <p>Tanya</p>
        </span>
        <span className="Andy">
          <button className="AndyButton"> </button>
            <img className="AndyImage" alt="Pic of Andy" src={AndyFunny}/>
            <p>Andy</p>
        </span>
      </div>

      <div className="CorrectOrIncorrect">
        <span className="Correct">
          <p>Correct, you'll be ordering a Pornstar Martini!</p>
        </span>
        <span className="Incorrect">
          <p>Incorrect, you'll be ordering 2 shots of Sambuca... each</p>
        </span>
      </div> */