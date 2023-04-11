import './style.css';
import logoImage from '../../assets/logo.svg';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { useMemo, useState } from 'react';
import { createBook, editBook, fetchBookById } from '../../services/BookService';


export default function EditBook() {

  const navigate = useNavigate();
  const location = useLocation();

  const bookId = location.state.id;

  const [ bookForm, setBookForm ] = useState({
    id: '',
    title: '',
    author: '',
    launchDate: '',
    price: '',
  });

  useMemo(() => {
    try {
      fetchBookById(bookId).then(book => setBookForm({ ...book }));
    } catch (err) {
      alert(`Load of Book ${bookId} failed!`);
      navigate('/books');
    }
  }, [ bookId, navigate ]);

  const onChangeInput = (e: any) => {
    const { name, value } = e.target;
    const data = { ...bookForm, [name]: value };
    setBookForm(data);
  };

  const onSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const request = {
        ...bookForm,
        launchDate: new Date(bookForm.launchDate),
        price: +bookForm.price,
        id: +bookForm.id
      };
      await editBook(request);
      navigate('/books');
    } catch (e) {
      alert('A error occurs');
      navigate('/book/new');
    }
  };


  return (
    <div className="edit-book-container">
      <div className="content">
        <section className="form">
          <img src={logoImage} alt="Library Logo"/>
          <h1>Edit New Book</h1>
          <p>Enter the book information and click on 'edit'!</p>
          <Link className="back-link" to="/books">
            <FiArrowLeft size={16} color="#251fc5"/>
            Home
          </Link>
        </section>
        <form onSubmit={onSubmit}>
          <input name="id"
                 type="id"
                 value={bookForm.id}
                 onChange={onChangeInput}
                 disabled={true}
          />
          <input
            name="title"
            type="text"
            onChange={onChangeInput}
            value={bookForm.title}
            placeholder="Title"/>
          <input
            name="author"
            type="text"
            value={bookForm.author}
            onChange={onChangeInput}
            placeholder="Author"/>
          <input
            name="launchDate"
            type="date"
            value={bookForm.launchDate}
            onChange={onChangeInput}
          />
          <input
            name="price"
            type="text"
            value={bookForm.price}
            onChange={onChangeInput}
            placeholder="Price"/>
          <button className="button" type="submit">Edit</button>
        </form>
      </div>
    </div>
  );
}

