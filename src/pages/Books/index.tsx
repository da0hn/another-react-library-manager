import logoImage from '../../assets/logo.svg';
import './styles.css';
import { Link } from 'react-router-dom';
import { FiEdit, FiPower, FiTrash2 } from 'react-icons/fi';
import { useEffect, useState } from 'react';
import { getVariable, StorageVariables } from '../../services/StorageService';
import { BookItem, fetchBook } from '../../services/BookService';

export default function Books() {
  const [ books, setBooks ] = useState<BookItem[]>([]);

  const accessToken = getVariable(StorageVariables.ACCESS_TOKEN);

  useEffect(
    () => {
      fetchBook()
        .then(data => setBooks(data));
    },
    [ accessToken ],
  );

  return (
    <div className="book-container">
      <header>
        <img src={logoImage} alt="Library Logo"/>
        <span>Welcome, <strong>Gabriel</strong></span>
        <Link className="button" to="/book/new">Add New Book</Link>
        <button type="button">
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
              <button type="button">
                <FiTrash2 size={20} color="#251fc5"></FiTrash2>
              </button>
            </li>
          ))
        }
      </ul>

    </div>
  );
}

