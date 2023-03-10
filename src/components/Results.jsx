import React, { useState, useEffect } from 'react';
import { Box, styled } from '@mui/material';
import { useContext } from 'react';
import { DataContext } from '../context/DataProvider';

const Results = () => {
  const [src, setSrc] = useState('');

  const { HTMLval, CSSval, JSval } = useContext(DataContext);
  const srcCode = `
    <html>
      <body>${HTMLval}</body>
      <style>${CSSval}</style>
      <script>${JSval}</script>
    </html>
  `;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrc(srcCode);
    }, 1000);
    return () => clearTimeout(timeout);
  }, [HTMLval, CSSval, JSval]);
  return (
    <Box sx={{ height: '374px', overflow: 'hidden' }}>
      <iframe
        srcDoc={src}
        title='Output'
        sandbox='allow-popups allow-scripts'
        width='100%'
        height='100%'
        style={{ border: 'none' }}
      />
    </Box>
  );
};

export default Results;
