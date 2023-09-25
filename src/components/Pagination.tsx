import React, {useState} from 'react'
import ReactPaginate from 'react-paginate';
//import JsonData from "../MOCK_DATA.json";
import JsonData from "../MOCK_DATA.json";

const Pagination = () => {
  const [users, setUsers] = useState(JsonData.slice(0, 200));
  const [pageNumber, setPageNumber] = useState(0);

  const usersPerPage = 10;
  const pagesVisited = pageNumber * usersPerPage;


  const pageCount = Math.ceil(users.length / usersPerPage);

  const changePage = ({ selected }:any) => {
    setPageNumber(selected);
  };

  return (
    <div className='pagination'>
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </div>
  )
}

export default Pagination