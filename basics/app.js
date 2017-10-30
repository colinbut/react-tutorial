import React from 'react';
import ReactDOM from 'react-dom';

// best practice is to name variables names for components starting with uppercase
var MyComponent = React.createClass({
  render: function() {
    return (
      <h1>Hello World!</h1>
    );
  }
});

ReactDOM.render(<MyComponent/>, document.getElementById('myDiv'));
