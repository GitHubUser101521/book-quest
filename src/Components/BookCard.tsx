import { DocType } from './Books'

function BookCard({ book }: { book: DocType }) {
  return (
    <a href={`https://openlibrary.org/${book.key}`} target='_blank'>
      <div className='bookcard w-60 h-full' key={book.key}>
        <img 
          src={`https://covers.openlibrary.org/b/olid/${book.cover_edition_key}-M.jpg?default=false`}
          alt={book.title}
          title={`https://covers.openlibrary.org/b/olid/${book.cover_edition_key}-M.jpg?default=false`}
          className='min-h-56 mb-2'
        />
        <div>
          <p title={book.title}>{book.title}</p>
          {book.publisher ? <p className='text-xs text-gray-400' title={book.publisher[0]}>Published by {book.publisher[0]}</p> : ''}
          <p className='text-gray-500 mt-2' title={`${book.author_name} ${book.first_publish_year}`}>{`${book.author_name || ''}${book.author_name && book.first_publish_year ? ',' : ''} ${book.first_publish_year || ''}`}</p>
        </div>
      </div>
    </a>
  )
}

export default BookCard
