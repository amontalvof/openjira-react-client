import { CssBaseline, ThemeProvider } from '@mui/material';
import { lightTheme, darkTheme } from './themes';
import Navbar from './layout/navbar';
import Sidebar from './layout/sidebar';
import { UIProvider } from './context/ui/UIProvider';
import Home from './pages/home';

function App() {
    return (
        <UIProvider>
            <ThemeProvider theme={darkTheme}>
                <CssBaseline />
                <Navbar />
                <Sidebar />
                <Home />
            </ThemeProvider>
        </UIProvider>
    );
}

export default App;
