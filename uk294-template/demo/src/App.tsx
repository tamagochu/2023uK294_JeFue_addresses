import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Box, Container, AppBar, Grid } from '@mui/material';
import catForm from './RandomCatForm';
import catList from './RandomCatList';

function App() {
  return (
    <Box>

      <Container>

        <AppBar></AppBar>

        {catForm()}

        {catList()}

      </Container>

    </Box>
  );
}

export default App;
