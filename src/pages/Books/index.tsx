import logoImage from '../../assets/logo.svg'
import './styles.css'
import {Link} from "react-router-dom";
import {FiEdit, FiPower, FiTrash2} from "react-icons/fi";

export default function Books() {
    return (
        <div className="book-container">
            <header>
                <img src={logoImage} alt="Library Logo"/>
                <span>Welcome, <strong>Gabriel</strong></span>
                <Link className='button' to='/book/new'>Add New Book</Link>
                <button type='button'>
                    <FiPower size={18} color='#251fc5'></FiPower>
                </button>
            </header>

            <h1>Registered Books</h1>

            <ul>
                <li>
                    <strong>Title: </strong>
                    <p>Docker Deep Dive</p>
                    <strong>Author: </strong>
                    <p>Nigel Poulton</p>
                    <strong>Price: </strong>
                    <p>R$ 47,90</p>
                    <strong>Release Date: </strong>
                    <p>12/07/2017</p>

                    <button type='button'>
                        <FiEdit size={20} color='#251fc5'></FiEdit>
                    </button>
                    <button type='button'>
                        <FiTrash2 size={20} color='#251fc5'></FiTrash2>
                    </button>
                </li>
            </ul>

        </div>
    );
}

