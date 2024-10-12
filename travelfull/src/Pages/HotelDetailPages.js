import React from 'react';
import HotelInfo from '../Components/HotelInfo';
import BookingInfo from '../Components/BookingInfo';
import ImageGallery from '../Components/ImageGalary';
import SearchForm from '../Components/SearchFormCheckOut';
import Amenities from '../Components/Ameneties';
import MapComponent from '../Components/Map';
import ReviewsList from '../Components/ReviewList';
import Header from '../Components/header';
import Footer from '../Components/footer';
import FilterBar from '../Components/FilterBar';

const mockHotelData = {
  name: "Khách sạn Rosamia Đà Nẵng",
  address: "282 Võ Nguyên Giáp, Việt Nam, Ngũ Hành Sơn, Đà Nẵng 550000",
  reviews: 1049,
  price: "1.350.000",
  mainImage: "https://via.placeholder.com/755x453",
  galleryImages: [
    "https://via.placeholder.com/231x138",
    "https://via.placeholder.com/231x138",
    "https://via.placeholder.com/231x138"
  ],
  amenities: [
    { icon: 'truck', name: 'Xe đưa đón' },
    { icon: 'wifi', name: 'Wifi miễn phí' },
    { icon: 'cup-straw', name: 'Quán rượu' }
  ],
  mapImage: "https://via.placeholder.com/1220x264",
  reviewsList: [
    {
      avatar: "https://via.placeholder.com/54x54",
      name: "KaiB",
      date: "22 Jul",
      comment: "Tôi đã có một kỳ nghỉ tuyệt vời..."
    }
  ]
};

const HotelDetailPage = () => {
  return (
    <>
      <Header /> {/* Thêm Header */} 
      {/* Nội dung chính của trang nằm trong container */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '78px', paddingLeft: '112px', paddingRight: '112px' }} className="container">
      <FilterBar /> {/* Thêm FilterBar */}
        <div className="hotel-booking-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div className="hotel-info" style={{ width: '70%' }}>
            <HotelInfo name={mockHotelData.name} address={mockHotelData.address} reviews={mockHotelData.reviews} />
          </div>
          <div className="booking-info" style={{ width: '25%' }}>
            <BookingInfo price={mockHotelData.price} />
          </div>
        </div>
      
        <ImageGallery mainImage={mockHotelData.mainImage} galleryImages={mockHotelData.galleryImages} />
        <SearchForm />
        <Amenities amenities={mockHotelData.amenities} />
        <MapComponent mapImage={mockHotelData.mapImage} />
        <ReviewsList reviews={mockHotelData.reviewsList} />
      </div>

      <Footer /> {/* Thêm Footer, nằm ngoài thẻ container */}
    </>
  );
};

export default HotelDetailPage;
