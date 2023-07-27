import React from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './Home';
import Comics from './Comics';
import Busqueda from './Busqueda';
import Logout from './Logout';
import Perfil from './Perfil';
import Series from './Series';

export default function Header() {
    return (
        <BrowserRouter>
        <header>
            <nav>
            <ul>
                <li>
                <Link to="/" className='link'>Home</Link>
                </li>
                <li>
                <Link to="/comics" className='link'>Comics</Link>
                </li>
                <li>
                <Link to="/series" className='link'>Series</Link>
                </li>
                <li>
                <Link to="/perfil" className='link'>Usuario</Link>
                </li>
                <li>
                <Logout />
                </li>
            </ul>
            </nav>
        </header>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/comics' element={<Comics />} />
            <Route path='/series' element={<Series />} />
            <Route path='/perfil' element={<Perfil />} />
            <Route path='/busqueda' element={<Busqueda />} />
        </Routes>
        </BrowserRouter>
    );
}



