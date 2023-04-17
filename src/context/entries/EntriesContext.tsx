import { createContext } from 'react';

interface EntriesContextProps {
    entries: [];
}

export const EntriesContext = createContext({} as EntriesContextProps);
