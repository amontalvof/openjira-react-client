import { FC, useContext, useMemo } from 'react';
import { List, Paper } from '@mui/material';
import EntryCard from './EntryCard';
import { EntryStatus } from '../interfaces/entry';
import { EntriesContext } from '../context/entries/EntriesContext';

interface EntryListProps {
    status: EntryStatus;
}

const EntryList: FC<EntryListProps> = ({ status }) => {
    const { entries } = useContext(EntriesContext);
    const entriesByStatus = useMemo(
        () => entries.filter((entry) => entry.status === status),
        [entries]
    );

    return (
        <div>
            <Paper
                sx={{
                    height: 'calc(100vh - 180px)',
                    overflow: 'scroll',
                    backgroundColor: 'transparent',
                    padding: '1px 10px',
                }}
            >
                <List sx={{ opacity: 1 }}>
                    {entriesByStatus.map((entry) => (
                        <EntryCard key={entry._id} entry={entry} />
                    ))}
                </List>
            </Paper>
        </div>
    );
};

export default EntryList;
