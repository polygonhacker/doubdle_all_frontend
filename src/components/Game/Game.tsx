import React, { useEffect, useRef } from "react";
import NavBar from '../NavBar/NavBar';
import MainScreen from '../MainScreen/MainScreen';
import KeyboardScreen from '../KeyboardScreen/KeyboardScreen';
import './Game.css'

const Game = () => {

    const gameDiv = useRef(document.createElement("div"));

    useEffect(() => {
        gameDiv.current.focus();
    }, []);
    
    const handleInput = (event: any) => {
        console.log(event.key.toUpperCase());
    }

    const handleTypedInput = (event: any) => {
        if ((/^[a-zA-Z]$/).test(event.key)) {
            handleInput(event);
        }
    }

    return (
        <div tabIndex={0} onKeyDown={event => handleTypedInput(event)} className='game' ref={gameDiv}>
            <NavBar />
            <MainScreen />
            <KeyboardScreen inputHandler={handleInput} />
        </div>
    )
}

export default Game;