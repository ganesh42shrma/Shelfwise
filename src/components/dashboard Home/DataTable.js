import React, { useState, useEffect } from 'react';
import { CSVLink } from 'react-csv';
import { useAuth } from '../../contexts/authContext';
import { fetchBooks } from '../../services/api';
import Pagination from './Pagination';
import SearchBar from '../searchBar/searchBar';
import './dataTable.css';
import { useNavigate } from 'react-router-dom';
import Card from './Card'; // Import the Card component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowLeft,faBook,faDownload } from '@fortawesome/free-solid-svg-icons'

const DataTable = () => {
  const { currentUser } = useAuth();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [searchPerformed, setSearchPerformed] = useState(false);

  const navigate = useNavigate();

  const handleSearch = (searchResults) => {
    setData(searchResults);
    setSearchPerformed(true);
  };

  const fetchFirstPage = async () => {
    setLoading(true);
    try {
      const result = await fetchBooks(1, pageSize);
      setData(result.docs);
    } catch (error) {
      console.error("Error loading books", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    const loadBooks = async () => {
      setLoading(true);
      try {
        const result = await fetchBooks(page, pageSize);
        const books = result.docs.map(book => ({
          title: book.title,
          author_name: book.author_name?.join(', ') || 'N/A',
          first_publish_year: book.first_publish_year || 'N/A',
          subject: book.subject?.join(', ') || 'N/A',
          author_birth_date: book.author_birth_date || 'N/A',
          author_top_work: book.author_top_work || 'N/A',
          ratings_average: book.ratings_average || 'N/A',
        }));
        setData(books);
      } catch (error) {
        console.error("Error loading books", error);
      }
      setLoading(false);
    };

    loadBooks();
  }, [page, pageSize]);


  return (
    <div className="data-table-container">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <SearchBar onSearch={handleSearch} />
          <div className='page-buttons'>
            <button className="back-to-books" onClick={fetchFirstPage} disabled={!searchPerformed}><FontAwesomeIcon icon={faCircleArrowLeft} />   Back to all Books</button>
            <button className="back-to-books" onClick={() => navigate('/bookshelf')}><FontAwesomeIcon icon={faBook} /> My Bookshelf</button>
            <button className='back-to-books'><CSVLink className="no-underline" data={data} filename={"books_current_page.csv"}><FontAwesomeIcon icon={faDownload} /> Download Books</CSVLink></button>
          </div>
          <div id="text-container" className="text-container">
            <div>Hello <span className='user-name'>{currentUser.displayName ? currentUser.displayName : currentUser.email}</span>, Find your book.</div>
          </div>
          <div className="card-container">
            {data.map((book, index) => (
              <Card key={index} book={book} />
            ))}
          </div>
          <Pagination
            page={page}
            pageSize={pageSize}
            totalRecords={1000} // Assuming total records
            setPage={setPage}
            setPageSize={setPageSize}
          />
        </>
      )}
    </div>
  );
};

export default DataTable;
