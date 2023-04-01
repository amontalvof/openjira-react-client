import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';

const basicTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

function App() {
    return (
        <ThemeProvider theme={basicTheme}>
            <CssBaseline />
            <div>Hello World</div>
        </ThemeProvider>
    );
}

export default App;
