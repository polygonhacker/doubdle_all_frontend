import React, { useState, createContext } from 'react';

export const GuessesContext = createContext<String[][]>([[]]);

export const GuessesProvider = ({ children }: any) => {

    const [guesses, setGuesses] = useState<String[][]>([
        ['', '', '', '', ''],
        ['', '', '', '', ''],
        ['', '', '', '', ''],
        ['', '', '', '', ''],
        ['', '', '', '', ''],
        ['', '', '', '', '']
    ]);

    return (
        <GuessesContext.Provider value={guesses}>
            { children }
        </GuessesContext.Provider>
    )
}