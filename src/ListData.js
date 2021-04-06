import React from "react";

function ListData(props) {
  return (
    <div>
      <pre>{JSON.stringify(props.eachData, null, 2)}</pre>
    </div>
  );
}

export default ListData;
