import React from "react";
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { Button, CircularProgress, Grid, Paper, Table, TableBody, TableContainer, TableHead, TableRow} from "@mui/material";
import Pagination from "../../components/Pagination/Pagination";
import { useSelector } from 'react-redux';
import { Link, useLocation } from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Products = () => {
  const {products, isLoading} = useSelector(state => state.products);
  const query = useQuery();
  const page = query.get('page') || 1;
  
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
                  <StyledTableCell>Precio</StyledTableCell>
                  <StyledTableCell>Categoria</StyledTableCell>
                  <StyledTableCell></StyledTableCell>
                  <StyledTableCell></StyledTableCell>
                  <StyledTableCell></StyledTableCell>
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
                    <TableCell>$ {product.price}</TableCell>
                    <TableCell>{product.category}</TableCell>
                    <TableCell>
                      <Button variant="contained" color="primary" startIcon={<VisibilityIcon />}  component={Link} to={`/product/${product._id}`}>
                        Ver</Button>
                    </TableCell>
                    <TableCell>
                      <Button variant="contained" color="error" startIcon={<DeleteIcon />}>Eliminar</Button>
                    </TableCell>
                    <TableCell>
                      <Button variant="contained" color="secondary" startIcon={<EditIcon />}>Editar</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )
      }
      <Pagination page={page}/>
    </>
  );
};

export default Products;
