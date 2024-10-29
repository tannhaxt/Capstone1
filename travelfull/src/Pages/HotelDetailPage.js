import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getHotelDetails } from '../Services/bookingService';
import HotelInfo from '../Components/HotelInfo';
import BookingInfo from '../Components/BookingInfo';
import ImageGallery from '../Components/ImageGalary';
import BookingSection from '../Components/SearchFormCheckOut';
import Amenities from '../Components/Ameneties';
import MapComponent from '../Components/Map';
import ReviewsList from '../Components/ReviewList';
import Header from '../Components/header';
import Footer from '../Components/footer';
import FilterBar from '../Components/FilterBar';

const HotelDetailPage = () => {
  const { id } = useParams();
  const [hotelDetails, setHotelDetails] = useState(null);

  useEffect(() => {
    const fetchHotelDetails = async () => {
      try {
        const data = await getHotelDetails(id);
        setHotelDetails(data);
      } catch (error) {
        console.error("Lỗi khi lấy chi tiết khách sạn:", error);
      }
    };

    if (id) {
      fetchHotelDetails();
    }
  }, [id]);

  if (!hotelDetails) return <div>Đang tải...</div>;

  return (
    <>
      <Header />
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '20px' }} className="container">
        <div className="hotel-booking-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div className="hotel-info" style={{ width: '70%' }}>
            <HotelInfo 
              name={hotelDetails.title || "Thông tin khách sạn không khả dụng"}
              address={hotelDetails.rankingDetails || "Không có thông tin địa chỉ"}
              reviews={hotelDetails.numberReviews || "0"} 
            />
          </div>
          <div className="booking-info" style={{ width: '25%' }}>
            <BookingInfo price={hotelDetails.price?.displayPrice || "Không có giá"} />
          </div>
        </div>

        <ImageGallery 
          mainImage={hotelDetails.photos?.[0]?.urlTemplate.replace("{width}", "800").replace("{height}", "600")}
          galleryImages={hotelDetails.photos?.slice(1, 6).map(photo => photo.urlTemplate.replace("{width}", "300").replace("{height}", "200")) || []}
        />

        <BookingSection />

        <Amenities amenities={hotelDetails.about?.content?.[2]?.content || []} />

        <MapComponent mapImage="https://via.placeholder.com/1220x264" />

        <ReviewsList reviews={hotelDetails.reviews?.content || []} />
      </div>

      <Footer />
    </>
  );
};

export default HotelDetailPage;
