import React from 'react';
import { Typography, Container, Box } from '@mui/material';
import Img from '../../components/img';
import { useRootSelector } from '../../store/hooks';
import { selectUser } from '../../store/selectors';

const ProfilePage: React.FC = () => {
  const user = useRootSelector(selectUser);

  const needsProfileUpdate = user && (!user.name || !user.surname || !user.img);

  return (
    <Container>
      <Typography
        component="h1"
        variant="h3"
        sx={{ textAlign: 'center' }}
      >
        {
          needsProfileUpdate
            ? 'Please fill your profile data'
            : `Hello, ${user?.name} ${user?.surname}`
        }

      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Img src={user?.img} />
      </Box>
    </Container>
  );
};

export default ProfilePage;
