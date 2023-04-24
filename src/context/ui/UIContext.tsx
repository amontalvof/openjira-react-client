import { createContext } from 'react';

interface UIContextProps {
    sideMenuOpen: boolean;
    isAddingEntry: boolean;
    openSideMenu: () => void;
    closeSideMenu: () => void;
    setIsAddingEntry: (isAddingEntry: boolean) => void;
}

export const UIContext = createContext({} as UIContextProps);
