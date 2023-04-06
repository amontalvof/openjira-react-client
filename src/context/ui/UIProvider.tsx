import { FC, ReactNode, useReducer } from 'react';
import { UIContext } from './UIContext';
import { uiReducer } from './uiReducer';

interface UIProviderProps {
    children: React.ReactNode;
}

export interface UIState {
    sideMenuOpen: boolean;
}

const UI_INITIAL_STATE: UIState = {
    sideMenuOpen: false,
};

export const UIProvider: FC<UIProviderProps> = ({ children }) => {
    const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);
    return (
        <UIContext.Provider value={{ sideMenuOpen: false }}>
            {children}
        </UIContext.Provider>
    );
};
