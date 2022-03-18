import React, { useState, createContext } from 'react';

type GameState = {
    guesses: string[][],
    row: number,
    length: number
}

type GameContext = {
    state: GameState,
    setter: React.Dispatch<React.SetStateAction<GameState>>
}

export const GameStateContext = createContext<GameContext>({} as GameContext);

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
        <GameStateContext.Provider value={{state: gameState, setter: setGameState}}>
            { children }
        </GameStateContext.Provider>
    )
}