import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Box, Container, AppBar, Grid } from '@mui/material';
import catForm from './components/RandomCatForm';
import catList from './components/RandomCatList';
import CatImage from './components/RandomCatImage';

function App() {
  return (
    <Box>

      <Container>

        <AppBar></AppBar>

        {catForm()}

        {catList()}

        {CatImage()}

      </Container>

    </Box>
  );
}

export default App;
