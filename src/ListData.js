import React from "react";

function ListData(props) {
  return (
    <div className="viewData">
      <pre>{JSON.stringify(props.eachData, null, 2)}</pre>
    </div>
  );
}

export default ListData;
