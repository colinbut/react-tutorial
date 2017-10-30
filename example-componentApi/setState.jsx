import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [];
    }

    // need to manually bind this
    this.setStateHandler = this.setStateHandler.bind(this);

  }

  setStateHandler() {
    var item = "New Item";
    var myArray = this.state.data;
    myArray.push(item);
    this.setState({data: myArray});
  }

  render() {
    return (
      <div>
        <button onClick = {this.setStateHandler}>Add</button>
        <h4>State: {this.state.data}</h4>
      </div>
    );
  }
}

export default App;
