import React from 'react'
import ReactPaginate from 'react-paginate';
import { IProduct } from './Card';

type IPagination = {
  products: IProduct[],
  usersPerPage: number,
  setPageNumber: any
}

const Pagination = ({ products, usersPerPage, setPageNumber }: IPagination ) => {

  const pageCount = Math.ceil(products.length / usersPerPage);

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