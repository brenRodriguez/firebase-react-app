import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as SessionProvider } from "./session/context";
import { Provider as BeerProvider } from "./beer/context";


import App from './app';

ReactDOM.render(<SessionProvider><BeerProvider><App /></BeerProvider></SessionProvider>, document.getElementById('root'));