import { Card, CardHeader, Grid } from '@mui/material';
import EntryList from '../components/EntryList';
import NewEntry from '../components/NewEntry';

const Home = () => {
    return (
        <div style={{ padding: '10px 20px' }}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={4}>
                    <Card sx={{ height: 'calc(100vh - 100px)' }}>
                        <CardHeader title="Pending" />
                        <NewEntry />
                        <EntryList status="pending" />
                    </Card>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Card sx={{ height: 'calc(100vh - 100px)' }}>
                        <CardHeader title="In Progress" />
                        <EntryList status="in-progress" />
                    </Card>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Card sx={{ height: 'calc(100vh - 100px)' }}>
                        <CardHeader title="Finished" />
                        <EntryList status="finished" />
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
};

export default Home;
