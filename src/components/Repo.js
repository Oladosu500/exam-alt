import React, { useEffect, useState } from "react";
//import { useNavigate } from "react-router-dom";
//import ReactPaginate from "react-paginate";
import Repos from "./Repos";
import "./style.css";
import axios from "axios";
import Pagination from "./Pagination";

function Repo() {
  const [user, setUser] = useState([]);

  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [userPerPage] = useState(3);
  //get my repos
  const indexOfLastUser = currentPage * userPerPage;
  const indexOfFirstUser = indexOfLastUser - userPerPage;
  const currentUser = user.slice(indexOfFirstUser, indexOfLastUser);

  //paginate
  const paginate = (pageNumbers) => setCurrentPage(pageNumbers);

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      const res = await axios.get(
        "https://api.github.com/users/Oladosu500/repos"
      );
      setUser(res.data);
      setLoading(false);
    };
    fetchUser();
  }, []);

  return (
    <>
      <div className="all-repo">
        <h1 className="rep">My Repositories</h1>
        <Repos user={currentUser} loading={loading} />
        <Pagination
          userPerPage={userPerPage}
          totalUser={user.length}
          paginate={paginate}
        />
      </div>
    </>
  );
}
export default Repo;
