import React from 'react';
import {Route, Switch} from 'react-router-dom';
import About from './componuts/About';
import Contact from './componuts/Contact';
import App from './App';
import List from './componuts/List';



const Simple = () => {
    return(
        <>
        <Switch>
            <Route exact path="/" component={About}></Route>
            <Route path="/Contact" component={Contact}></Route>
            <Route path="/App" component={App}></Route>
            <Route path="/List" component={List}></Route>

        </Switch>
        {/* <About/>
        <Contact/> */}
        </>
    );


};
export default Simple;