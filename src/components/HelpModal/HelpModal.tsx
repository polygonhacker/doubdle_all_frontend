import React, { useContext } from "react";
import ReactDOM from 'react-dom';
import { HelpModalContext } from "../../contexts/helpModalContext";
import {ReactComponent as Close} from '../../assets/remove.svg';
import './HelpModal.css';



const HelpModal = () => {

    const helpModal = useContext(HelpModalContext).helpModal;
    const setHelpModal = useContext(HelpModalContext).setHelpModal

    const portal = document.getElementById('portal') as HTMLElement;

    return ReactDOM.createPortal(
        <>
            <div className="modal-container">
                <Close className="close-button" onClick={() => {setHelpModal(!helpModal)}} />
                <p>
                    Here are the instructions.<br/>Herearethe instructions.<br/>
                    Here are the instructions.<br/>Herearethe instructions.<br/>
                    Here are the instructions.<br/>Herearethe instructions.<br/>
                    Here are the instructions.<br/>Herearethe instructions.<br/>
                    Here are the instructions.<br/>Herearethe instructions.<br/>
                    Here are the instructions.<br/>Herearethe instructions.<br/>
                    Here are the instructions.<br/>Herearethe instructions.<br/>
                </p>
                
            </div>
            <div className="overlay" />
        </>,
        portal
    )
}

export default HelpModal;