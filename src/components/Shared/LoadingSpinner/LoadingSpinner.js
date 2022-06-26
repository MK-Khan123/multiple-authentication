import React from 'react';
import { Box, CircularProgress } from '@mui/material';

const LoadingSpinner = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%'               
            }}
        >
            <CircularProgress sx={{ color: "#212428" }} />
        </Box>
    );
};

export default LoadingSpinner;