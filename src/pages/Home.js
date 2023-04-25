import React from 'react'
import { Box } from '@mui/material';


import Exercises from '../components/Exercises';
import HeroBanner from '../components/HeroBanner';
import SearchExercises from '../components/SearchExercises';

const Home = () => {
  return (
    <Box>
      <HeroBanner />
      <Exercises />
      <SearchExercises />
    </Box>
  )
}

export default Home;