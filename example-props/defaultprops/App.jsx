import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>(this.props.headerProp)</h1>
        <p>{this.props.contentProp}</p>
      </div>
    );
  }
}

App.defaultProps = {
  headerProp: "Header from props...";
  contentProp: "Content from props...";
}

export default App;
