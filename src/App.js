import React, { Component } from "react";
import ReactDOM from "react-dom";

class App extends Component {
  constructor() {
    super();
    this.state = { data: {
      from: 'constructor'
    } };
  }

  async componentDidMount() {
    console.log("componentDidMount Started.");
    const response = await fetch(`https://api.coinmarketcap.com/v1/ticker/?limit=10`);
    const json = await response.json();
    this.setState({ data: { json, from: 'didMount'}  });
    console.log("componentDidMount Completed.");
  }

  render() {
    console.log("Render called.");
    return <div>{JSON.stringify(this.state.data)}</div>;
  }
}

class App2 extends Component {
  constructor() {
    super();
    this.state = { data: { from: 'constructor' } };
  }

  async componentWillMount() {
    console.log("componentWillMount Started.");
    const response = await fetch(`https://api.coinmarketcap.com/v1/ticker/?limit=10`);
    const json = await response.json();
    this.setState({ data: { json, from: 'willMount'}  });
    console.log("componentWillMount Completed.");
  }

  render() {
    console.log("Render called.");
    return <div>{JSON.stringify(this.state.data)}</div>;
  }
}

ReactDOM.render(<App2 />, document.getElementById("app"));

export default App;