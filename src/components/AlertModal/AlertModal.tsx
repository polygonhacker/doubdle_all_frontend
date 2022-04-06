import React from 'react';
import ReactDOM from 'react-dom';
import './AlertModal.css';

type Props = {
    messages: string[]
}

const AlertModal: React.FC<Props> = ({ messages }) => {

    const portal = document.getElementById('portal') as HTMLElement;

    return ReactDOM.createPortal(
        <div className='alert-modal'>
            {messages.length > 1 ? <p>{messages[0]}<br/><br/>{messages[1]}</p> : messages[0]}
        </div>,
        portal
    )
}

export default AlertModal;