import { DragEvent, FC, useContext } from 'react';
import {
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    Typography,
} from '@mui/material';
import { Entry } from '../interfaces/entry';
import { UIContext } from '../context/ui/UIContext';

interface EntryCardProps {
    entry: Entry;
}

const EntryCard: FC<EntryCardProps> = ({ entry }) => {
    const { startDragging, endDragging } = useContext(UIContext);

    const handleDragStart = (event: DragEvent<HTMLDivElement>) => {
        event.dataTransfer.setData('text', entry._id);
        startDragging();
    };

    const handleDragEnd = () => {
        endDragging();
    };

    return (
        <Card
            sx={{ marginBottom: 1 }}
            draggable
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
        >
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
