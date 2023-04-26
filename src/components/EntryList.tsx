import { DragEvent, FC, useContext, useMemo } from 'react';
import { List, Paper } from '@mui/material';
import EntryCard from './EntryCard';
import { EntryStatus } from '../interfaces/entry';
import { EntriesContext } from '../context/entries/EntriesContext';
import { UIContext } from '../context/ui/UIContext';
import styles from './EntryList.module.css';

interface EntryListProps {
    status: EntryStatus;
}

const EntryList: FC<EntryListProps> = ({ status }) => {
    const { entries } = useContext(EntriesContext);
    const { isDragging } = useContext(UIContext);

    const entriesByStatus = useMemo(
        () => entries.filter((entry) => entry.status === status),
        [entries]
    );

    const handleOnDrop = (event: DragEvent<HTMLDivElement>) => {
        const id = event.dataTransfer.getData('text');
        console.log(id);
    };

    const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
        event.preventDefault();
    };

    return (
        <div
            onDrop={handleOnDrop}
            onDragOver={handleDragOver}
            className={isDragging ? styles.dragging : ''}
        >
            <Paper
                sx={{
                    height: 'calc(100vh - 180px)',
                    overflow: 'scroll',
                    backgroundColor: 'transparent',
                    padding: '1px 10px',
                }}
            >
                <List
                    sx={{
                        opacity: isDragging ? 0.2 : 1,
                        transition: 'all 0.3s',
                    }}
                >
                    {entriesByStatus.map((entry) => (
                        <EntryCard key={entry._id} entry={entry} />
                    ))}
                </List>
            </Paper>
        </div>
    );
};

export default EntryList;
