

# Admin Dashboard

This project is an admin dashboard created as a front-end internship assignment. The dashboard lists book data in a tabular format, fetched from the Open Library API. The application includes features like pagination, search by author, CSV download, and authentication.

## Features

1. **Data Table**:
   - Displays book records in a tabular format.
   - Columns: `ratings_average`, `author name`, `title`, `first_publish_year`, `subject`, `author_birth_date`, `author_top_work`.

2. **API Integration**:
   - Fetches book records from the [Open Library API](https://openlibrary.org/developers/api) using Axios for API calls.
   - Includes a search functionality to find books by author name.

3. **Pagination**:
   - Default: 10 books per page.
   - Options to change to 50 or 100 books per page.

4. **Search**:
   - Search books by author name.
   - A button to reset the search and fetch all books again.
   - Note: API calls might be slow to load with the search function. Please have patience after clicking search and wait for the results.

5. **CSV Download**:
   - Ability to download the current page results in CSV format.

6. **Authentication**:
   - Implemented using Firebase.
   - Includes login and registration of new accounts.

7. **UI**:
   - Simple and minimalistic design with basic color scheme.
   - Includes a boilerplate footer.

## Brownie Points Achievements

- **Search Books Feature**: Added search functionality by author name.
- **Download CSV**: Implemented the ability to download the current results in CSV format.
- **Authentication**: Added authentication for logging into the dashboard.

## Technologies Used

- **React.js**: Main framework used for the project.
- **Axios**: For making API calls.
- **Firebase**: For authentication.
- **Open Library API**: Source of book data.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ganesh42shrma/admin-dashboard-nua.git
   ```

2. Navigate to the project directory:
   ```bash
   cd admin-dashboard-nua
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Set up Firebase authentication:
   - Create a Firebase project and enable authentication.
   - Add your Firebase configuration to the project.

5. Start the development server:
   ```bash
   npm start
   ```

## Usage

1. **Login/Register**: Use the login or register options to access the dashboard.
2. **View Books**: The default view shows 10 books per page.
3. **Change Pagination**: Select the desired number of books per page (10, 50, or 100).
4. **Search by Author**: Use the search bar to find books by author name. Click the reset button to return to the full list.
5. **Download CSV**: Click the download button to get a CSV of the current page results.

## Known Issues

- The API calls, especially the search function, may be slow to load. Please wait patiently for the results to be returned.
- Sorting of columns has not been implemented due to time constraints and lack of familiarity with the implementation process.

## Future Improvements

- Add sorting functionality for all columns.
- Add editing of row entries (dependent on the availability of a POST API).
- Improve UI/UX for better user experience.

## License

This project is licensed under the MIT License.
