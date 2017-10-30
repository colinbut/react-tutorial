import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor() {
    super();
    this.findDomNodeHandler = this.findDomNodeHandler.bind(this);
  }

  findDomNodeHandler() {
    var myDiv = document.getElementById('myDiv');
    ReactDOM.findDOMNode(myDiv).style.color = 'blue'; // changing style of the div
  }

  render() {
    return (
      <div>
        <button onClick={this.findDomNodeHandler}>Find the Node</button>
        <div id = "myDiv">Me</div>
      </div>
    );
  }
}
