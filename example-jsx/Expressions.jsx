import React from 'react';

class AdditionComponent extends React.Component {
  render() {
    return (
      <div>
        <p>{1 + 5}</p>
      </div>
    );
  }
}

class TenaryComponent extends React.Component {
  render() {

    var i = 1;

    return {
      <div>
        <p>{i === 1 ? 'True!' : 'False!'}</p>
      </div>
    }
  }
}

export default AdditionComponent;
export default TenaryComponent;
