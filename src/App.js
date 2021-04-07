import React, { Component } from "react";
import ListData from "./ListData";
import Popup from "./Popup";
import ViewTable from "./ViewTable";
import "./index.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      loading:true,
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
      .then((apiData) => this.setState({ data: apiData, filterData: apiData,loading:false }));
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
        <header className="mainNav">
          <h1 className="logo">spaceXData-UI</h1>
          <h1 className="logo-sm">spaceXD-UI</h1>
          {
          (!this.state.trigger) 
          ?
          (<div className="btn">
              <button className="resetBtn" onClick={this.reset}>Reset</button>
              <button className="filterBtn" onClick={this.handleTrigger}>Filter</button>
            </div>) 
          :
          (" ")
          }
        </header>

        <Popup
          trigger={this.state.trigger}
          setTrigger={this.handleTrigger}
          handleFilter={this.handleFilter}
        />

        <div class="mainBody">
          
          <nav>
          {
            (this.state.filterData.length)
            ?<div className="bodyNavbar">
              <div className="pageNav">
              <button className="rightBtn" onClick={this.handleClickLeft}>{"<"}</button>
              <span className="pageNum" >{this.state.index + 1} of {this.state.filterData.length}</span>
              <button className="leftBtn" onClick={this.handleClickRight}>{">"}</button>
              </div>
              <button className="viewBtn" onClick={this.changeView}>view {this.state.viewToggle ? "table" : "json"}</button>
            </div>
            :" "
          }           
          </nav>

          <div>
          {this.state.loading
          ?
          <div className="viewNone">
            <h6>loading....</h6>
          </div>
          :
          <div>
            {this.state.filterData.length 

            ?(// eslint-disable-next-line
              this.state.filterData.map((eachData, index) => {
                if (index === this.state.index && this.state.viewToggle) {
                  return <ListData key={index} eachData={eachData}></ListData>;
                } 
                else if (index === this.state.index && !this.state.viewToggle) 
                {
                  return <ViewTable key={index} eachData={eachData} />;
                }
              })
            )

            :
            (<div className="viewNone">
              <h6>
                <ul>
                  <h1>ERROR</h1>
                  <li>* No data! for the given filter.</li>
                  <li>* Change the filters.</li>
                  <li>* Or press reset button.</li>
                </ul>
              </h6>
            </div>)
            }

          </div>
          }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
