import { createContext } from 'react';
import { Entry } from '../../interfaces/entry';

interface EntriesContextProps {
    entries: Entry[];
    addNewEntry: (description: string) => void;
    updateEntry: (entry: Entry) => void;
}

export const EntriesContext = createContext({} as EntriesContextProps);
