import React, { useEffect } from 'react';
import {
  Typography,
  Container,
  Grid,
  CircularProgress,
  Box,
} from '@mui/material';

import { useRootSelector } from '../../store';
import ShopPageCard from './shop-page-card';
import { selectShopItems, selectShopItemsLoading } from '../../store/selectors';
import { useRootDispatch } from '../../store/hooks';
import { shopFetchItemsAction } from '../../store/action-creators';

const ShopPage: React.FC = () => {
  const items = useRootSelector(selectShopItems);
  const itemsLoading = useRootSelector(selectShopItemsLoading);
  const dispatch = useRootDispatch();

  useEffect(() => {
    dispatch(shopFetchItemsAction);
  }, []);

  let pageContent = (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <CircularProgress color="primary" size={60} />
    </Box>
  );

  if (!itemsLoading) {
    pageContent = items.length > 0 ? (
      <Grid container spacing={4}>
        {items.map((item) => (
          <Grid item key={item.id} xs={4}>
            <ShopPageCard {...item} />
          </Grid>
        ))}
      </Grid>
    ) : <Typography component="h2" variant="h3" sx={{ my: 3 }}>No items, sorry.</Typography>;
  }

  return (
    <Container>
      <Typography component="h1" variant="h2" sx={{ my: 3 }}>Shop</Typography>
      {pageContent}
    </Container>
  );
};

export default ShopPage;
