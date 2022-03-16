import React, { useContext } from "react";
import './MainScreen.scss'
import { GuessesContext } from "../../contexts/GuessesContext";

const MainScreen = () => {

    const guesses = useContext(GuessesContext);

    return (
        <section className='top-length'>
            <div className='main'>
                <div className='container 1'>
                    <div>
                        {guesses[0].map(char => {return <div>{char}</div>})}
                    </div>
                    <div>
                        {guesses[1].map(char => {return <div>{char}</div>})}
                    </div>
                    <div>
                        {guesses[2].map(char => {return <div>{char}</div>})}
                    </div>
                    <div>
                        {guesses[3].map(char => {return <div>{char}</div>})}
                    </div>
                    <div>
                        {guesses[4].map(char => {return <div>{char}</div>})}
                    </div>
                    <div>
                        {guesses[5].map(char => {return <div>{char}</div>})}
                    </div>
                </div>

                <div className='container 2'>
                    <div>
                        {guesses[0].map(char => {return <div>{char}</div>})}
                    </div>
                    <div>
                        {guesses[1].map(char => {return <div>{char}</div>})}
                    </div>
                    <div>
                        {guesses[2].map(char => {return <div>{char}</div>})}
                    </div>
                    <div>
                        {guesses[3].map(char => {return <div>{char}</div>})}
                    </div>
                    <div>
                        {guesses[4].map(char => {return <div>{char}</div>})}
                    </div>
                    <div>
                        {guesses[5].map(char => {return <div>{char}</div>})}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MainScreen;