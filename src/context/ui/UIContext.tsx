import { createContext } from 'react';

interface UIContextProps {
    sideMenuOpen: boolean;
}

export const UIContext = createContext({} as UIContextProps);
