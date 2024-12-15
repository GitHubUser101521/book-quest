type PaginationProps = {
    numberOfPage: number,
    currentPage: number,
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>,
}

function Pagination({ numberOfPage, currentPage, setCurrentPage }: PaginationProps) {
    const pages = [];
    for (let i = 1; i <= numberOfPage; i++) {
        pages.push(i)
    }
  return (
    <div className="text-center flex w-full justify-center my-8 gap-4 items-center">
        <button 
            className="pagination-btn" 
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
        >&lt;</button>
        <div className="w-1/3 flex gap-2 overflow-auto justify-center">
            {pages.map((page) => (
                <span 
                    className={`text-2xl hover:cursor-pointer ${page === currentPage ? 'underline' : ''}`}
                    onClick={() => setCurrentPage(page)}
                >
                    {page}
                </span>
            ))}
        </div>
        <button 
            className="pagination-btn"
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === numberOfPage}
        >&gt;</button>
    </div>
  )
}

export default Pagination
