import React from 'react';
import { NavLink } from "react-router-dom";
import { Box } from '@mui/material';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <>
            <Box className='sidebar' py={4} px={2}>
                <Box py={1}>
                    <NavLink className='sidebar-font' to="/registered-users">Registered Users</NavLink>
                </Box>
                <Box py={1}>
                    <NavLink className='sidebar-font' to="/category">Category Upload</NavLink>
                </Box>
                <Box py={1}>
                    <NavLink className='sidebar-font' to="/product">Product Upload</NavLink>
                </Box>
                <Box py={1}>
                    <NavLink className='sidebar-font' to="/">Home</NavLink>
                </Box>
            </Box>
        </>
    );
};

export default Sidebar;