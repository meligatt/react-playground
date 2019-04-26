import React from 'react';
import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <div>
      <ul>
        <li><Link to= "/reactHooks/">react hooks demo</Link></li>
        <li><Link to= "/ReactClassExample/">ReactClassExample demo</Link></li>
        <li><Link to= "/board/">board demo</Link></li>
        <li><Link to= "/demo2/">RenderProps Demo</Link></li>
      </ul>
    </div>

  );
};
export default Main;

