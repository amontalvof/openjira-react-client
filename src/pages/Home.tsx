import { Card, CardContent, CardHeader, Grid } from '@mui/material';
import EntryList from '../components/EntryList';

const Home = () => {
    return (
        <div style={{ padding: '10px 20px' }}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={4}>
                    <Card sx={{ height: 'calc(100vh - 100px)' }}>
                        <CardHeader title="Pending" />
                        <EntryList />
                    </Card>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Card sx={{ height: 'calc(100vh - 100px)' }}>
                        <CardHeader title="In Progress" />
                        <EntryList />
                    </Card>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Card sx={{ height: 'calc(100vh - 100px)' }}>
                        <CardHeader title="Finished" />
                        <EntryList />
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
};

export default Home;
