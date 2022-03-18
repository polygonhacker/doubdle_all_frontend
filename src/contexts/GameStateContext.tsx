import React, { useState, createContext } from 'react';

export const GameStateContext = createContext({
    guesses: [
        ['', '', '', '', ''],
        ['', '', '', '', ''],
        ['', '', '', '', ''],
        ['', '', '', '', ''],
        ['', '', '', '', ''],
        ['', '', '', '', '']
    ],
    row: 0,
    length: 0
});

export const GameStateProvider = ({ children }: any) => {

    const [gameState, setGameState] = useState({
        guesses: [
            ['', '', '', '', ''],
            ['', '', '', '', ''],
            ['', '', '', '', ''],
            ['', '', '', '', ''],
            ['', '', '', '', ''],
            ['', '', '', '', '']
        ],
        row: 0,
        length: 0
    });

    return (
        <GameStateContext.Provider value={gameState}>
            { children }
        </GameStateContext.Provider>
    )
}