import { useState, useEffect } from "react";
import axios from 'axios';
import './Content.css';
import Book from "./Book";
import Pagination from "./Pagination";

function Content() {
  const [books, setBooks] = useState([]);
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  //const [selectedCategory, setSelectedCategory] = useState('all'); 

  useEffect(() => { // on mount, get all books from api
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/allbooks');
        const data = response.data.allBooks;
        setBooks(data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);

  const indexLastItem = currentPage * itemsPerPage; // itemsPerPage hardcoded to start from 6
  const indexFirstItem = indexLastItem - itemsPerPage;
  const currentBooks = books.slice(indexFirstItem, indexLastItem); // relevant slice of array data for current page

  function paginate (pageNumber) { //function for click-event - num of page chosen by client
    setCurrentPage(pageNumber); //affects current array data slice
  };

  return (
    <div className='content'>
      {currentPage===1 && <div className="quote">
        <cite>"I find television very educating. Every time somebody turns on the set, I go into the other room and read a book." </cite>
        <span> - Groucho Marx</span>
      </div>}
      <div className="book">
        {currentBooks.map((el) => <Book data={el} key={el._id} />)}
      </div>
      <div className="pagination">
        {books.length > itemsPerPage && <Pagination books={books} paginate={paginate} currentPage={currentPage} itemsPerPage={itemsPerPage} />}
      </div>
    </div>
  );
}

export default Content;
