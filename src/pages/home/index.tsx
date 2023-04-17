import { Card, CardContent, CardHeader, Grid } from '@mui/material';

const Home = () => {
    return (
        <div style={{ padding: '10px 20px' }}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={4}>
                    <Card sx={{ height: 'calc(100vh - 100px)' }}>
                        <CardHeader title="Pending" />
                        <CardContent></CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Card sx={{ height: 'calc(100vh - 100px)' }}>
                        <CardHeader title="In Progress" />
                    </Card>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Card sx={{ height: 'calc(100vh - 100px)' }}>
                        <CardHeader title="Completed" />
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
};

export default Home;
