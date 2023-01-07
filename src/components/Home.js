import React from "react";

import "./style.css";

function Home() {
  return (
    <>
    {/* i had added some features to the home page. */}
      <div className="rep">
        <h1>Project Topic: Github API REST </h1>

        <h3>Working with Github API. Showing ErrorBoundary, Error404 Page and Implementing Pagination.</h3>
        <h3>Project By: <a href="*">OLADOSU ABDULLAH</a> click on the name to check 404 page </h3>
        <h3>Project Environment:<a href="https://www.altschoolafrica.com" target="_blank"
                  rel="noreferrer noopener">Altschool Africa</a></h3>
        <h3>Project Mentor: Ojo Oluwasetemi </h3>
        <h3>Project Date: Oct 2022</h3>
        <h3>Project Duration: 4 weeks</h3>
        <h3>Project Summary: </h3>
        <p>
          I use the github api to fetch data from github and display it on the page. I also use the pagination to display the data in a paginated form. I also use the error boundary to catch errors and display a custom error page.
          

        </p>
        {" "}

        
      </div>
    </>
  );
}

export default Home;
