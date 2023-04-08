import './style.css';
import logoImage from '../../assets/logo.svg';
import { Link, useNavigate } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { useState } from 'react';
import { createBook } from '../../services/BookService';


export default function NewBook() {

  const [ bookForm, setBookForm ] = useState({
    title: '',
    author: '',
    launchDate: '',
    price: '',
  });


  const navigate = useNavigate();

  const onChangeInput = (e: any) => {
    const { name, value } = e.target;
    setBookForm({ ...bookForm, [name]: value });
  };

  const onSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const request = {
        ...bookForm,
        launchDate: new Date(bookForm.launchDate),
        price: +bookForm.price,
      };

      await createBook(request);
      navigate('/books');
    } catch (e) {
      alert('A error occurs');
      navigate('/book/new');
    }
  };


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
        <form onSubmit={onSubmit}>
          <input
            name="title"
            type="text"
            onChange={onChangeInput}
            placeholder="Title"/>
          <input
            name="author"
            type="text"
            onChange={onChangeInput}
            placeholder="Author"/>
          <input
            name="launchDate"
            type="date"
            onChange={onChangeInput}
          />
          <input
            name="price"
            type="text"
            onChange={onChangeInput}
            placeholder="Price"/>
          <button className="button" type="submit">Add</button>
        </form>
      </div>
    </div>
  );
}

