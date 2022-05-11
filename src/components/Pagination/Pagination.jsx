import React, { useEffect } from 'react'
import { Pagination, PaginationItem } from '@mui/material';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../services/actions/product.action'
import './styles.css';

const Paginate = ({page}) => {
  const dispatch = useDispatch();
  const {totalPages} = useSelector(state => state.products);

  useEffect(() => {
    if (page) dispatch(getProducts(page))
  }, [dispatch,page])

  return (
    <Pagination
      className='pagination'
      count={totalPages}
      page={Number(page) || 1}
      variant='outlined'
      color='primary'
      renderItem={(item) => (
        <PaginationItem {...item} component={Link} to={`/products?page=${item.page}`}/>
      )}
    />
  )
}

export default Paginate