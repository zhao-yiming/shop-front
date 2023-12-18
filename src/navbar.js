import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const TopNavBar = () => {
  const navigate = useNavigate();

  const handleTabChange = (tab) => {
    navigate(`/${tab.toLowerCase()}`);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Amazonne
        </Typography>
        <Button color="inherit" sx={{ marginLeft: 10 }} onClick={() => handleTabChange('Basket')}>Basket</Button>
        <Button color="inherit" sx={{ marginLeft: 10 }} onClick={() => handleTabChange('Promo')}>Promo</Button>
        <Button color="inherit" sx={{ marginLeft: 10 }} onClick={() => handleTabChange('Category')}>Category</Button>
        <Button color="inherit" sx={{ marginLeft: 10 }} onClick={() => handleTabChange('Admin')}>Admin</Button>
        <Button color="inherit" sx={{ marginLeft: 10 }} onClick={() => handleTabChange('User')}>User</Button>
      </Toolbar>
    </AppBar>
  );
};

export default TopNavBar;