import './App.scss';
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Main from './Main';
import reactHooks from './snippets/reactHooks';
import demo2 from './snippets/demo2';
import demo3 from './snippets/demo3';

const AppRouter = () => {
  return (
    <Router>
      <div>
        <Link to= "/">React playground</Link>
      </div>
      <Route exact path ="/" component ={ Main } />
      <Route path ="/demo3/" component= { demo3 } />
      <Route path= "/reactHooks/" component= { reactHooks } />
      <Route path= "/demo2/" component= { demo2 } />
    </Router>
  );
};
export default AppRouter;

