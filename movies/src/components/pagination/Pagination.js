import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  // Limit pages between 1 and 250
  const maxPages = Math.min(totalPages, 250);
  const minPage = 1;

  const handlePreviousPage = () => {
    if (currentPage > minPage) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < maxPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px 0' }}>
      <button
        onClick={handlePreviousPage}
        disabled={currentPage === minPage}
        style={{ marginRight: '10px', padding: '10px 20px' }}
      >
        Previous
      </button>
      <span style={{ fontSize: '16px', margin: '0 10px' }}>
        Page {currentPage} of {maxPages}
      </span>
      <button
        onClick={handleNextPage}
        disabled={currentPage === maxPages}
        style={{ marginLeft: '10px', padding: '10px 20px' }}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
