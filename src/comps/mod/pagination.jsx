import React from 'react'
import ReactPaginate from 'react-paginate'
import styles from './rp.module.css'

const Pagination = ({ previousLabel, nextLabel, limit, length, onPageChange }) => {
  return (
    <ReactPaginate
      previousLabel={previousLabel}
      nextLabel={nextLabel}
      pageCount={Math.ceil(Math.ceil(length / limit))}
      onPageChange={onPageChange}
      containerClassName={`${styles.paginationBtns}`}
      previousLinkClassName={`${styles.prevBtn}`}
      nextLinkClassName={`${styles.nextBtn}`}
      disabledClassName={`${styles.disabledPagination}`}
      activeClassName={`${styles.activePagination}`}
    />
  )
}

export default Pagination