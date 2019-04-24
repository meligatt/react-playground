import React from 'react';
import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <div>
      <ul>
        <li><Link to="/board/">snippet 1</Link></li>
        <li><Link to="/snippet2/">snippet 2</Link></li>
        <li><Link to="/snippet3/">snippet 3</Link></li>
        <li><Link to="/snippet4/">snippet 4</Link></li>
      </ul>
    </div>

  );
};
export default Main;

