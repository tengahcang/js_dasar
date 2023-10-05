// import React, { Component } from 'react';
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleIncrement = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  }

  handleDecrement = () => {
    this.setState((prevState) => ({
      count: prevState.count - 1,
    }));
  }

  render() {
    return (
      <div>
        <h1>Counter</h1>
        <p>Nilai: {this.state.count}</p>
        <button onClick={this.handleIncrement}>+</button>
        <button onClick={this.handleDecrement}>-</button>
      </div>
    );
  }
}



// export default Counter;
const myElement = <Counter />;
const myApp = myElement;
ReactDOM.createRoot(document.getElementById('root')).render(myApp);
    