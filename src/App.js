import React, { Component } from "react";
import ListData from "./ListData";
import Popup from "./Popup";
import ViewTable from "./ViewTable";
import "./index.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      filterData: [],
      index: 0,
      limit: 30,
      trigger: false,
      viewToggle: true
    };
    this.handleClickRight = this.handleClickRight.bind(this);
    this.handleClickLeft = this.handleClickLeft.bind(this);
    this.handleTrigger = this.handleTrigger.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
    this.changeView = this.changeView.bind(this);
    this.reset = this.reset.bind(this);
  }

  componentDidMount() {
    fetch("https://api.spaceXdata.com/v3/launches?limit=" + this.state.limit)
      .then((response) => response.json())
      .then((apiData) => this.setState({ data: apiData, filterData: apiData }));
  }

  handleTrigger = () => {
    this.setState((prevTrigger) => {
      let currentTrigger = !prevTrigger.trigger;
      if (currentTrigger) {
        return { trigger: true };
      } else {
        return { trigger: false };
      }
    });
  };

  handleFilter = (formData, launchSuccess, landSuccess, launchYear) => {
    console.log(launchSuccess == null);
    if (launchSuccess || landSuccess || launchYear) {
      let url ="https://api.spaceXdata.com/v3/launches?limit="+this.state.limit+"&launch_success="+launchSuccess+"&land_success="+landSuccess+"&launch_year="+launchYear;
      console.log(url);
      fetch(url)
        .then((response) => response.json())
        .then((data) => this.setState({ filterData: data,index:0 }));
    }
    this.handleTrigger();
  };

  handleClickLeft= () => {
    this.setState((prevState) => {
      if (prevState.index <= 0)
        this.setState({ index: this.state.filterData.length - 1 });
      let currState = prevState.index;
      console.log(currState);
      return { index: --currState };
    });
  }

  handleClickRight() {
    this.setState((prevState) => {
      if (prevState.index >= this.state.filterData.length - 1)
        this.setState({ index: 0 });

      let currState = prevState.index;
      console.log(currState);
      return { index: ++currState };
    });
  }

  changeView() {
    this.setState((prevView) => {
      let currentView = !prevView.viewToggle;
      if (currentView) {
        return { viewToggle: true };
      } else {
        return { viewToggle: false };
      }
    });
  }

  reset = () => {
    this.setState({filterData:this.state.data})
  }

  render() {
    return (
      <div>
        <nav className="mainNav">
          <h1 className="mainNav logo">LOGO</h1>
          {(!this.state.trigger) 
          ?(
            <div>
              <button onClick={this.reset}>Reset</button>
              <button onClick={this.handleTrigger}>Filter</button>
            </div>
          ) 
          :(" ")}
        </nav>
        <Popup
          trigger={this.state.trigger}
          setTrigger={this.handleTrigger}
          handleFilter={this.handleFilter}
        />
        <div>
          <nav className="bodyNav">
          {
            (this.state.filterData.length)
            ?<div>
              <button onClick={this.handleClickLeft}>{"<"}</button>
              <span>{this.state.index + 1} of {this.state.filterData.length}</span>
              <button onClick={this.handleClickRight}>{">"}</button>
              <button className="viewButton" onClick={this.changeView}>view {this.state.viewToggle ? "table" : "json"}</button>
            </div>
            :" "
          }           
          </nav>
          <div>
            {this.state.filterData.length 

            ?(// eslint-disable-next-line
              this.state.filterData.map((eachData, index) => {
                if (index === this.state.index && this.state.viewToggle) {
                  return <ListData key={index} eachData={eachData}></ListData>;
                } 
                else if (index === this.state.index && this.state.viewToggle) 
                {
                  return <ViewTable key={index} eachData={eachData} />;
                }
              })
            )

            :(<h1>"NO DATA!.Try with other filter options or press reset."</h1>)

            }
            
          </div>
        </div>
      </div>
    );
  }
}

export default App;
