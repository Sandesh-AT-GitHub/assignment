import React, { Component } from "react";

class Filter extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleFilter(
      e.target,
      e.target.input1.value,
      e.target.input2.value,
      e.target.input3.value
    );
  }

  render() {
    return this.props.trigger ? (
      <div className="filterOuter">
        <div className="filterInner">
          <h2>Filter By</h2>
          <hr/>
          <form onSubmit={this.handleSubmit}>

            <div className="group">
              <label class="groupLabel" for="cb1">Launch Success</label>
                <div className="groupInput">
                <input className="start" type="radio" name="input1" value="true" />
                True
                <input type="radio" name="input1" value="false" />
                False
                </div>
            </div>

            <div className="group">
              <label className="groupLabel">Land Success</label>
                <div className="groupInput">
                <input className="start" type="radio" name="input2" value="true" />
                True
                <input type="radio" name="input2" value="false" />
                False
                </div>
            </div>

            <div className="group">
              <label class="groupLabel">Launch Year</label>
                <div className="groupInput">
                <input style={{width:"200px"}}className="start" type="number" name="input3" placeholder="Enter launch year" />
                </div>
            </div>
            
            <div className="groupBtn">
              <button onClick={() => this.props.setTrigger()}>close</button>
              <button type="submit" value="Submit">submit</button>
            </div>
          </form>
        </div>
      </div>
    ) : (
      " "
    );
  }
}
export default Filter;
