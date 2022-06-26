import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import { NavLink } from 'react-router-dom';
import NavItems from './NavItems/NavItems';
import NavItemsSidebar from './NavItemsSidebar/NavItemsSidebar';
import useAuth from '../../../hooks/useAuth';
import './Navbar.css';

const Navbar = () => {
    const logo = 'https://i.ibb.co/FW3LZMp/logo.png';

    const { user, logout } = useAuth();

    return (
        <AppBar sx={{ backgroundColor: 'whitesmoke', position: 'static' }}>
            <Container>
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                    >
                        <NavLink to='/home'>
                            <img style={{ maxWidth: '120px', maxHeight: '100px' }} src={logo} alt="" />
                        </NavLink>
                    </Typography>

                    {/* NAV ITEMS for smaller screen display (smaller than width of 899px) */}
                    <NavItemsSidebar
                        user={user}
                        logout={logout}
                    />

                    {/* NAV ITEMS for larger screen display (greater than width of 899px) */}
                    <NavItems
                        user={user}
                        logout={logout}
                    />

                    {/* CART ICON SECTION */}
                    <Box sx={{ my: 3, pr: 3 }}>
                        <Badge badgeContent={2} color="error">
                            <ShoppingCartIcon sx={{ fontSize: '1.5rem', color: '#000' }} />
                        </Badge>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Navbar;