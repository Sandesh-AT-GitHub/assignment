import React,{Component} from 'react';
import ListData from "./ListData"
import './App.css';

class App extends Component{
constructor(){
  super()
    this.state={
      data:[]
    }
}

componentWillMount(){

  fetch("https://api.spaceXdata.com/v3/launches?limit=100")
  .then( response => response.json())
  .then( apiData => this.setState({data:apiData}))

}

render() {
  return (
    <div>
      {
      this.state.data.map((eachData,index) => {
          return(
            <ListData key={index} eachData={eachData} ></ListData>
          )
        })
      }
    </div>
  );
}
}

export default App;
