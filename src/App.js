import { Routes, Route, Navigate } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material';
import MyAccount from "./components/MyAccount/MyAccount";
import NotFound from "./components/NotFound/NotFound";
import AuthProvider from "./contexts/AuthProvider";
import './App.css';
import Home from "./components/Home/Home";

const theme = createTheme({
  typography: {
    fontFamily: [
      'Raleway',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  }
});

function App() {
  return (
    <div>
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />

            <Route path="/home" element={<Home />} />
            
            <Route path="/my-account" element={<MyAccount />} />

            {/* <Route path="/admin" element={<AdminPanel />} /> */}

            <Route path='*' element={<NotFound />} />
          </Routes>
        </ThemeProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
