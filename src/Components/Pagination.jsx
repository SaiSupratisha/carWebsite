import "../styles/cars.css";
 
function Pagination({ currentPage, totalPages, setPage }) {
  return (
<div className="pagination">
 
      <button
        disabled={currentPage === 1}
        onClick={() => setPage(currentPage - 1)}
>
        Previous
</button>
 
      {[...Array(totalPages)].map((_, index) => (
<button
          key={index}
          className={currentPage === index + 1 ? "active-page" : ""}
          onClick={() => setPage(index + 1)}
>
          {index + 1}
</button>
      ))}
 
      <button
        disabled={currentPage === totalPages}
        onClick={() => setPage(currentPage + 1)}
>
        Next
</button>
 
    </div>
  );
}
 
export default Pagination;