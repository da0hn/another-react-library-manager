import logoImage from '../../assets/logo.svg';
import './styles.css';
import { Link, useNavigate } from 'react-router-dom';
import { FiEdit, FiPower, FiTrash2 } from 'react-icons/fi';
import { useEffect, useState } from 'react';
import { getVariable, StorageVariables } from '../../services/StorageService';
import { BookItem, deleteBookById, fetchBook } from '../../services/BookService';
import { logout } from '../../services/AuthenticationService';

export default function Books() {
  const [ books, setBooks ] = useState<BookItem[]>([]);

  const accessToken = getVariable(StorageVariables.ACCESS_TOKEN);

  const navigate = useNavigate();

  useEffect(
    () => {
      fetchBook()
        .then(data => setBooks(data));
    },
    [ accessToken ],
  );

  const onBookDelete = async (bookId: number) => {
    try {
      await deleteBookById(bookId);
      setBooks(books.filter(book => book.id !== bookId));
    } catch (err) {
      alert('Delete failed! Try again');
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
        <span>Welcome, <strong>Gabriel</strong></span>
        <Link className="button" to="/book/new">Add New Book</Link>
        <button type="button" onClick={() => onLogout()}>
          <FiPower size={18} color="#251fc5"></FiPower>
        </button>
      </header>

      <h1>Registered Books</h1>

      <ul>
        {
          books.map((book) => (
            <li key={book.id}>
              <strong>Title: </strong>
              <p>{book.title}</p>
              <strong>Author: </strong>
              <p>{book.author}</p>
              <strong>Price: </strong>
              <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(book.price)}</p>
              <strong>Release Date: </strong>
              <p>{Intl.DateTimeFormat('pt-BR').format(new Date(book.launchDate))}</p>

              <button type="button">
                <FiEdit size={20} color="#251fc5"></FiEdit>
              </button>
              <button type="button" onClick={() => onBookDelete(book.id)}>
                <FiTrash2 size={20} color="#251fc5"></FiTrash2>
              </button>
            </li>
          ))
        }
      </ul>

    </div>
  );
}

