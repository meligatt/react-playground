import React, { Fragment, useState } from 'react';

function ReactHooks() {
  const [count, setCount] = useState(0);
  const [countByTwo, setCountByTwo] = useState(2);
  const [letters, setLetters] = useState({ a: 123, b: 456 });
  console.log('letters ', letters);

  return (
    <Fragment>
      <div>
        <h1>counter instance 1: </h1>
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
      <div>
        <h1>Letters from state: </h1>
        - initial state letters: {letters.a} {letters.b}
        - state letters: {letters.c}
        <button onClick= { () => setLetters({ c: 789 }) }>
          Update letters in state
        </button>
      </div>

    </Fragment>
  );


}
export default ReactHooks;
