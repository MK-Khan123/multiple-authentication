import React, { useEffect, useState } from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
import Paper from '@mui/material/Paper';
import Sidebar from '../Sidebar/Sidebar';
import PageNavigation from '../PageNavigation/PageNavigation';
import sweetAlert from '../../Shared/SweetAlert/SweetAlert';

const CategoryTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        fontSize: '1.3rem',
    },
    [`&.${tableCellClasses.body}`]: {
        padding: '0.5rem',
        fontSize: '1.1rem',
    },
}));

const CategoryTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

const ManageCategories = () => {
    document.title = 'Manage Categories';

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const url = 'https://safe-reef-91132.herokuapp.com/categories';
        fetch(url)
            .then(res => res.json())
            .then(data => setCategories(data));
    }, [categories]);


    const handleDelete = (id) => {

        const url = `https://safe-reef-91132.herokuapp.com/deleteCategory/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                const remainingCategories = categories.filter(category => category._id !== id);
                setCategories(remainingCategories);
                sweetAlert("Category removed successfully!", 'success');
            });

    }

    //For pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(5);

    //Get current Item
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = categories?.slice(indexOfFirstItem, indexOfLastItem);

    //Get Page Number    
    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    }

    return (
        <section id='manage-categories'>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={2}>
                        <Sidebar />
                    </Grid>
                    <Grid item xs={10} my={10}>
                        <Box>
                            <Typography mb={3} variant="h4" gutterBottom component="div">
                                Manage Categories
                            </Typography>
                            <section id='category-data'>
                                <TableContainer component={Paper}>
                                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                                        <TableHead>
                                            <TableRow>
                                                <CategoryTableCell align='center'>#</CategoryTableCell>
                                                <CategoryTableCell>Category ID</CategoryTableCell>
                                                <CategoryTableCell>Name</CategoryTableCell>
                                                <CategoryTableCell align="center">Description</CategoryTableCell>
                                                <CategoryTableCell align="center">Action</CategoryTableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {
                                                currentItems?.map((category, index) => {
                                                    const { category_id, name, description, _id } = category;
                                                    return (
                                                        <CategoryTableRow key={_id}>
                                                            <CategoryTableCell align='center' component="th" scope="row">
                                                                {index + 1}
                                                            </CategoryTableCell>
                                                            <CategoryTableCell>{category_id}</CategoryTableCell>
                                                            <CategoryTableCell>
                                                                <Box
                                                                    component='div'
                                                                    sx={{
                                                                        fontWeight: '500',
                                                                        textTransform: 'capitalize'
                                                                    }}
                                                                >
                                                                    {name}
                                                                </Box>
                                                            </CategoryTableCell>
                                                            <CategoryTableCell align="center">{description}</CategoryTableCell>
                                                            <CategoryTableCell align="center">
                                                                <DeleteOutlineRoundedIcon
                                                                    onClick={() => handleDelete(_id)}
                                                                    sx={{
                                                                        fontSize: '2rem',
                                                                        color: '#525252',
                                                                        '&:hover': { color: '#DC3545', cursor: 'pointer' }
                                                                    }}
                                                                />
                                                            </CategoryTableCell>
                                                        </CategoryTableRow>
                                                    );
                                                })
                                            }
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </section>

                            <PageNavigation
                                totalItems={categories?.length}
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

export default ManageCategories;