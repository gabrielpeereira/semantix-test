import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Page1 from './pages/page1';
import Page2 from './pages/page2';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Page1} />
                <Route path="/page2" component={Page2} />
            </Switch>
        </BrowserRouter>
    );
}