import Login from './pages/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Books from './pages/Books';
import NewBook from './pages/NewBook';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
      </Routes>
      <Routes>
        <Route path="/books" element={<Books/>}></Route>
      </Routes>
      <Routes>
        <Route path="/book/new" element={<NewBook/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

