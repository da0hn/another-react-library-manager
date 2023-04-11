import './style.css';
import { FiEdit, FiTrash2 } from 'react-icons/fi';
import { BookItem } from '../../services/BookService';

type Props = {
  item: BookItem,
  onDeleteFn: (id: number) => void
  onEditFn: (id: number) => void
}

export default function BookItemList({ item, onDeleteFn, onEditFn }: Props) {
  return (
    <>
      <li>
        <strong>Title: </strong>
        <p>{item.title}</p>
        <strong>Author: </strong>
        <p>{item.author}</p>
        <strong>Price: </strong>
        <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(item.price)}</p>
        <strong>Release Date: </strong>
        <p>{Intl.DateTimeFormat('pt-BR').format(new Date(item.launchDate))}</p>

        <button type="button">
          <FiEdit size={20} color="#251fc5" onClick={() => onEditFn(item.id)}></FiEdit>
        </button>
        <button type="button" onClick={() => onDeleteFn(item.id)}>
          <FiTrash2 size={20} color="#251fc5"></FiTrash2>
        </button>
      </li>
    </>
  );
}
