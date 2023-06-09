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
                'Pending: Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            createdAt: Date.now(),
            status: 'pending',
        },
        {
            _id: uuidv4(),
            description:
                'In-progress: Donec at mi vel lorem sollicitudin viverra sit amet fringilla tortor.',
            createdAt: Date.now() - 1000000000,
            status: 'in-progress',
        },
        {
            _id: uuidv4(),
            description:
                'Finished: Curabitur aliquet massa sit amet pellentesque tincidunt.',
            createdAt: Date.now() - 2000000000,
            status: 'finished',
        },
    ],
};

export const EntriesProvider: FC<EntriesProviderProps> = ({ children }) => {
    const [state, dispatch] = useReducer(entriesReducer, ENTRIES_INITIAL_STATE);

    const addNewEntry = (description: string) => {
        const newEntry: Entry = {
            _id: uuidv4(),
            description,
            createdAt: Date.now(),
            status: 'pending',
        };
        dispatch({ type: '[Entry] - Add Entry', payload: newEntry });
    };

    const updateEntry = (entry: Entry) => {
        dispatch({ type: '[Entry] - Update Entry', payload: entry });
    };

    return (
        <EntriesContext.Provider value={{ ...state, addNewEntry, updateEntry }}>
            {children}
        </EntriesContext.Provider>
    );
};
