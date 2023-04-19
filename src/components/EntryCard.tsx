import {
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    Typography,
} from '@mui/material';

const EntryCard = () => {
    return (
        <Card sx={{ marginBottom: 1 }}>
            <CardActionArea>
                <CardContent>
                    <Typography sx={{ whiteSpace: 'pre-line' }}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Itaque, exercitationem.
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
                        Created at: 2021-10-10
                    </Typography>
                </CardActions>
            </CardActionArea>
        </Card>
    );
};

export default EntryCard;
