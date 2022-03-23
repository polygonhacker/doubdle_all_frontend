import React, { useEffect, useRef, useContext } from "react";
import NavBar from '../NavBar/NavBar';
import MainScreen from '../MainScreen/MainScreen';
import KeyboardScreen from '../KeyboardScreen/KeyboardScreen';
import { GameStateContext } from "../../contexts/GameStateContext";
import './Game.css'

const Game = () => {

    const gameDiv = useRef(document.createElement("div"));
    const gameState = useContext(GameStateContext).state;
    const setGameState = useContext(GameStateContext).setter;

    useEffect(() => {
        gameDiv.current.focus();
    }, [gameState]);
    
    const handleInput = (input: string) => {
        if (gameState.row < 6) {
            if (input === 'BACKSPACE' || input === 'DELETE') {
                handleBackspace();
            } else if (input === 'ENTER') {
                if (gameState.length == 5) {
                    handleEnter();
                }
            } else if (gameState.length < 5) {
                gameState.guesses[gameState.row][gameState.length] = input;
                gameState.length++;
                setGameState({...gameState});
            }
        }
    }

    const handleBackspace = () => {
        if (gameState.length > 0) {
            gameState.guesses[gameState.row][gameState.length - 1] = '';
            gameState.length--;
            setGameState({...gameState});
        }
    }

    const handleEnter = () => {
        // console.log(gameState.guesses);
        // TODO: 
        // fetch data from server!!
        // reveal correct guesses via color change
        let leftGameAnswer = gameState.leftAnswer.toUpperCase();
        let rightGameAnswer = gameState.rightAnswer.toUpperCase();
        let currentGuess = gameState.guesses[gameState.row];
        
        for (let i=0; i<5; i++) {
            if (currentGuess[i] === leftGameAnswer[i]) {
                gameState.leftTileColor[gameState.row][i] = '#427a3c';
            } else if (leftGameAnswer.includes(currentGuess[i])) {
                gameState.leftTileColor[gameState.row][i] = '#b59e3c';
            } else {
                gameState.leftTileColor[gameState.row][i] = 'grey'
            }

            if (currentGuess[i] === rightGameAnswer[i]) {
                gameState.rightTileColor[gameState.row][i] = '#427a3c';
            } else if (rightGameAnswer.includes(currentGuess[i])) {
                gameState.rightTileColor[gameState.row][i] = '#b59e3c';
            } else {
                gameState.rightTileColor[gameState.row][i] = 'grey'
            }
        }
        if (gameState.leftTileColor[gameState.row].every((element) => {return element === '#427a3c'})) {
            gameState.leftSolved = true;
        }
        if (gameState.rightTileColor[gameState.row].every((element) => {return element === '#427a3c'})) {
            gameState.rightSolved = true;
        }
        
        gameState.row++;
        gameState.length = 0;
        setGameState({...gameState});

    }

    const handleTypedInput = (event: React.KeyboardEvent<HTMLDivElement>) => {
        if ((/^[a-zA-Z]$|^Enter$|^Backspace$/).test(event.key)) {
            handleInput(event.key.toUpperCase());
        }
    }

    return (
        <div  tabIndex={0} onKeyDown={event => handleTypedInput(event)} className='game' ref={gameDiv}>
            <NavBar />
            <MainScreen />
            <KeyboardScreen inputHandler={handleInput} />
        </div>
    )
}

export default Game;