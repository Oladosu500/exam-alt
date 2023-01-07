import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import Repos from "./Repos";
import "./style.css";
import axios from "axios";
//import Pagination from "./Pagination";

function Repo() {
  const [user, setUser] = useState([]);

  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [userPerPage] = useState(3);

  const indexOfLastUser = currentPage * userPerPage;
  const indexOfFirstUser = indexOfLastUser - userPerPage;
  const currentUser = user.slice(indexOfFirstUser, indexOfLastUser);

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      const res = await axios.get(
        "https://api.github.com/users/Oladosu500/repos"
      );
      setUser(res.data);
      setLoading(false);

      console.log(res.data);
    };
    fetchUser();
  }, []);


  const paginate = ({ selected }) => {
    setCurrentPage(selected + 1);
  };

  //the initial submission the pagination was not working but i have fixed it now using react paginate

  return (
    <>
    
      <div className="all-repo">
        <h1 className="rep">My Repositories</h1>
        <Repos  loading={loading} user={currentUser}  />
        <ReactPaginate
          previousLabel={"prev"}
          nextLabel={"next"}
          pageCount={Math.ceil(user.length / userPerPage)}
          onPageChange={paginate}
          containerClassName={"paginationBttns"}
          previousLinkClassName={"previousBttn"}
          nextLinkClassName={"nextBttn"}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationActive"}
        />
      </div>
    </>
  );
}
export default Repo;

