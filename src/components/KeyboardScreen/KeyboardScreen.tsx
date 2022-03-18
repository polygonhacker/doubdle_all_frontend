import React from "react";
import './KeyboardScreen.css'

let topRow = 'QWERTYUIOP'.split('');
let middleRow = 'ASDFGHJKL'.split('');
let bottomRow = ['ENTER'].concat('ZXCVBNM'.split(''), ['DELETE']);

const KeyboardScreen = ({inputHandler}: any) => {


    return (
        <div className="keyboard-container">
            <div className="top-row">
                {topRow.map(char => <button key={char} 
                                            className={char}
                                            onClick={() => {
                                                inputHandler(char);
                                            }}
                                            type='button'>
                                                {char}
                                    </button>)}
            </div>
            <div className="middle-row">
                {middleRow.map(char => <button key={char} 
                                                className={char}
                                                onClick={() => {
                                                    inputHandler(char);
                                                }}>{char}</button>)}
            </div>
            <div className="bottom-row">
                {bottomRow.map(char => <button key={char} 
                                                className={char}
                                                onClick={() => {
                                                    inputHandler(char);
                                                }}>{char}</button>)}
            </div>
        </div>
    )
}

export default KeyboardScreen;