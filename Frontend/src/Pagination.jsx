function Pagination({paginate,currentPage,itemsPerPage,books}) {
  return (
    <ul>
        {Array(Math.ceil(books.length / itemsPerPage)) //just an array with length of needed pages number
              .fill(null)
              .map((_, index) => ( //using '_' becuase we don't care for the arrays content, just the length
                <li
                  key={index}
                  onClick={() => paginate(index + 1)} //call the paginate function with the wanted page-number
                  className={currentPage === index + 1 ? "active" : ""} //activate css for current page number
                >
                  {index + 1}
                </li>
            ))}
    </ul>
  )
}
export default Pagination