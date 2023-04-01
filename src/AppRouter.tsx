import Login from './pages/Login'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Book from "./pages/Book";

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login/>}></Route>
            </Routes>
            <Routes>
                <Route path='/books' element={<Book/>}></Route>
            </Routes>
        </BrowserRouter>
    );
}

