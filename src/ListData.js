import React from "react";

function ListData(props){
    return(
        <div>
          <h1>{props.eachData.flight_number}</h1>
        </div>
    )
}

export default ListData;