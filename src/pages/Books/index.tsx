import logoImage from '../../assets/logo.svg';
import './styles.css';
import { Link, useNavigate } from 'react-router-dom';
import { FiPower } from 'react-icons/fi';
import { useEffect, useState } from 'react';
import { getVariable, StorageVariables } from '../../services/StorageService';
import { BookItem, deleteBookById, fetchBooks } from '../../services/BookService';
import { logout } from '../../services/AuthenticationService';
import BookItemList from '../../components/BookItem';

export default function Books() {
  const [ books, setBooks ] = useState<BookItem[]>([]);
  const [ page, setPage ] = useState(0);

  const accessToken = getVariable(StorageVariables.ACCESS_TOKEN);
  const currentUsername = getVariable(StorageVariables.USERNAME);

  const navigate = useNavigate();

  useEffect(
    () => {
      fetchBooks()
        .then(data => setBooks(data));
    },
    [ accessToken ],
  );

  const onClickMore = async () => {
    const fetchedBooks = await fetchBooks({ page });
    const uniqueBooks = new Set([ ...books, ...fetchedBooks ]);
    setBooks(Array.from(uniqueBooks));
    setPage(page + 1);
  };


  const onBookDelete = async (bookId: number) => {
    try {
      await deleteBookById(bookId);
      setBooks(books.filter(book => book.id !== bookId));
    } catch (err) {
      alert('Delete failed! Try again');
    }
  };

  const onBookEdit = async (bookId: number) => {
    try {
      navigate(`/book/${bookId}/edit`, { state: { id: bookId } });
    } catch (err) {
      alert('Edit failed! Try again');
    }
  };

  const onLogout = () => {
    try {
      navigate('/');
      logout();
    } catch (err) {
      alert('Logout failed! Try again');
    }
  };

  return (
    <div className="book-container">
      <header>
        <img src={logoImage} alt="Library Logo"/>
        <span>Welcome, <strong>{currentUsername?.toUpperCase() ?? 'UNKNOWN'}</strong></span>
        <Link className="button" to="/book/new">Add New Book</Link>
        <button type="button" onClick={() => onLogout()}>
          <FiPower size={18} color="#251fc5"></FiPower>
        </button>
      </header>

      <h1>{books.length} Registered Books</h1>

      <ul>
        {
          books.map((book) => (
            <BookItemList
              key={book.id}
              item={book}
              onDeleteFn={onBookDelete}
              onEditFn={onBookEdit}
            />
          ))
        }
      </ul>
      <button className="button" onClick={() => onClickMore()}>More...</button>
    </div>
  );
}

