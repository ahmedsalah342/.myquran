import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import './App.css';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  const theme = createTheme({
    direction: 'rtl',
    palette: {
      mode: isDarkMode ? 'dark' : 'light',
      primary: {
        main: '#1F6F78',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        height: '100vh',
        bgcolor: 'background.default',
        color: 'text.primary'
      }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={() => setIsDarkMode(!isDarkMode)}
            >
              {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
            <Typography 
              variant="h6" 
              component="div" 
              sx={{ 
                flexGrow: 1, 
                textAlign: 'center',
                fontFamily: 'Amiri, serif',
                fontSize: '1.5rem'
              }}
            >
              القرآن الكريم
            </Typography>
          </Toolbar>
        </AppBar>

        <Box sx={{ 
          display: 'flex', 
          flex: 1,
          overflow: 'hidden'
        }}>
          {/* Right Panel - Surahs List */}
          <Box sx={{
            width: '30%',
            borderRight: 1,
            borderColor: 'divider',
            overflow: 'auto'
          }}>
            {/* سيتم إضافة قائمة السور هنا */}
          </Box>

          {/* Main Content - Ayat Display */}
          <Box sx={{
            flex: 1,
            p: 2,
            overflow: 'auto'
          }}>
            {/* سيتم عرض الآيات هنا */}
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default App;
