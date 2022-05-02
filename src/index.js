import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Appwrite, {AppwriteContext} from './Components/Appwrite';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
     <AppwriteContext.Provider value={new Appwrite()}>
        <App />
        </AppwriteContext.Provider>
    </BrowserRouter>
);

