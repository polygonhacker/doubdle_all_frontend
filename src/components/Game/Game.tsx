import React, { useEffect, useRef, useContext } from "react";
import NavBar from '../NavBar/NavBar';
import MainScreen from '../MainScreen/MainScreen';
import KeyboardScreen from '../KeyboardScreen/KeyboardScreen';
import { GameStateContext } from "../../contexts/GameStateContext";
import wordSet from "../../assets/wordSet";
import { green, yellow, grey } from '../../assets/colors'
import { HelpModalContext } from "../../contexts/helpModalContext";
import HelpModal from "../HelpModal/HelpModal";
import './Game.css'

const Game = () => {

    const gameDiv = useRef(document.createElement("div"));
    const gameState = useContext(GameStateContext).state;
    const setGameState = useContext(GameStateContext).setter;

    const helpModal = useContext(HelpModalContext).helpModal;

    useEffect(() => {
        gameDiv.current.focus();
        if (gameState.leftSolved && gameState.rightSolved) {
            alert('congratulations!');
        } else if (gameState.row === 6) {
            alert('better luck next time');
        }
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
                if (!gameState.leftSolved) {
                    gameState.leftGuesses[gameState.row][gameState.length] = input;
                }
                if (!gameState.rightSolved) {
                    gameState.rightGuesses[gameState.row][gameState.length] = input;
                }
                gameState.length++;
                setGameState({...gameState});
            }
        }
    }

    const handleBackspace = () => {
        if (gameState.length > 0) {
            if (!gameState.leftSolved) {
                gameState.leftGuesses[gameState.row][gameState.length - 1] = '';
            }
            if (!gameState.rightSolved) {
                gameState.rightGuesses[gameState.row][gameState.length - 1] = '';
            }
            gameState.length--;
            setGameState({...gameState});
        }
    }

    const handleEnter = () => {
        let leftGameAnswer = gameState.leftAnswer.toUpperCase();
        let rightGameAnswer = gameState.rightAnswer.toUpperCase();
        let currentLeftGuess = gameState.leftGuesses[gameState.row];
        let currentRightGuess = gameState.rightGuesses[gameState.row];

        let word = currentLeftGuess.join('').toLowerCase();
        if (word === '') {
            word = currentRightGuess.join('').toLowerCase();
        }
        if (!wordSet.has(word)) {
            alert('word not valid')
            return;
        }
        
        for (let i=0; i<5; i++) {
            if (!gameState.leftSolved) {
                if (currentLeftGuess[i] === leftGameAnswer[i]) {
                    gameState.leftTileColor[gameState.row][i] = green;
                    gameState.leftGreen.add(currentLeftGuess[i]);
                } else if (leftGameAnswer.includes(currentLeftGuess[i])) {
                    gameState.leftTileColor[gameState.row][i] = yellow;
                    gameState.leftYellow.add(currentLeftGuess[i]);
                } else {
                    gameState.leftTileColor[gameState.row][i] = grey;
                    gameState.leftGrey.add(currentLeftGuess[i]);
                }
            }

            if (!gameState.rightSolved) {
                if (currentRightGuess[i] === rightGameAnswer[i]) {
                    gameState.rightTileColor[gameState.row][i] = green;
                    gameState.rightGreen.add(currentLeftGuess[i]);
                } else if (rightGameAnswer.includes(currentRightGuess[i])) {
                    gameState.rightTileColor[gameState.row][i] = yellow;
                    gameState.rightYellow.add(currentLeftGuess[i]);
                } else {
                    gameState.rightTileColor[gameState.row][i] = grey;
                    gameState.rightGrey.add(currentLeftGuess[i]);
                }
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
        <>
            <div tabIndex={0} onKeyDown={event => handleTypedInput(event)} className='game' ref={gameDiv}>
                <NavBar />
                <MainScreen />
                <KeyboardScreen inputHandler={handleInput} />
            </div>
            {helpModal && <HelpModal />}
        </>
    )
}

export default Game;