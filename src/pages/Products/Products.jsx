import React from "react";
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { Button, CircularProgress, Grid, Paper, Table, TableBody, TableContainer, TableHead, TableRow, Divider, Typography} from "@mui/material";
import Pagination from "../../components/Pagination/Pagination";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { deleteProduct } from "../../services/actions/product.action";
import Swal from "sweetalert2";

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
  const {rol} = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const query = useQuery();
  const page = query.get('page') || 1;
  
  const handleDelete = (product) => {
    Swal.fire({
      title: 'Quieres borrar el producto?',
      text: `Borraras ${product.name}`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Borrar'
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteProduct(product._id));
        Swal.fire(
          'Borrado!',
          'El producto ha sido borrado.',
          'success'
        )
      }
    })
  }

  if (products.length === 0 && !isLoading) {
    <Grid container justifyContent="center" alignItems="center">
      No products
    </Grid>
  }

  return (
    <>
      <Typography variant='h4' component="h2">Productos</Typography>
      <Divider style={{ margin: '20px 0' }} />
      {
        isLoading ? (
        <Grid container justifyContent="center" alignItems="center">
          <CircularProgress/>
        </Grid>
        ) : (
          <TableContainer component={Paper} className="animate__animated animate__fadeIn">
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Nombre</StyledTableCell>
                  <StyledTableCell>Precio</StyledTableCell>
                  <StyledTableCell>Categoria</StyledTableCell>
                  <StyledTableCell></StyledTableCell>
                  {
                      rol === 'admin' || 'moderator' ? (
                        <>
                        <StyledTableCell></StyledTableCell>
                        <StyledTableCell></StyledTableCell>
                        </>
                    ) : null
                    }
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
                    {
                      rol === 'admin' || rol === 'moderator' ? (
                        <>
                        <TableCell>
                          <Button variant="contained" color="error" startIcon={<DeleteIcon />} onClick={()=>handleDelete(product)}>Eliminar</Button>
                        </TableCell>
                        <TableCell>
                          <Button variant="contained" color="secondary" startIcon={<EditIcon />}>Editar</Button>
                        </TableCell>
                        </>
                    ) : null
                    }
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
