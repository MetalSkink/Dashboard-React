import React from "react";
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { Button, CircularProgress, Grid, Paper, Table, TableBody, TableContainer, TableHead, TableRow} from "@mui/material";
import Pagination from "../../components/Pagination/Pagination";
import { useSelector } from 'react-redux';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const Products = () => {
  const {products, isLoading, currentPage} = useSelector(state => state.products);
  console.log(products);
  

  if (products.length === 0 && !isLoading) {
    <Grid container justifyContent="center" alignItems="center">
      No products
    </Grid>
  }

  return (
    <>
      {
        isLoading ? (
        <Grid container justifyContent="center" alignItems="center">
          <CircularProgress/>
        </Grid>
        ) : (
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Nombre</StyledTableCell>
                  <StyledTableCell align="right">Precio</StyledTableCell>
                  <StyledTableCell align="right">Categorias</StyledTableCell>
                  <StyledTableCell align="right"></StyledTableCell>
                  <StyledTableCell align="right"></StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {products.map((product) => (
                  <TableRow
                    key={product._id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {product.name}
                    </TableCell>
                    <TableCell align="right">$ {product.price}</TableCell>
                    <TableCell align="right">{product.category}</TableCell>
                    <TableCell align="right">
                      <Button variant="contained" color="error" startIcon={<DeleteIcon />}>Eliminar</Button>
                    </TableCell>
                    <TableCell align="right">
                      <Button variant="contained" color="secondary" startIcon={<EditIcon />}>Editar</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )
      }
      <Pagination page={currentPage}/>
    </>
  );
};

export default Products;
