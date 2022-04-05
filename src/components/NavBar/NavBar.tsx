import React, { useContext } from "react";
import './NavBar.scss';
import { ReactComponent as Refresh } from '../../assets/repeat.svg';
import { ReactComponent as Question } from '../../assets/question.svg';
import { HelpModalContext } from "../../contexts/helpModalContext";

const NavBar = () => {

    const helpModal = useContext(HelpModalContext).helpModal;
    const setHelpModal = useContext(HelpModalContext).setHelpModal;

    const toggleHelpModal = () => {
        setHelpModal(!helpModal);
    }

    return (
        <header className='nav-bar'>
            <div className='container'>
                <div className='left-menu'>
                    <Refresh onClick={() => {window.location.reload();}} />
                </div>
                <h1>DOUBDLE</h1>
                <div className='right-menu'>
                    <Question onClick={toggleHelpModal} />
                </div>
            </div>
        </header>
    )
}

export default NavBar;