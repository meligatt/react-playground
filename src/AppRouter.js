import './App.scss';
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Main from './Main';
import Board from './snippets/Board';
import Snippet2 from './snippets/snippet2';
import Snippet3 from './snippets/snippet3';
import Snippet4 from './snippets/snippet4';

const AppRouter = () => {
  return (
    <Router>
      <div>
        <Link to="/">main</Link>
      </div>
      <Route exact path="/" component={Main} />
      <Route path="/board/" component={Board} />
      <Route path="/snippet2/" component={Snippet2} />
      <Route path="/snippet3/" component={Snippet3} />
      <Route path="/snippet4/" component={Snippet4} />
    </Router>
  );
};
export default AppRouter;

