import React, { Fragment, useState } from 'react';

function ReactHooks() {
  const [count, setCount] = useState(0);
  const [countByTwo, setCountByTwo] = useState(2);
  return (
    <Fragment>
      <div>
        <h1>counter isntance 1: </h1>
        - couter value: {count}
        <button onClick= { () => setCount(count + 1) }>
          increment
        </button>
      </div>
      <div>
        <h1>counter instance 2: </h1>
        - counter value: {countByTwo}
        <button onClick= { () => setCountByTwo(countByTwo + 2) }>
          increment by 2
        </button>
      </div>

    </Fragment>
  );


}
export default ReactHooks;
