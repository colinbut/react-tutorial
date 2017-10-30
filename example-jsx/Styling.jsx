import React from 'react';

class StyledComponent extends React.Component {
  render() {

    var style = {
      fontSize: 100,
      color: '##FFFF'
    };

    return (
      <div>
        <h1 style={style}>Header</h1>
      </div>
    );
  }
}

export default StyledComponent;
