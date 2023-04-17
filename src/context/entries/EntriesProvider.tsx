import { FC, ReactNode, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { EntriesContext } from './EntriesContext';
import { entriesReducer } from './entriesReducer';
import { Entry } from '../../interfaces/entry';

interface EntriesProviderProps {
    children: ReactNode;
}

export interface EntriesState {
    entries: Entry[];
}

const ENTRIES_INITIAL_STATE: EntriesState = {
    entries: [
        {
            _id: uuidv4(),
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            createdAt: Date.now(),
            status: 'pending',
        },
        {
            _id: uuidv4(),
            description:
                'Donec at mi vel lorem sollicitudin viverra sit amet fringilla tortor.',
            createdAt: Date.now() - 1000000,
            status: 'in-progress',
        },
        {
            _id: uuidv4(),
            description:
                'Curabitur aliquet massa sit amet pellentesque tincidunt.',
            createdAt: Date.now() - 2000000,
            status: 'finished',
        },
    ],
};

export const EntriesProvider: FC<EntriesProviderProps> = ({ children }) => {
    const [state, dispatch] = useReducer(entriesReducer, ENTRIES_INITIAL_STATE);

    return (
        <EntriesContext.Provider value={{ ...state }}>
            {children}
        </EntriesContext.Provider>
    );
};
