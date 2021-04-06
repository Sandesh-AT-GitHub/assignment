import React, { Component } from "react";

class Popup extends Component {
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
      <div className="outer">
        <div className="inner">
          <button onClick={() => this.props.setTrigger(false)}>close</button>
          <form onSubmit={this.handleSubmit}>
            <label for="cb1">Launch Success</label>
            <input type="radio" name="input1" value="true" />
            True
            <input type="radio" name="input1" value="false" />
            False
            <input type="radio" name="input1" value="null" />
            Null
            <br />
            <label>Land Success</label>
            <input type="radio" name="input2" value="true" />
            True
            <input type="radio" name="input2" value="false" />
            False
            <input type="radio" name="input2" value="null" />
            Null
            <br />
            <label>Launch Year</label>
            <input type="number" name="input3" placeholder="filter3" />
            <br />
            <button type="submit" value="Submit">
              submit
            </button>
          </form>
        </div>
      </div>
    ) : (
      " "
    );
  }
}
export default Popup;
