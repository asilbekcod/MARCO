import React from 'react';
import Router from '../../routes/routes';
import Navbar from '../../components/Navbar/Navbar';
import { Box, Typography } from '@mui/material'
import Home from '../../pages/Home/Home';
import About from '../../pages/About/About';
import What from '../../pages/What/What';
import Reserve from '../../pages/Reserve/Reserve';
import Food from '../../pages/Food/Food';
import Hulda from '../../pages/Hulda/Hulda';
import Latest from '../../pages/Latest/Latest';
export default () => (
  <Box>
    <Navbar />
    <Home />
    <About />
    <What />
    <Reserve />
    <Food />
    <Hulda />
    <Latest />
  </Box>
);