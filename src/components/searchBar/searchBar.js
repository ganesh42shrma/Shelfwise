import React, { useState } from 'react';
import './searchBar.css';
import axios from 'axios'; // Import axios for making API requests
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';


const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = async () => {
    try {
      const response = await axios.get(`https://openlibrary.org/search.json?author=${searchQuery}`);
      const searchResults = response.data.docs.map(book => ({
        title: book.title,
        author_name: book.author_name?.join(', ') || 'N/A',
        first_publish_year: book.first_publish_year || 'N/A',
        subject: book.subject?.join(', ') || 'N/A',
        author_birth_date: book.author_birth_date || 'N/A',
        author_top_work: book.author_top_work || 'N/A',
        ratings_average: book.ratings_average || 'N/A',
      }));
      onSearch(searchResults);
    } catch (error) {
      console.error("Error searching books", error);
    }
  };

  return (
    <div className="search-bar-container">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search books by author"
        className="search-input"
      />
      <button onClick={handleSearch} className="search-button"><FontAwesomeIcon icon={faMagnifyingGlass} /> Search</button>
      
    </div>
  );
};

export default SearchBar;
