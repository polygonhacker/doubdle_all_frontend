import React from "react";
import './NavBar.scss';
import { ReactComponent as Menu } from "../../assets/menu.svg";
import { ReactComponent as Settings } from '../../assets/settings.svg'

const NavBar = () => {

    return (
        <header className='nav-bar'>
            <div className='container'>
                <div className='left-menu'>
                    <div>
                        <Menu />
                    </div>
                </div>
                <h1>DOUBDLE</h1>
                <div className='right-menu'>
                    <Settings />
                </div>
            </div>
        </header>
    )
}

export default NavBar;