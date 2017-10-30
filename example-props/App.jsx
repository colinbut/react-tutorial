import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.headerProp}</h1>
        <p>{this.props.contentProp}</p>
      </div>
    );
  }
}

export default App;
