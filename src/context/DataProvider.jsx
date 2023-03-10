import { createContext, useState } from 'react';

export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [HTMLval, setHTMLval] = useState('');
  const [CSSval, setCSSval] = useState('');
  const [JSval, setJSval] = useState('');
  return (
    <DataContext.Provider
      value={{ HTMLval, CSSval, JSval, setHTMLval, setCSSval, setJSval }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
