interface IPagination {
  currentPage: number
  totalCount: number
  itemsPerPage: number
  nextPage: () => void
  prevPage: () => void
}

const Pagination = ({ currentPage, totalCount, itemsPerPage, nextPage, prevPage }: IPagination) => {
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage

  return (
    <>
      {Math.ceil(totalCount / itemsPerPage) > 1 && (
        <div data-cy="pagination" className="flex items-center justify-end gap-2 py-6 text-white">
          <span
            className={`
              cursor-pointer text-white hover:text-main-blue
              ${currentPage === 1 ? 'pointer-events-none text-opacity-50' : ''}
            `}
            onClick={prevPage}>
            Previous
          </span>
          <span>
            {indexOfFirstItem + 1}-{Math.min(indexOfLastItem, totalCount)} of {totalCount}
          </span>
          <span
            className={`
              hover:text-main-blue' cursor-pointer text-white
              ${currentPage === Math.ceil(totalCount / itemsPerPage) ? 'pointer-events-none text-opacity-50' : ''}
            `}
            onClick={nextPage}>
            Next
          </span>
        </div>
      )}
    </>
  )
}

export default Pagination
