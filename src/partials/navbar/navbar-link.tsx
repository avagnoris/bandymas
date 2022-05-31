import { styled } from '@mui/material';
import { NavLink } from 'react-router-dom';

const NavbarLink = styled(NavLink)(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  textDecoration: 'none',
  color: theme.palette.common.white,
  padding: theme.spacing(0, 2),
  ...theme.mixins.toolbar,

  ':hover': {
    color: theme.palette.grey[200],
    backgroundColor: theme.palette.grey[800],
  },

  '&.active': {
    color: theme.palette.primary.light,
    boxShadow: `inset 0 -4px 0 ${theme.palette.primary.light}`,
  },
}));

export default NavbarLink;
