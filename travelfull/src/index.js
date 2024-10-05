import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Headers from './Components/header'; // Đảm bảo đường dẫn chính xác
import reportWebVitals from './reportWebVitals';
import SearchBar from './Components/Searchbar';
import Navtab from './Components/Navtab';
import HeroBanner from './Components/Herobanner';
import HomePages from './Pages/HomePage';
import FilterCard from './Components/HotelFilterCard';
import HotelList from './Components/HotelList';
import HotelSearchSection from './Components/HotelSearchSection';
import ResultSearch from './Pages/ResultSearch';
import Login from './Components/Login';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Login/> {/* Thay đổi từ <App /> sang <Headers /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
