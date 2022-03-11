import React from "react";
import './KeyboardScreen.css'

let topRow = 'QWERTYUIOP'.split('');
let middleRow = 'ASDFGHJKL'.split('');
let bottomRow = ['ENTR'].concat('ZXCVBNM'.split(''), ['DEL']);

const KeyboardScreen = () => {


    return (
        <div className="keyboard-container">
            <div className="top-row">
                {topRow.map(char => <button key={char} className={char}>{char}</button>)}
            </div>
            <div className="middle-row">
                {middleRow.map(char => <button key={char} className={char}>{char}</button>)}
            </div>
            <div className="bottom-row">
                {bottomRow.map(char => <button key={char} className={char}>{char}</button>)}
            </div>
        </div>
    )
}

export default KeyboardScreen;