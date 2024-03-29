import React, { useContext, useEffect } from "react";
import './MainScreen.scss'
import { GameStateContext } from "../../contexts/GameStateContext";

const MainScreen = () => {

    const gameState = useContext(GameStateContext).state;

    return (
        <section className='top-length'>
            <div className='main'>
                <div className='container 1'>
                    {gameState.leftGuesses.map((arr, index) => {
                        return (
                            <div key={index} className={`row-${index}`}>
                                {arr.map((char, inner_index) => {
                                    return (
                                    <div key={inner_index} 
                                        className={`tile-${index}-${inner_index}`}
                                        style={{backgroundColor: gameState.leftTileColor[index][inner_index],
                                                border: `calc(1px + 0.2vw) solid ${gameState.leftTileColor[index][inner_index] == '' ? 'grey' : gameState.leftTileColor[index][inner_index]}`}}>
                                            {char}
                                    </div>
                                    )
                                })}
                            </div>
                        )
                    })}
                </div>

                <div className='container 2'>
                    {gameState.rightGuesses.map((arr, index) => {
                        return (
                            <div key={index} className={`row-${index}`}>
                                {arr.map((char, inner_index) => {
                                    return (
                                        <div key={inner_index} 
                                            className={`tile-${index}-${inner_index}`}
                                            style={{backgroundColor: gameState.rightTileColor[index][inner_index],
                                                    border: `calc(1px + 0.2vw) solid ${gameState.rightTileColor[index][inner_index] == '' ? 'grey' : gameState.rightTileColor[index][inner_index]}`}}>
                                                {char}
                                        </div>
                                    )
                                })}
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default MainScreen;