import React, { Fragment, Component } from 'react';

class ReactClassExample extends Component{
  constructor() {
    super();
    this.state = { a: 123, b: 456 };
  }
  render() {
    const { a, b, c } = this.state;
    console.log(a, b, c);

    return (
      <Fragment>
        <div>
          <h1>Letters from state: </h1>
          - initial state letters: {a} {b}
          - state letters: {c}
          <button onClick= { () => this.setState({ c: 789 }) }>
            Update letters in state
          </button>
        </div>

      </Fragment >
    );
  }


}
export default ReactClassExample;
