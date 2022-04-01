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

    // useEffect(() => {
    //     testList.forEach(value => {console.log(value);})
    // }, [])

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
        rightAnswer: testList[0],
        leftAnswer: testList[1],
        rightSolved: false,
        leftSolved: false,
    });

    return (
        <GameStateContext.Provider value={{state: gameState, setter: setGameState}}>
            { children }
        </GameStateContext.Provider>
    )
}