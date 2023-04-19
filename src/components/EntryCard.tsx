import { FC } from 'react';
import {
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    Typography,
} from '@mui/material';
import { Entry } from '../interfaces/entry';

interface EntryCardProps {
    entry: Entry;
}

const EntryCard: FC<EntryCardProps> = ({ entry }) => {
    return (
        <Card sx={{ marginBottom: 1 }}>
            <CardActionArea>
                <CardContent>
                    <Typography sx={{ whiteSpace: 'pre-line' }}>
                        {entry.description}
                    </Typography>
                </CardContent>
                <CardActions
                    sx={{
                        display: 'flex',
                        justifyContent: 'end',
                        paddingRight: 2,
                    }}
                >
                    <Typography variant="body2">
                        {new Date(entry.createdAt).toLocaleString()}
                    </Typography>
                </CardActions>
            </CardActionArea>
        </Card>
    );
};

export default EntryCard;
