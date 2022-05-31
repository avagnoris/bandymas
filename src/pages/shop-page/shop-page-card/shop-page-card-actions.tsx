import React, { useState } from 'react';
import {
  Typography,
  Box,
  Button,
} from '@mui/material';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import NumberField from '../../../components/number-field';
import { useRootDispatch } from '../../../store/hooks';
import { createModifyCartItemAction } from '../../../store/action-creators';

type ShopPageCardActionsProps = {
  id: string,
  available: boolean,
  max: number,
};

const ShopPageCardActions: React.FC<ShopPageCardActionsProps> = ({
  id,
  available,
  max,
}) => {
  const dispatch = useRootDispatch();
  const [amount, setAmount] = useState<number>(0);

  const addToCart = (): void => {
    const addToCartAction = createModifyCartItemAction(id, amount);
    dispatch(addToCartAction);
  };

  return (
    <Box>
      {!available && (<Typography color="error">Currently not available</Typography>)}
      <Box sx={{
        display: 'flex',
        gap: 0.5,
      }}
      >
        <NumberField
          size="small"
          sx={{ alignSelf: 'stretch' }}
          InputProps={{ sx: { height: '100%' } }}
          disabled={!available}
          min={0}
          max={max}
          value={amount}
          onChange={(_, newValue) => setAmount(newValue)}
          onBlur={(_, newValue) => setAmount(newValue)}
        />
        <Button
          variant="contained"
          onClick={addToCart}
          disabled={!available}
        >
          <Typography sx={{ pr: 1 }}>Pridėti</Typography>
          <ShoppingCartIcon />
        </Button>
      </Box>
    </Box>
  );
};

export default ShopPageCardActions;
