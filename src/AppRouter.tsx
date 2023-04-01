import Login from './pages/Login'
import {BrowserRouter, Route, Routes} from "react-router-dom";

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login/>}></Route>
            </Routes>
        </BrowserRouter>
    );
}

