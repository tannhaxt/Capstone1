import { Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import FlightSearch from './Pages/FlightSearch';
import HotelSearch from './Pages/HotelSearch';
import HotelDetailPage from './Pages/HotelDetailPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/flights" element={<FlightSearch />} />
      <Route path="/search-hotels" element={<HotelSearch />} />
      <Route path="/hotel-detail/:id" element={<HotelDetailPage />} />
    </Routes>
  );
}

export default App;
