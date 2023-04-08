import Login from './pages/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Books from './pages/Books';
import NewBook from './pages/NewBook';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/books" element={<Books/>}/>
        <Route path="/book/new" element={<NewBook/>}/>
        <Route path="*" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  );
}

