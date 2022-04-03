import React, { useContext } from "react";
import { green, yellow, grey, lightGrey} from '../../assets/colors';
import { GameStateContext } from "../../contexts/GameStateContext";
import './KeyboardScreen.css';


let topRow = 'QWERTYUIOP'.split('');
let middleRow = 'ASDFGHJKL'.split('');
let bottomRow = ['ENTER'].concat('ZXCVBNM'.split(''), ['DELETE']);

const KeyboardScreen = ({inputHandler}: any) => {

    const gameState = useContext(GameStateContext).state

    return (
        <div className="keyboard-container">
            <div className="top-row">
                {topRow.map(char => <button key={char} 
                                            className={char}
                                            onClick={(e) => {
                                                inputHandler(char);
                                                e.currentTarget.blur();
                                            }}
                                            style={{background: `linear-gradient(90deg,
                                                                ${
                                                                    gameState.leftGreen.has(char) ? green :
                                                                    gameState.leftYellow.has(char) ? yellow :
                                                                    gameState.leftGrey.has(char) ? grey :
                                                                    lightGrey
                                                                } 50%, 
                                                                ${
                                                                    gameState.rightGreen.has(char) ? green :
                                                                    gameState.rightYellow.has(char) ? yellow :
                                                                    gameState.rightGrey.has(char) ? grey :
                                                                    lightGrey
                                                                } 50%)`}}>
                                                {char}
                                    </button>)}
            </div>
            <div className="middle-row">
                {middleRow.map(char => <button key={char} 
                                                className={char}
                                                onClick={(e) => {
                                                    inputHandler(char);
                                                    e.currentTarget.blur();
                                                }}
                                                style={{background: `linear-gradient(90deg,
                                                    ${
                                                        gameState.leftGreen.has(char) ? green :
                                                        gameState.leftYellow.has(char) ? yellow :
                                                        gameState.leftGrey.has(char) ? grey :
                                                        lightGrey
                                                    } 50%, 
                                                    ${
                                                        gameState.rightGreen.has(char) ? green :
                                                        gameState.rightYellow.has(char) ? yellow :
                                                        gameState.rightGrey.has(char) ? grey :
                                                        lightGrey
                                                    } 50%)`}}>{char}</button>)}
            </div>
            <div className="bottom-row">
                {bottomRow.map(char => <button key={char} 
                                                className={char}
                                                onClick={(e) => {
                                                    inputHandler(char);
                                                    e.currentTarget.blur();
                                                }}
                                                style={{background: `linear-gradient(90deg,
                                                    ${
                                                        gameState.leftGreen.has(char) ? green :
                                                        gameState.leftYellow.has(char) ? yellow :
                                                        gameState.leftGrey.has(char) ? grey :
                                                        lightGrey
                                                    } 50%, 
                                                    ${
                                                        gameState.rightGreen.has(char) ? green :
                                                        gameState.rightYellow.has(char) ? yellow :
                                                        gameState.rightGrey.has(char) ? grey :
                                                        lightGrey
                                                    } 50%)`}}>{char}</button>)}
            </div>
        </div>
    )
}

export default KeyboardScreen;