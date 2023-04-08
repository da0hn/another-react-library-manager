import './style.css';
import logoImage from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

export default function NewBook() {
  return (
    <div className="new-book-container">
      <div className="content">
        <section className="form">
          <img src={logoImage} alt="Library Logo"/>
          <h1>Add New Book</h1>
          <p>Enter the book information and click on 'add'!</p>
          <Link className="back-link" to="/books">
            <FiArrowLeft size={16} color="#251fc5"/>
            Home
          </Link>
        </section>
        <form>
          <input type="text" placeholder="Title"/>
          <input type="text" placeholder="Author"/>
          <input type="date"/>
          <input type="text" placeholder="Price"/>
          <button className="button" type="submit">Add</button>
        </form>
      </div>
    </div>
  );
}

