import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Records from './pages/Records';

const Routes = () => (
<BrowserRouter>
    <Header/>
    <switch>
        <Route path="/" exact>
            <Home/>
        </Route>
        <Route path="/records">
            <Records/>
        </Route>
    </switch>
</BrowserRouter>
);

export default Routes;