import { Divider, Grid, Typography } from '@mui/material';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProduct } from '../../services/actions/product.action';

const ProductDetails = () => {
  const {product} = useSelector(state => state.products);
  const {productId} = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct(productId));
  }, [dispatch,productId]);
  
  return (
    <>
    <Typography variant='h3' component="h2">{product.name}</Typography>
    <Divider style={{ margin: '20px 0' }} />
    <Grid container justifyContent="center" alignItems="center">
      <Grid item xs={12} md={6}>
        <img src={product.imgUrl || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} alt={product.name} />
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography gutterBottom variant='h6' color="textSecondary" component="h2">{product.category}</Typography>
        <Typography gutterBottom variant='h5' component="h2">$ {product.price}</Typography>
      </Grid>
    </Grid>
    </>
  )
}

export default ProductDetails