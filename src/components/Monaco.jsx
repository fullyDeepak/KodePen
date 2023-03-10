import Editor from '@monaco-editor/react';
import { Box, styled } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { DataContext } from '../context/DataProvider';

const Monaco = (props) => {
  const { HTMLval, CSSval, JSval, setHTMLval, setCSSval, setJSval } =
    useContext(DataContext);
  const handleEditorChange = (value, event) => {
    const setVal = eval(`set${props.boxName}val`);
    setLocalValue(value);
    console.log('hello');
    setVal(value);
    // console.log(HTMLval, CSSval, JSval);
  };
  const [localValue, setLocalValue] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem(props.boxName);
    const initialValue = JSON.parse(saved);
    localStorage.setItem(props.boxName, JSON.stringify(initialValue));
    return initialValue || '';
  });

  useEffect(() => {
    // const getFromLocal = eval(`${props.boxName}val`);
    // console.log(getFromLocal);
    const localData = JSON.parse(localStorage.getItem(props.boxName));
    console.log(JSON.parse(localStorage.getItem('HTML')));
    setLocalValue(localData);
    localStorage.setItem(props.boxName, JSON.stringify(localData));
  }, []);

  //bug here
  useEffect(() => {
    const setToLocal = eval(`${props.boxName}val`);
    if (setToLocal) {
      localStorage.setItem(props.boxName, JSON.stringify(setToLocal));
    }
  }, [HTMLval, CSSval, JSval]);
  return (
    <Editor
      // options={{
      //   minimap: {
      //     enabled: false,
      //   },
      // }}
      theme='vs-dark'
      height='85%'
      defaultValue={localValue}
      defaultLanguage={props.lang}
      onChange={handleEditorChange}
    />
  );
};

export default Monaco;
