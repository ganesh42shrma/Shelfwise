import React, { useState, useEffect } from 'react';
import './personalBookshelf.css';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/authContext/index';
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore"; // Import Firestore functions
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse,faXmark } from '@fortawesome/free-solid-svg-icons';

const PersonalBookshelf = () => {
  const { currentUser } = useAuth();
  const [bookshelf, setBookshelf] = useState({});

  useEffect(() => {
    const fetchBookshelf = async () => {
      try {
        if (!currentUser) return; // Don't proceed if currentUser is null

        const db = getFirestore(); // Get a reference to Firestore
        const bookshelfRef = doc(db, 'bookshelves', currentUser.uid); // Reference to the document for the current user
        const bookshelfSnapshot = await getDoc(bookshelfRef); // Get the user's bookshelf data
        if (bookshelfSnapshot.exists()) {
          setBookshelf(bookshelfSnapshot.data()); // Update the bookshelf state
        } else {
          // If document doesn't exist, initialize an empty bookshelf
          setBookshelf({});
          await setDoc(bookshelfRef, {}); // Create the document with an empty bookshelf
        }
      } catch (error) {
        console.error("Error initializing bookshelf:", error);
      }
    };

    fetchBookshelf();
  }, [currentUser]);

  const removeFromBookshelf = async (shelfkey) => {
    try {
      const updatedBookshelf = { ...bookshelf };
      delete updatedBookshelf[shelfkey];
      setBookshelf(updatedBookshelf);
      const db = getFirestore(); // Get a reference to Firestore
      const bookshelfRef = doc(db, 'bookshelves', currentUser.uid); // Reference to the document for the current user
      await setDoc(bookshelfRef, updatedBookshelf); // Update the user's bookshelf data
    } catch (error) {
      console.error("Error removing book from bookshelf:", error);
    }
  };

  const navigate = useNavigate();
  return (
    <div className="personal-bookshelf-container">
      <h1>My Bookshelf</h1>
      <button className="home-button" onClick={() => navigate('/home')}><FontAwesomeIcon icon={faHouse} />  Home</button>
      <ul>
        {Object.keys(bookshelf).map(shelfkey => (
          <li key={shelfkey} className="bookshelf-item">
            <div className="book-details">
              <strong className='book-title'>{bookshelf[shelfkey].title}</strong> by {bookshelf[shelfkey].author_name}
            </div>
            <button className="remove-button" onClick={() => removeFromBookshelf(shelfkey)}><FontAwesomeIcon icon={faXmark} /> Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PersonalBookshelf;
