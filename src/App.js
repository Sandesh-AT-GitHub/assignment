import React, { Component } from "react";
import ViewJson from "./Component/ViewJson";
import ViewTable from "./Component/ViewTable";
import Filter from "./Component/Filter";
import "./index.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      limit: 100,
      loading:true,
      data: [],
      filterData: [],
      index: 0,
      filterPageToggler: false,
      viewPageToggler: true
    };

    this.handleClickRight = this.handleClickRight.bind(this);
    this.handleClickLeft = this.handleClickLeft.bind(this);
    this.handleFilterPageToggler= this.handleFilterPageToggler.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
    this.changeView = this.changeView.bind(this);
    this.reset = this.reset.bind(this);
  }

  componentDidMount() {

    fetch("https://api.spaceXdata.com/v3/launches?limit=" + this.state.limit)
      .then((response) => response.json())
      .then((apiData) => this.setState({ data: apiData, filterData: apiData,loading:false }));

  }

  handleFilterPageToggler = () => {

    this.setState({ filterPageToggler: !this.state.filterPageToggler })

  };

  handleFilter = (formData, launchSuccess, landSuccess, launchYear) => {

    if (launchSuccess || landSuccess || launchYear) {
      let url ="https://api.spaceXdata.com/v3/launches?limit="+this.state.limit+"&launch_success="+launchSuccess+"&land_success="+landSuccess+"&launch_year="+launchYear;
      fetch(url)
        .then((response) => response.json())
        .then((data) => this.setState({ filterData: data,index:0 }));
    }

    this.handleFilterPageToggler();

  };

  handleClickLeft= () => {
    this.setState((prevState) => {
      if (prevState.index >= this.state.filterData.length - 1)
        this.setState({ index: 0 });

      let currState = prevState.index;
      return { index: ++currState };
    });
  }

  handleClickRight=()=> {
    this.setState((prevState) => {
      if (prevState.index <= 0)
        this.setState({ index: this.state.filterData.length - 1 });
      let currState = prevState.index;
      return { index: --currState };
    });

  }

  changeView=()=> {

    this.setState({viewPageToggler: !this.state.viewPageToggler})

  }

  reset = () => {

    this.setState({filterData:this.state.data})

  }

  render() {
    return (
      <div>
        <header className="mainNav">
          <h1 className="logo">spaceXDataUI</h1>
          <h1 className="logo-sm">sXdUI</h1>
          {
          !this.state.filterPageToggler &&
          (<div className="btn">
              <button className="resetBtn" onClick={this.reset}>Reset</button>
              <button className="filterBtn" onClick={this.handleFilterPageToggler}>Filter</button>  
          </div>)
          }
        </header>

        <Filter
          filterPageToggler={this.state.filterPageToggler}
          handleFilterPageToggler={this.handleFilterPageToggler}
          handleFilter={this.handleFilter}
        />

        <div class="mainBody">
          
          <nav>
          {
            (this.state.filterData.length)
            ?<div className="bodyNavbar">
              <div className="pageNav">
              <button className="rightBtn" onClick={this.handleClickRight}>{"<"}</button>
              <span className="pageNum" >{this.state.index + 1} of {this.state.filterData.length}</span>
              <button className="leftBtn" onClick={this.handleClickLeft}>{">"}</button>
              </div>
              <button className="viewBtn" onClick={this.changeView}>view {this.state.viewPageToggler ? "table" : "json"}</button>
            </div>
            :" "
          }           
          </nav>

          <div>
            {this.state.loading
              ?<div className="viewNone">
                <h6>loading....</h6>
              </div>
              : <div>
                  {this.state.filterData.length

                  ?(this.state.viewPageToggler
                    ? 
                      <ViewJson  eachData={this.state.filterData[this.state.index]}/>
                    :
                      <ViewTable  eachData={this.state.filterData[this.state.index]} />
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
