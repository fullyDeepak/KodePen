import Editor from '@monaco-editor/react';
import { Box, styled } from '@mui/material';
import React from 'react';
import { useContext } from 'react';
import { DataContext } from '../context/DataProvider';

const Container = styled(Box)`
  display: flex;
  /* height: 100%; */
`;

const Monaco = (props) => {
  const { HTMLval, CSSval, JSval, setHTMLval, setCSSval, setJSval } =
    useContext(DataContext);
  const handleEditorChange = (value, event) => {
    const setVal = eval(`set${props.boxName}val`);
    // console.log(setVal);
    setVal(value);
    // console.log(HTMLval, CSSval, JSval);
  };
  return (
    // <Container>
    <Editor
      // options={{
      //   minimap: {
      //     enabled: false,
      //   },
      // }}
      theme='vs-dark'
      height='85%'
      defaultLanguage={props.lang}
      onChange={handleEditorChange}
    />
    // </Container>
  );
};

export default Monaco;
