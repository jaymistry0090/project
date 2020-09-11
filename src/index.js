import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Card from "./Cards";
import List from './componuts/List';
import "./index.css"
import "./componuts/List.css";
import {BrowserRouter} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import Simple from './Simple';


ReactDOM.render(
   <BrowserRouter>
  <Simple/>
</BrowserRouter> 
,  document.getElementById('root')
    
);


serviceWorker.unregister();
