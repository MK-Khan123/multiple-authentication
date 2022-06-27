import React, { useEffect, useState } from 'react';
import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useForm } from "react-hook-form";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Sidebar from '../Sidebar/Sidebar';

const FilterTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        fontSize: '1.3rem',
    },
    [`&.${tableCellClasses.body}`]: {
        padding: '0.5rem',
        fontSize: '1.1rem',
    },
}));

const FilterTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

const Filtering = () => {
    document.title = 'Filtering Users';

    const [filteredUser, setFilteredUser] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    //For handling Filtering
    const {
        register: registerFilter,
        formState: {
            errors: filterError,
            isSubmitSuccessful: isFilterSubmitSuccessful
        },
        handleSubmit: handleSubmitFilter,
        reset: resetFilter
    } = useForm();

    //This useEffect is used to clear input fields after successful Filter form submission
    useEffect(() => {
        if (isFilterSubmitSuccessful) {
            resetFilter();
        }
    }, [isFilterSubmitSuccessful, resetFilter]);

    const filter = data => {
        setErrorMessage('');
        const { phone, email } = data;

        const filteredData = {
            phone,
            email
        };

        const url = `https://safe-reef-91132.herokuapp.com/filter`;
        fetch(url, {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(filteredData)
        })
            .then(res => res.json())
            .then(result => {
                if (result.length === 0) {
                    setErrorMessage('There are no search results according to your query.')
                } else setFilteredUser(result);
            });
    }

    return (
        <section id='filtered-users'>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={2}>
                        <Sidebar />
                    </Grid>
                    <Grid item xs={10} my={10}>
                        <Box>
                            <Typography mb={3} variant="h4" gutterBottom component="div">
                                Filtering Registered Users
                            </Typography>
                            <Typography mb={3} variant="body1" gutterBottom>
                                Please provide the phone number and email ID for accurate result.
                            </Typography>

                            <form onSubmit={handleSubmitFilter(filter)}>
                                <TextField sx={{ mb: 2 }}
                                    label="Phone Number"
                                    type="text"
                                    fullWidth
                                    size="small"
                                    InputLabelProps={{
                                        shrink: true
                                    }}
                                    {...registerFilter("phone", { required: "This field is required" })}
                                    error={!!filterError.phone}
                                    helperText={filterError?.phone ? filterError.phone.message : null}
                                />
                                <TextField sx={{ mb: 2 }}
                                    label="Email ID"
                                    type="text"
                                    fullWidth
                                    size="small"
                                    InputLabelProps={{
                                        shrink: true
                                    }}
                                    {...registerFilter("email", { required: "This field is required" })}
                                    error={!!filterError.email}
                                    helperText={filterError?.email ? filterError.email.message : null}
                                />
                                <Button
                                    size='large'
                                    type="submit"
                                    color='success'
                                    variant='contained'
                                >
                                    Search
                                </Button>
                            </form>

                            {
                                errorMessage && (
                                    <Typography my={3} color='error' variant="body1" gutterBottom>
                                        {errorMessage}
                                    </Typography>
                                )
                            }

                            <section id='filtered-data'>
                                <TableContainer sx={{ marginTop: '2rem' }} component={Paper}>
                                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                                        <TableHead>
                                            <TableRow>
                                                <FilterTableCell align='center'>#</FilterTableCell>
                                                <FilterTableCell>Name</FilterTableCell>
                                                <FilterTableCell>Phone</FilterTableCell>
                                                <FilterTableCell align="center">Email</FilterTableCell>
                                                <FilterTableCell align="center">Password</FilterTableCell>
                                                <FilterTableCell align="center">Current Role</FilterTableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {
                                                filteredUser?.map((user, index) => {
                                                    const { name, phone, email, password, role, _id } = user;
                                                    return (
                                                        <FilterTableRow key={_id}>
                                                            <FilterTableCell align='center' component="th" scope="row">
                                                                {index + 1}
                                                            </FilterTableCell>
                                                            <FilterTableCell>
                                                                <Box
                                                                    component='div'
                                                                    sx={{
                                                                        fontWeight: '500',
                                                                        textTransform: 'capitalize'
                                                                    }}
                                                                >
                                                                    {name}
                                                                </Box>
                                                            </FilterTableCell>
                                                            <FilterTableCell>{phone}</FilterTableCell>
                                                            <FilterTableCell align="center">{email}</FilterTableCell>
                                                            <FilterTableCell align="center">{password}</FilterTableCell>
                                                            <FilterTableCell align="center">{role}</FilterTableCell>
                                                        </FilterTableRow>
                                                    );
                                                })
                                            }
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </section>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </section >
    );
};

export default Filtering;