import '../styles/Header.css';
import PropTypes from 'prop-types';

function Header({score, highScore}) {
    return(
        <div className="headerDiv">
            <div className="gameNameDiv">
                <p>MIND MATCH</p>
            </div>
            <div className="scoresDiv">
                <div className="currentScoreDiv scoreText">
                    <p className='text'>Score</p>
                    <p className='score'>{score}</p>
                </div>
                <div className="highScoreDiv scoreText">
                    <p className='text'>High Score</p>
                    <p className='score'>{highScore}</p>
                </div>
            </div>
        </div>
    )
}

export default Header;

Header.propTypes = {
    score: PropTypes.number.isRequired,
    highScore: PropTypes.number.isRequired
}

