import React, { useContext } from "react";
import './MainScreen.scss'
import { GuessesContext } from "../../contexts/GuessesContext";

const MainScreen = () => {

    const guesses = useContext(GuessesContext);

    return (
        <section className='top-length'>
            <div className='main'>
                <div className='container 1'>
                    {guesses.map((arr, index) => {
                        return (
                            <div key={index} className={`row-${index}`}>
                                {arr.map((char, inner_index) => {
                                    return (
                                    <div key={inner_index} className={`tile-${index}-${inner_index}`}>{char}</div>
                                    )
                                })}
                            </div>
                        )
                    })}
                </div>

                <div className='container 2'>
                    {guesses.map((arr, index) => {
                        return (
                            <div key={index} className={`row-${index}`}>
                                {arr.map((char, inner_index) => {
                                    return (
                                    <div key={inner_index} className={`tile-${index}-${inner_index}`}>{char}</div>
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