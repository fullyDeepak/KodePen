import React from 'react';
import { GitHub } from '@mui/icons-material';
import { Box } from '@mui/system';

const BuildName = () => {
  return (
    <Box
      sx={{
        display: 'flex',
      }}>
      Made with <span className='heart'>❤️</span> by
      <a className='buildname' href='https://github.com/fullyDeepak/'>
        &nbsp;Deepak
        <GitHub fontSize='10' />
      </a>
    </Box>
  );
};

export default BuildName;
