# Book Extracts from Pan Macmillan

This is a single-page web application built with React titled "Book Extracts from Pan Macmillan". The application displays a list of book extracts in a sortable table and is designed to be mobile responsive and visually appealing.

## Features

- **Fetch Book Extracts**: Fetches a list of 10 book extracts from the Pan Macmillan API.
- **Sortable Table**: Allows sorting by Author, Title, Reading Time, and Publication Date in ascending, descending, and default order.
- **Responsive Design**: Ensures the page is mobile-friendly and visually appealing with handcrafted CSS (no frameworks like Bootstrap used).
- **Sanitized HTML Content**: Uses `DOMPurify` to sanitize author biographies to prevent XSS attacks.
- **Interactive Elements**: Book titles and cover images link to the respective extract pages.
- **Footer**: Displays the author's name with a link to their website or GitHub account.

## Installation

1. **Clone the repository**:

   ```sh
   git clone https://github.com/your-username/book-extracts.git
   cd book-extracts
   ```

2. **Install dependencies**:

   ```sh
   npm install
   ```

3. **Start the development server**:

   ```sh
   npm start
   ```

4. **Build for production**:
   ```sh
   npm run build
   ```

## Usage

After starting the development server, open your browser and navigate to `http://localhost:3000` to view the application.

## API

The application fetches book extracts from the following API endpoint:
https://extracts.panmacmillan.com/getextracts?titlecontains=s

Fields used from the API response:

- `jacketUrl`: URL of the book cover image.
- `author`: Author of the book.
- `authorBiography`: Biography of the author.
- `title`: Title of the book.
- `estimatedReadingTimeMinutes`: Estimated reading time in minutes.
- `publicationDate`: Publication date of the book.
- `isbn`: ISBN of the book (used for linking to the extract page).

## Dependencies

- **React**: JavaScript library for building user interfaces.
- **DOMPurify**: Library for sanitizing HTML content.
- **CSS3**: Used for styling with handcrafted CSS.

## Acknowledgments

- Thanks to Pan Macmillan for providing the book extracts API.
- Inspired by the need to create a user-friendly and visually appealing book extract viewer.

## Contact

For any inquiries or feedback, feel free to reach out via [srujanapenugonda1318@gmail.com]
