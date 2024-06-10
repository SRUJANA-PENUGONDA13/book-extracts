import React, { useState, useEffect } from 'react'
import DOMPurify from 'dompurify'

const MainBody = () => {
  const [books, setBooks] = useState([])
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: 'default',
  })

  useEffect(() => {
    fetch('/getextracts?titlecontains=s')
      .then((response) => response.json())
      .then((data) => {
        const { Extracts } = data
        setBooks(Extracts)
      })
  }, [])

  // Memoize the processed data to avoid unnecessary recalculations
  const sortedBooks = React.useMemo(() => {
    if (sortConfig && sortConfig.key) {
      return [...books].sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1
        }
        return 0
      })
    }
    return books
  }, [books, sortConfig])

  // Sort the data based on the column
  const requestSort = (key) => {
    let direction = 'ascending'
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending'
    } else if (
      sortConfig.key === key &&
      sortConfig.direction === 'descending'
    ) {
      direction = 'default'
    }
    setSortConfig({ key, direction })
  }

  return (
    <main className="main-container">
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Cover</th>
            <th onClick={() => requestSort('author')}>Author</th>
            <th>Biography</th>
            <th onClick={() => requestSort('title')}>Title</th>
            <th onClick={() => requestSort('estimatedReadingTimeMinutes')}>
              Reading Time (minutes)
            </th>
            <th onClick={() => requestSort('publicationDate')}>
              Publication Date
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedBooks &&
            sortedBooks.map((book, index) => (
              <tr key={book.isbn}>
                <td>{index + 1}</td>
                <td>
                  <a
                    href={`https://extracts.panmacmillan.com/extract?isbn=${book.isbn}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={book.jacketUrl} alt={book.title} />
                  </a>
                </td>
                <td>{book.author}</td>
                <td
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(book.authorBiography),
                  }}
                ></td>
                <td>
                  <a
                    href={`https://extracts.panmacmillan.com/extract?isbn=${book.isbn}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {book.title}
                  </a>
                </td>
                <td>{book.estimatedReadingTimeMinutes}</td>
                <td>
                  {new Date(book.publicationDate).toLocaleDateString('en-US')}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </main>
  )
}

export { MainBody }
