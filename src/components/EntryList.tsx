import { List, Paper } from '@mui/material';
import EntryCard from './EntryCard';

const EntryList = () => {
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
                    <EntryCard />
                    <EntryCard />
                    <EntryCard />
                    <EntryCard />
                    <EntryCard />
                    <EntryCard />
                    <EntryCard />
                </List>
            </Paper>
        </div>
    );
};

export default EntryList;
