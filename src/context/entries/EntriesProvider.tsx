import { FC, ReactNode, useReducer } from 'react';
import { EntriesContext } from './EntriesContext';
import { entriesReducer } from './entriesReducer';

interface EntriesProviderProps {
    children: ReactNode;
}

export interface EntriesState {
    entries: [];
}

const ENTRIES_INITIAL_STATE: EntriesState = {
    entries: [],
};

export const UIProvider: FC<EntriesProviderProps> = ({ children }) => {
    const [state, dispatch] = useReducer(entriesReducer, ENTRIES_INITIAL_STATE);

    return (
        <EntriesContext.Provider value={{ ...state }}>
            {children}
        </EntriesContext.Provider>
    );
};
