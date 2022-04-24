import React, { useContext } from "react";
import ReactDOM from 'react-dom';
import { HelpModalContext } from "../../contexts/helpModalContext";
import { ReactComponent as Close } from '../../assets/remove.svg';
import { green, yellow, grey } from '../../assets/colors';
import './HelpModal.css';



const HelpModal = () => {

    const helpModal = useContext(HelpModalContext).helpModal;
    const setHelpModal = useContext(HelpModalContext).setHelpModal

    const portal = document.getElementById('portal') as HTMLElement;

    return ReactDOM.createPortal(
        <>
            <div className="modal-container">
                <div className="help-header">
                    <p>How to play</p>
                    <Close className="close-button" onClick={() => {setHelpModal(!helpModal)}} />
                </div>
                
                <p>
                    <br/>
                    Try to guess two five-letter words in six tries.
                    <br/>
                    <br/>
                    Each guess must be a valid five-letter word. Hit the enter button to submit.
                    <br/>
                    <br/>
                    After each guess, the color of the tiles will change to show how close your guess was to the answers.
                    <br/>
                    <br/>
                    <span style={{color: green, fontWeight: 'bold'}}>Green</span>: the letter is in the correct place.
                    <br/>
                    <span style={{color: yellow, fontWeight: 'bold'}}>Yellow</span>: the answer contains the letter but is not in the correct place.
                    <br/>
                    <span style={{color: grey, fontWeight: 'bold'}}>Grey</span>: the answer does not contain the letter.
                </p>
                
            </div>
            <div className="overlay" />
        </>,
        portal
    )
}

export default HelpModal;