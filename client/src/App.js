import React from 'react';
import {Route, Routes} from 'react-router-dom'
import HomePage from "./pages/HomePage";
import HotelListPage from "./pages/HotelListPage";
import HotelPage from './pages/HotelPage'

const App = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='/hotels' element={<HotelListPage/>} />
            <Route path='/hotels/:id' element={<HotelPage/>} />
        </Routes>
    );
};

export default App;
