import React, { useState, createContext, useEffect } from 'react';
import testList from '../assets/testList';

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
    leftSolved: boolean
}

type GameContext = {
    state: GameState,
    setter: React.Dispatch<React.SetStateAction<GameState>>
}

export const GameStateContext = createContext<GameContext>({} as GameContext);

export const GameStateProvider = ({ children }: any) => {
    let index1 = Math.floor(Math.random()*testList.length);
    let index2 = Math.floor(Math.random()*testList.length);
    while (index2 === index1) {
        index2 = Math.floor(Math.random()*testList.length);
    }

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
        rightAnswer: testList[index1],
        leftAnswer: testList[index2],
        rightSolved: false,
        leftSolved: false,
    });

    return (
        <GameStateContext.Provider value={{state: gameState, setter: setGameState}}>
            { children }
        </GameStateContext.Provider>
    )
}