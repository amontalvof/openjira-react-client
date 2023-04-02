import { CssBaseline, ThemeProvider, Typography } from '@mui/material';
import { lightTheme, darkTheme } from './themes';

function App() {
    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <Typography variant="h1" color="primary">
                Hello World
            </Typography>
        </ThemeProvider>
    );
}

export default App;
