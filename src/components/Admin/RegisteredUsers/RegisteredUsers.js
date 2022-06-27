import React, { useEffect, useState } from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
import Sidebar from '../Sidebar/Sidebar';
import sweetAlert from '../../Shared/SweetAlert/SweetAlert';
import PageNavigation from '../PageNavigation/PageNavigation';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        fontSize: '1.3rem',
    },
    [`&.${tableCellClasses.body}`]: {
        padding: '0.5rem',
        fontSize: '1.1rem',
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

const RegisteredUsers = () => {
    document.title = 'Registered Users';

    const [registeredUsers, setRegisteredUsers] = useState([]);

    useEffect(() => {
        const url = 'http://localhost:5000/registeredUsers';
        fetch(url)
            .then(res => res.json())
            .then(data => setRegisteredUsers(data));
    }, [registeredUsers]);


    const handleRoleUpdate = (_id, status) => {

        const updatedRole = { role: status };
        const url = `http://localhost:5000/editRole/${_id}`;
        fetch(url, {
            method: 'PATCH',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(updatedRole)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                sweetAlert('User role updated successfully!', 'success');
            });
    }

    //For pagination
    // const [isLoading, setIsLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(5);

    //Get current Item
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = registeredUsers?.slice(indexOfFirstItem, indexOfLastItem);

    //Get Page Number    
    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    }

    return (
        <section id='registered-users'>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={2}>
                        <Sidebar />
                    </Grid>
                    <Grid item xs={10} my={10}>
                        <Box>
                            <Typography mb={3} variant="h4" gutterBottom component="div">
                                Registered Users
                            </Typography>
                            <Typography mb={3} variant="body1" gutterBottom>
                                You can select the button to assign the role of the registered users. Super Admin button will always be disabled.
                            </Typography>
                            <section id='user-data'>
                                <TableContainer component={Paper}>
                                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                                        <TableHead>
                                            <TableRow>
                                                <StyledTableCell align='center'>#</StyledTableCell>
                                                <StyledTableCell>Name</StyledTableCell>
                                                <StyledTableCell>Phone</StyledTableCell>
                                                <StyledTableCell align="center">Email</StyledTableCell>
                                                <StyledTableCell align="center">Password</StyledTableCell>
                                                <StyledTableCell align="center">Current Role</StyledTableCell>
                                                <StyledTableCell align="center">Select Role</StyledTableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {
                                                currentItems?.map((user, index) => {
                                                    const { name, phone, email, password, role, _id } = user;
                                                    return (
                                                        <StyledTableRow key={_id}>
                                                            <StyledTableCell align='center' component="th" scope="row">
                                                                {index + 1}
                                                            </StyledTableCell>
                                                            <StyledTableCell>
                                                                <Box
                                                                    component='div'
                                                                    sx={{
                                                                        fontWeight: '500',
                                                                        textTransform: 'capitalize'
                                                                    }}
                                                                >
                                                                    {name}
                                                                </Box>
                                                            </StyledTableCell>
                                                            <StyledTableCell>{phone}</StyledTableCell>
                                                            <StyledTableCell align="center">{email}</StyledTableCell>
                                                            <StyledTableCell align="center">{password}</StyledTableCell>
                                                            <StyledTableCell align="center">{role}</StyledTableCell>
                                                            <StyledTableCell align="center">
                                                                {
                                                                    (role === 'super_admin') ? (
                                                                        <Chip color='warning' label="Super Admin" />
                                                                    ) : (
                                                                        <Box
                                                                            sx={{
                                                                                display: 'flex',
                                                                                flexDirection: 'column',
                                                                                alignItems: 'center'
                                                                            }}
                                                                        >
                                                                            <Chip
                                                                                color='success'
                                                                                label="User"
                                                                                onClick={() => handleRoleUpdate(_id, 'user')}
                                                                            />
                                                                            <Chip
                                                                                color='error'
                                                                                sx={{ marginTop: '5px' }}
                                                                                label="Admin"
                                                                                onClick={() => handleRoleUpdate(_id, 'admin')}
                                                                            />
                                                                        </Box>
                                                                    )
                                                                }
                                                            </StyledTableCell>
                                                        </StyledTableRow>
                                                    );
                                                })
                                            }
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </section>

                            <PageNavigation
                                totalItems={registeredUsers?.length}
                                itemsPerPage={itemsPerPage}
                                currentPage={currentPage}
                                handlePageChange={handlePageChange}
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </section >
    );
};

export default RegisteredUsers;