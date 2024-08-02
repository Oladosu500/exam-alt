import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import Repos from "./Repos";
import "./style.css";
import axios from "axios";
//import Pagination from "./Pagination";

function Repo() {
  // user, which is an array that will contain the repositories.
//loading, which is a boolean indicating whether the repositories are being fetched or not.
//currentPage, which is a number representing the current page of the pagination.
//userPerPage, which is a number representing the number of repositories to show per page. */}
  const [user, setUser] = useState([]);

  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [userPerPage] = useState(3);

  //indexOfLastUser is the index of the last repository to show on the current page. It is calculated by multiplying the current page number by the number of repositories per page.
//indexOfFirstUser is the index of the first repository to show on the current page. It is calculated by subtracting the number of repositories per page from indexOfLastUser.
//currentUser is an array that contains the repositories to show on the current page. It is obtained by slicing the user array using indexOfFirstUser and indexOfLastUser as the start and end indices. */}
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
    <div><h1 className="rep">My Repositories</h1></div>
      <div className="all-repo">
        
        <Repos  loading={loading} user={currentUser}  />
        
      </div>
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
    </>
  );
}
export default Repo;

