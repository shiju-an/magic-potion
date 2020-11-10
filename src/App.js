import React from 'react';
import ReactDom from 'react-dom';

const App = () => {
  return (
    <div>
      <h1>magic potion</h1>
      <h3>bubble bubble boil and trouble</h3>
    </div>
  )
}

ReactDom.render(<App />, document.getElementById("root"))