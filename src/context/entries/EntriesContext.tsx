import { createContext } from 'react';
import { Entry } from '../../interfaces/entry';

interface EntriesContextProps {
    entries: Entry[];
}

export const EntriesContext = createContext({} as EntriesContextProps);
