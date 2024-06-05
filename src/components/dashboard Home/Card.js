import React, { useState, useEffect } from 'react';
import './Card.css';
import { useAuth } from '../../contexts/authContext/index';
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore"; // Import Firestore functions
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon component
import { faPlus, faCircleCheck } from '@fortawesome/free-solid-svg-icons'; // Import specific icons

const Card = ({ book }) => {
  const { currentUser } = useAuth();
  const [added, setAdded] = useState(false); // State to track if the book has been added

  useEffect(() => {
    const checkIfBookAdded = async () => {
      try {
        const db = getFirestore(); // Get a reference to Firestore
        const bookshelfRef = doc(db, 'bookshelves', currentUser.uid); // Reference to the user's bookshelf document
        const bookshelfSnapshot = await getDoc(bookshelfRef); // Get the user's bookshelf data
        if (bookshelfSnapshot.exists() && bookshelfSnapshot.data()[`${book.key}_${book.title}`]) {
          setAdded(true); // Set the state to true if the book is already in the bookshelf
        }
      } catch (error) {
        console.error("Error checking if book is added:", error);
      }
    };

    checkIfBookAdded();
  }, [book.key, book.title, currentUser]);

  const addToBookshelf = async () => {
    try {
      console.log('Add to Bookshelf button clicked');
      const db = getFirestore(); // Get a reference to Firestore
      const bookshelfRef = doc(db, 'bookshelves', currentUser.uid); // Reference to the user's bookshelf document
      const bookshelfSnapshot = await getDoc(bookshelfRef); // Get the user's bookshelf data
      const updatedBookshelf = {
        ...bookshelfSnapshot.data(), // Preserve existing bookshelf data
        [`${book.key}_${book.title}`]: book, // Add the new book to the bookshelf
      };
      await setDoc(bookshelfRef, updatedBookshelf); // Update the user's bookshelf data in Firestore
      console.log("Book added to bookshelf:", book);
      setAdded(true); // Set the state to true after successfully adding the book
    } catch (error) {
      console.error("Error adding book to bookshelf:", error);
    }
  };

  return (
    <div className="card">
      <div className='book-title'>
        <h2>{book.title}</h2>
      </div>
      <p>Author: {book.author_name}</p>
      <p>First Publish Year: {book.first_publish_year}</p>
      <p>Subject: {book.subject}</p>
      <p>Author Birth Date: {book.author_birth_date}</p>
      <p>Author Top Work: {book.author_top_work}</p>
      <p>Ratings Average: {book.ratings_average}</p>
      <button onClick={addToBookshelf} disabled={added}>
        {added ? (
          <>
            <FontAwesomeIcon icon={faCircleCheck} /> Shelfed
          </>
        ) : (
          <>
            <FontAwesomeIcon icon={faPlus} /> Add to Shelf
          </>
        )}
      </button>
    </div>
  );
};

export default Card;
