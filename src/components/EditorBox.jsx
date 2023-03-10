import React, { useState } from 'react';
import { Box, styled } from '@mui/material';
import { CloseFullscreen, OneK } from '@mui/icons-material';
import Monaco from './Monaco';

const Heading = styled(Box)`
  background: #1d1e22;
  display: flex;
  padding: 9px 12px;
  align-items: center;
  gap: 0.25rem;
`;

const Header = styled(Box)`
  display: flex;
  background-color: #060606;
  color: #aaaebc;
  justify-content: space-between;
  font-weight: 500;
  align-items: center;
  padding-right: 5px;
`;

const EditorBoxDiv = styled(Box)`
  flex: 2;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-width: 1px 1px;
  border-top-color: transparent;
  border-bottom-color: transparent;
  flex-grow: 1;
  &:focus-within {
    border: 1px solid rgba(255, 255, 255, 0.9);
  }
`;

const EditorBox = (props) => {
  const [flexEnlarge, setFlexEnlarge] = useState(true);
  return (
    <EditorBoxDiv style={flexEnlarge ? null : { flexGrow: 0 }}>
      <Header>
        <Heading>
          <Box
            component='span'
            style={{
              display: 'flex',
            }}>
            {props.logo}
          </Box>
          {props.boxName}
        </Heading>
        <CloseFullscreen
          style={{ cursor: 'pointer', padding: '5px' }}
          onClick={() => setFlexEnlarge(!flexEnlarge)}
        />
      </Header>
      <Monaco lang={props.lang} boxName={props.boxName} />
    </EditorBoxDiv>
  );
};

export default EditorBox;
