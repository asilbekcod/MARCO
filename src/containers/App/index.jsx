import React from 'react';
import Router from '../../routes/routes';
import Navbar from '../../components/Navbar/Navbar';
import { Box, Typography } from '@mui/material'
import Home from '../../pages/Home/Home';
import About from '../../pages/About/About';
export default () => (
  <Box>
    <Navbar />
    <Home />
    <About />
  </Box>
);