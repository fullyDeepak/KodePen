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
    setVal(value);
  };

  // getting stored value
  const [localValue, setLocalValue] = useState(() => {
    const saved = localStorage.getItem(props.boxName);
    const initialValue = JSON.parse(saved);
    return initialValue || '';
  });

  //setting localStorage data to editors on first load
  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem(props.boxName));
    setLocalValue(localData);
  }, []);

  //setting current data to localStorage only if it present
  //useful for preveting rewriting or clearning on reload
  useEffect(() => {
    const setToLocal = eval(`${props.boxName}val`);
    if (setToLocal) {
      localStorage.setItem(props.boxName, JSON.stringify(setToLocal));
    }
  }, [HTMLval, CSSval, JSval]);

  return (
    <Editor
      theme='vs-dark'
      height='85%'
      defaultValue={localValue}
      defaultLanguage={props.lang}
      onChange={handleEditorChange}
    />
  );
};

export default Monaco;
