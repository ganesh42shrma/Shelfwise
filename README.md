# Shelfwise

Shelfwise is a React-based web application that allows users to explore and manage their personal collection of books using the Open Library API. It features authentication via Firebase, personalized book shelf management, and data export to CSV.

## Features

1. **Authentication**:
   - User registration and login via Firebase.
   - Google Sign-In provider for authentication.

2. **Home Page**:
   - Fetches and displays books from the Open Library API.
   - Search functionality to find books by author name.
   - Pagination support to display 10, 50, or 100 books per page.
   - "Go back to home" button to reset search queries and fetch all books.

3. **Personal Bookshelf**:
   - Add books to your personal bookshelf.
   - Persistent storage of bookshelf data using Firebase Firestore.
   - View books in your personal bookshelf.
   - Remove books from your personal bookshelf.
   - Separate page for managing your bookshelf.

4. **CSV Download**:
   - Download book information displayed on the current page in CSV format.

## Technologies Used

- **React.js**: Main framework used for building the application.
- **Firebase**: Used for authentication (including Google Sign-In) and Firestore for database.
- **Open Library API**: Source of book data.
- **Axios**: For making API calls.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ganesh42shrma/Shelfwise
   ```

2. Navigate to the project directory:
   ```bash
   cd shelfwise
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Set up Firebase:
   - Create a Firebase project and enable Firestore and Authentication.
   - Set up Google Sign-In provider.
   - Add your Firebase configuration to the project.

5. Start the development server:
   ```bash
   npm start
   ```

## Usage

1. **Sign Up/Login**:
   - Register a new account or login using Google Sign-In.
   
2. **Home Page**:
   - View a list of books fetched from the Open Library API.
   - Use the search bar to find books by author name.
   - Use the pagination controls to select the number of books displayed per page (10, 50, or 100).
   - Click "Go back to home" to reset the search and view all books.

3. **Personal Bookshelf**:
   - Add books to your personal bookshelf from the home page.
   - Access the personal bookshelf from a separate page.
   - View and manage books in your personal bookshelf.
   - Remove books from the bookshelf as needed.

4. **CSV Download**:
   - Click the download button to export the book information displayed on the current page to a CSV file.

## Known Issues

- The API response time may be slow, especially when searching for books. Please be patient while the results are loading.

## Future Improvements

- Improve the user interface for a better user experience.
- Add more features for book management and organization.
- Optimize API calls to reduce load times.

## License

This project is licensed under the MIT License.

