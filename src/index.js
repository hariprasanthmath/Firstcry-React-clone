import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react';
<<<<<<< HEAD

=======
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux';
import { myStore } from './reduxstore/store';
>>>>>>> 7dd6b59e7c02b87fabb226a4575a6a96a3e009eb
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
<<<<<<< HEAD
  <React.StrictMode>
  <ChakraProvider>
    <App />
    </ChakraProvider>
  </React.StrictMode>
=======
  <BrowserRouter>
  <ChakraProvider>
    <Provider store={myStore}>
    <App />
    </Provider>
  </ChakraProvider>
  </BrowserRouter>
>>>>>>> 7dd6b59e7c02b87fabb226a4575a6a96a3e009eb
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
