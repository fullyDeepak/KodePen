import { Box, styled } from '@mui/material';
import React from 'react';
import EditorBox from './EditorBox';
// import MSEditor from './MSEditor';

const CodeBoxes = styled(Box)`
  display: flex;
  gap: 0.8rem;
  border: 1px solid rgb(108, 108, 108);
  border-width: 1px 0px;
  background-color: black;
  box-sizing: border-box;
`;

const CodeboxDiv = styled(Box)`
  padding: 0;
  margin: 0;
  padding-bottom: 20px;
  background-color: black;
`;

const HTMLlogo = (
  <svg
    xmlnsXlink='http://www.w3.org/1999/xlink'
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 15 15'
    className='file-type-icon'
    id='icon-file-html'
    width='17'
    height='17'>
    <rect fill='#FF3C41' width='15' height='15' rx='4'></rect>
    <path
      d='M10.97 2.29a.563.563 0 0 0-.495-.29.572.572 0 0 0-.488.277l-5.905 9.86a.565.565 0 0 0-.007.574c.102.18.287.289.495.289a.572.572 0 0 0 .488-.277l5.905-9.86a.565.565 0 0 0 .007-.574'
      fill='#28282B'></path>
  </svg>
);

const CSSlogo = (
  <svg
    xmlnsXlink='http://www.w3.org/1999/xlink'
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 15 15'
    className='file-type-icon'
    id='icon-file-css'
    width='17'
    height='17'>
    <rect fill='#0EBEFF' width='15' height='15' rx='4'></rect>
    <path
      d='M8 8.366l1.845 1.065a.507.507 0 0 0 .686-.181.507.507 0 0 0-.186-.685L8.5 7.5l1.845-1.065a.507.507 0 0 0 .186-.685.507.507 0 0 0-.686-.181L8 6.634v-2.13A.507.507 0 0 0 7.5 4c-.268 0-.5.225-.5.503v2.131L5.155 5.569a.507.507 0 0 0-.686.181.507.507 0 0 0 .186.685L6.5 7.5 4.655 8.565a.507.507 0 0 0-.186.685c.134.232.445.32.686.181L7 8.366v2.13c0 .271.224.504.5.504.268 0 .5-.225.5-.503V8.366z'
      fill='#282828'></path>
  </svg>
);

const JSlogo = (
  <svg
    xmlnsXlink='http://www.w3.org/1999/xlink'
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 15 15'
    className='file-type-icon'
    id='icon-file-js'
    width='17'
    height='17'>
    <rect fill='#FCD000' width='15' height='15' rx='4'></rect>
    <path
      d='M6.554 3.705c0 .267-.19.496-.452.543-1.2.217-2.12 1.61-2.12 3.275 0 1.665.92 3.057 2.12 3.274a.554.554 0 0 1-.205 1.087c-1.733-.322-3.022-2.175-3.022-4.361 0-2.187 1.289-4.04 3.022-4.362a.554.554 0 0 1 .657.544zm1.892 0c0-.347.316-.607.657-.544 1.733.322 3.022 2.175 3.022 4.362 0 2.186-1.289 4.04-3.022 4.361a.554.554 0 0 1-.205-1.087c1.2-.217 2.12-1.61 2.12-3.274 0-1.665-.92-3.058-2.12-3.275a.551.551 0 0 1-.452-.543z'
      fill='#282828'></path>
  </svg>
);

const Code = () => {
  return (
    <CodeboxDiv>
      <CodeBoxes>
        <EditorBox lang='html' boxName='HTML' logo={HTMLlogo} />
        <EditorBox lang='css' boxName='CSS' logo={CSSlogo} />
        <EditorBox lang='javascript' boxName='JS' logo={JSlogo} />
      </CodeBoxes>
    </CodeboxDiv>
  );
};

export default Code;
