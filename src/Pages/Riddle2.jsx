import '../App.css';
import AndyFunny from '../Andy-Funny.jpg';
import TanyaFunny from '../Tanya-Funny.jpg';

function Riddle2 (){
    return(
        <div className="App">
            <body>
                <h1>This is Riddle2 Page!</h1>
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
            </body>

      </div>
    );
};

export default Riddle2;