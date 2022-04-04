import React, { useState, createContext, useEffect } from 'react';
import wordList from '../assets/wordList';

type GameState = {
    leftGuesses: string[][],
    rightGuesses: string[][],
    leftTileColor: string[][],
    rightTileColor: string[][],
    row: number,
    length: number,
    leftAnswer: string,
    rightAnswer: string,
    rightSolved: boolean,
    leftSolved: boolean,
    leftGreen: Set<string>,
    rightGreen: Set<string>,
    leftYellow: Set<string>,
    rightYellow: Set<string>,
    leftGrey: Set<string>,
    rightGrey: Set<string>,
}

type GameContext = {
    state: GameState,
    setter: React.Dispatch<React.SetStateAction<GameState>>
}

export const GameStateContext = createContext<GameContext>({} as GameContext);

export const GameStateProvider = ({ children }: any) => {
    // const [answers, setAnswers] = useState([
    //     wordList[Math.floor(Math.random()*wordList.length)], 
    //     wordList[Math.floor(Math.random()*wordList.length)]
    // ])
    // let answers = [wordList[Math.floor(Math.random()*wordList.length)], 
    //     wordList[Math.floor(Math.random()*wordList.length)]]

    const [gameState, setGameState] = useState({
        leftGuesses: [
            ['', '', '', '', ''],
            ['', '', '', '', ''],
            ['', '', '', '', ''],
            ['', '', '', '', ''],
            ['', '', '', '', ''],
            ['', '', '', '', '']
        ],
        rightGuesses: [
            ['', '', '', '', ''],
            ['', '', '', '', ''],
            ['', '', '', '', ''],
            ['', '', '', '', ''],
            ['', '', '', '', ''],
            ['', '', '', '', '']
        ],
        leftTileColor: [
            ['', '', '', '', ''],
            ['', '', '', '', ''],
            ['', '', '', '', ''],
            ['', '', '', '', ''],
            ['', '', '', '', ''],
            ['', '', '', '', '']
        ],
        rightTileColor: [
            ['', '', '', '', ''],
            ['', '', '', '', ''],
            ['', '', '', '', ''],
            ['', '', '', '', ''],
            ['', '', '', '', ''],
            ['', '', '', '', '']
        ],
        row: 0,
        length: 0,
        leftAnswer: '',
        rightAnswer: '',
        leftSolved: false,
        rightSolved: false,
        leftGreen: new Set<string>(),
        rightGreen: new Set<string>(),
        leftYellow: new Set<string>(),
        rightYellow: new Set<string>(),
        leftGrey: new Set<string>(),
        rightGrey: new Set<string>(),
    });

    useEffect(() => {
        let index1 = Math.floor(Math.random()*wordList.length);
        let index2 = Math.floor(Math.random()*wordList.length);
        while (index1 === index2) {
            index2 = Math.floor(Math.random()*wordList.length);
        }
        gameState.leftAnswer = wordList[index1];
        gameState.rightAnswer = wordList[index2];
        setGameState({...gameState})
    }, [])


    return (
        <GameStateContext.Provider value={{state: gameState, setter: setGameState}}>
            { children }
        </GameStateContext.Provider>
    )
}