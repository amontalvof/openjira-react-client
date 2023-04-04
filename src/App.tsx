import { CssBaseline, ThemeProvider, Typography } from '@mui/material';
import { lightTheme, darkTheme } from './themes';
import Navbar from './layout/navbar';
import Sidebar from './layout/sidebar';

function App() {
    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <Navbar />
            <Sidebar />
            <div style={{ padding: '10px 20px' }}>
                <Typography variant="h1" color="primary">
                    Hello World
                </Typography>
            </div>
        </ThemeProvider>
    );
}

export default App;
