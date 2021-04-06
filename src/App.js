import React, { Component } from "react";
import ListData from "./ListData";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      index: 0
    };
    this.handleClickRight = this.handleClickRight.bind(this);
    this.handleClickLeft = this.handleClickLeft.bind(this);
    this.handleClickFilter = this.handleClickFilter.bind(this);
  }

  componentDidMount() {
    fetch("https://api.spaceXdata.com/v3/launches?limit=10")
      .then((response) => response.json())
      .then((apiData) => this.setState({ data: apiData }));
  }

  handleClickFilter() {}

  handleClickLeft() {
    this.setState((prevState) => {
      if (prevState.index <= 0) this.setState({ index: 9 });
      let currState = prevState.index;
      console.log(currState);
      return { index: --currState };
    });
  }

  handleClickRight() {
    this.setState((prevState) => {
      if (prevState.index >= 9) this.setState({ index: 0 });

      let currState = prevState.index;
      console.log(currState);
      return { index: ++currState };
    });
  }

  render() {
    return (
      <div>
        <nav>
          <h1>LOGO</h1>
          <button onClick={this.handleClickFilter}>Filter</button>
        </nav>
        <div>
          <nav>
            <button onClick={this.handleClickLeft}>{"<"}</button>
            <span>{this.state.index + 1}</span>
            <button onClick={this.handleClickRight}>{">"}</button>
          </nav>
          {this.state.data.map((eachData, index) => {
            if (index === this.state.index) {
              return <ListData key={index} eachData={eachData}></ListData>;
            }
          })}
        </div>
      </div>
    );
  }
}

export default App;
