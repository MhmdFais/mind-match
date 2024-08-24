import '../styles/Header.css';

function Header(){
    return(
        <div className="headerDiv">
            <div className="gameNameDiv">
                <p>MIND MATCH</p>
            </div>
            <div className="scoresDiv">
                <div className="currentScoreDiv scoreText">
                    <p className='text'>Score</p>
                    <p className='score'>0</p>
                </div>
                <div className="highScoreDiv scoreText">
                    <p className='text'>High Score</p>
                    <p className='score'>0</p>
                </div>
            </div>
        </div>
    )
}

export default Header;