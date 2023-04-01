import logoImage from '../../assets/logo.svg'
import './styles.css'
import {Link} from "react-router-dom";
import {FiPower} from "react-icons/fi";

export default function Book() {
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
        </div>
    );
}

