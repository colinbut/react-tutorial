import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: 0;
    }

    this.setNewNumber = this.setNewNumber.bind(this);
  }

  setNewNumber() {
    this.setState({data: this.state.data + 1});
  }

  render() {
    return (
      <div>
        <button onClick={this.setNewNumber}>Increment</button>
        <Content myNumber={this.state.data}/>
      </div>
    );
  }
}

// Showcase React's Lifecycle
/*
* in this order:
 * Will Mount > Did Mount
 * Get new props
 * Should update?
 * Will Update > Did Update
 * Will Unmount
 *
 */
class Content extends React.Component {

  componentWillMount() {
    console.log('Component WILL mount!');
  }

  componentDidMount() {
    console.log('Component DID mount!');
  }

  componentWillReceiveProps(newProps) {
    console.log('Component will get new props');
  }

  shouldComponentUpdate(newProps, newState) {
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('Component WILL update');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Component DID update');
  }

  componentWillUnmount() {
    console.log('Component WILL unmount');
  }

  render() {
    return (
      <div>
        <h3>{this.props.myNumber}</h3>
      </div>
    );
  }

}
