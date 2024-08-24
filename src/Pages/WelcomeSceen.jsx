import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import '../styles/WelcomeScreen.css';

function WelcomeScreen(){

    const [startButton , setStartButton] = useState(false);
    const navigate = useNavigate();

    const startGame = () => {
        setStartButton(true);
        navigate('/home');
    }

    return(
        <div className="welcomeDiv">
            {startButton ? 
                null
                :
                <>
                    <div className="welcomeTextDiv">
                    <p>MIND MATCH</p>
                    </div>
                    <div className="secondartWelcomeText">
                        <p>Pokemon Edition</p>
                    </div>
                    <div className="buttonDiv">
                        <button onClick={startGame} className="startButton">Let&apos;s Play</button>
                    </div>
                </>
            }
        </div>
    )
}

export default WelcomeScreen;