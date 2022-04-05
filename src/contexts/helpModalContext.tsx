import React, { useState, createContext } from 'react';

type ModalState = {
    helpModal: boolean,
    setHelpModal: React.Dispatch<React.SetStateAction<boolean>>
}

export const HelpModalContext = createContext<ModalState>({} as ModalState);

export const HelpModalProvider = ({ children }: any) => {

    const [helpModal, setHelpModal] = useState(false);

    return (
        <HelpModalContext.Provider value={{helpModal: helpModal, setHelpModal: setHelpModal}}>
            { children }
        </HelpModalContext.Provider>
    )
}