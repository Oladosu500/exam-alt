import React from "react";
import {Link} from "react-router-dom"

function Error() {
  return (<>
    <div className="err-cont">
      <div className="err">
      <h1>Error 404 page not found</h1>
    </div>
     <div className="">
     <Link to="/">Back</Link>
   </div>
   </div></>
  );
}

export default Error;
