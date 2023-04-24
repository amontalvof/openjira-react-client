import { FC, ReactNode, useReducer } from 'react';
import { UIContext } from './UIContext';
import { uiReducer } from './uiReducer';

interface UIProviderProps {
    children: ReactNode;
}

export interface UIState {
    sideMenuOpen: boolean;
    isAddingEntry: boolean;
}

const UI_INITIAL_STATE: UIState = {
    sideMenuOpen: false,
    isAddingEntry: false,
};

export const UIProvider: FC<UIProviderProps> = ({ children }) => {
    const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

    const openSideMenu = () => {
        dispatch({ type: 'UI - Open Sidebar' });
    };

    const closeSideMenu = () => {
        dispatch({ type: 'UI - Close Sidebar' });
    };

    const setIsAddingEntry = (isAddingEntry: boolean) => {
        dispatch({ type: 'UI - Set is Adding', payload: isAddingEntry });
    };

    return (
        <UIContext.Provider
            value={{ ...state, openSideMenu, closeSideMenu, setIsAddingEntry }}
        >
            {children}
        </UIContext.Provider>
    );
};
