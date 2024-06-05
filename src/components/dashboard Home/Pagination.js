// src/components/Pagination.js
import React from 'react';
import ReactPaginate from 'react-paginate';
import CustomDropdown from './CustomDropdown';
import './Pagination.css';

const Pagination = ({ page, pageSize, totalRecords, setPage, setPageSize }) => {
  const pageCount = Math.ceil(totalRecords / pageSize);

  const handlePageChange = ({ selected }) => {
    setPage(selected + 1);
  };

  const handlePageSizeChange = (size) => {
    setPageSize(size);
    setPage(1); 
  };

  return (
    <div className="pagination-container">
      <ReactPaginate
        previousLabel={page === 1 ? null : 'Previous'}
        nextLabel={page === pageCount ? null : 'Next'}
        breakLabel={'...'}
        breakClassName={'break-me'}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageChange}
        containerClassName={'pagination'}
        subContainerClassName={'pages pagination'}
        activeClassName={'active'}
        forcePage={page - 1}
      />
      <div className="select-container">
        <CustomDropdown pageSize={pageSize} handlePageSizeChange={handlePageSizeChange} />
      </div>
    </div>
  );
};

export default Pagination;
