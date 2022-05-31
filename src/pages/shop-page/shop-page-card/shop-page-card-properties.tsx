import React from 'react';
import { Box, Typography } from '@mui/material';

type Property = {
  name: string,
  value: string
};

type ShopPageCardPropertiesProps = {
  properties: Property[];
};

const ShopPageCardProperties: React.FC<ShopPageCardPropertiesProps> = ({
  properties,
}) => (
  <Box>
    {properties.map(({ name, value }) => (
      <Typography key={name}>{`${name}: ${value}`}</Typography>
    ))}
  </Box>
);

export default ShopPageCardProperties;
