import React from 'react';
import { Container, Row, Col, Card, Button, Image, Form } from 'react-bootstrap';
import { Heart, ChevronRight } from 'lucide-react'; // Icon Heart và mũi tên phải
import Hotel1 from "../Images/Hotel1.jpg"; // Đảm bảo rằng bạn có các hình ảnh khách sạn tương ứng
import Hotel2 from "../Images/Hotel2.jpg";
import Hotel3 from "../Images/Hotel3.jpg";
import Hotel4 from "../Images/Hotel4.jpg";
import Pic1 from "../Images/Pic1.png";
import Plane from "../Images/Plane.png";

const MainContentHomePage = () => {
  const hotels = [
    {
      image: Hotel1,
      name: "Capella Bangkok",
      reviews: 957,
    },
    {
      image: Hotel2,
      name: "Cheval Blanc",
      reviews: 1608,
    },
    {
      image: Hotel3,
      name: "Hotel Du Cap-Eden-Roc",
      reviews: 1490,
    },
    {
      image: Hotel4,
      name: "Mount Nelson",
      reviews: 562,
    }
  ];

  return (
    <>
      {/* Section 1 */}
      <div style={{ paddingBottom: '78px' }}> {/* Bao div với padding */}
        <Container className="my-5">
          <Row className="align-items-center">
            <Col lg={6} className="text-start">
              <h6 className="text-muted" style={{ letterSpacing: '0.10px' }}>Khám phá</h6>
              <h3 className="fw-bold" style={{ fontFamily: 'SVN-Gilroy', fontSize: '40px' }}>
                Người bạn đồng hành hoạch định chuyến du lịch tối ưu của bạn
              </h3>
              <p className="mt-4" style={{ fontSize: '16px', fontFamily: 'SVN-Gilroy' }}>
                Khám phá niềm vui của việc lên kế hoạch du lịch liền mạch với trang web của chúng tôi. Tận hưởng những hành trình được cá nhân hóa, phù hợp riêng cho bạn.
              </p>
              <Row className="mt-4">
                <Col md={6}>
                  <h4>Hành trình tùy chỉnh</h4>
                  <p>Thiết kế hành trình hoàn hảo của bạn với các lựa chọn linh hoạt và hành trình chi tiết.</p>
                </Col>
                <Col md={6}>
                  <h4>Giá tốt nhất</h4>
                  <p>Thiết kế hành trình hoàn hảo của bạn với các lựa chọn linh hoạt và hành trình chi tiết.</p>
                </Col>
              </Row>
              <div className="d-flex gap-3 mt-4">
                <button type="button" className="px-4 btn btn-outline-secondary btn-custom">Khám phá ngay</button>
                <Button variant="link" className="text-decoration-none fw-bold" style={{ color: '#474A49' }}>Xem thêm </Button>
              </div>
            </Col>
            <Col lg={6} className="text-end">
              <Image src={Pic1} fluid />
            </Col>
          </Row>
        </Container>
      </div>

      {/* Section 2 - Hình máy bay tràn viền ra */}
      <div style={{ paddingBottom: '78px' }}> {/* Bao div với padding */}
        <Container fluid className="position-relative" style={{ backgroundColor: '#E0E0EF', maxHeight: '215px', overflow: 'visible' }}>
          <Row className="align-items-center justify-content-between" style={{ height: '215px', position: 'relative' }}>
            <Col lg={6} className="position-relative">
              <Image 
                src={Plane} 
                fluid 
                className="position-absolute" 
                style={{ 
                  top: '-230px',  /* Điều chỉnh vị trí y của máy bay */
                  left: '-100px', /* Điều chỉnh vị trí x của máy bay */
                  width: '830px', /* Đặt kích thước chính xác cho hình máy bay */
                  height: '430px', 
                  zIndex: '1', /* Đảm bảo hình ảnh nằm phía trên */
                }} 
              />
            </Col>
            <Col lg={6}>
              <h4 className="semi-bold">Săn vé máy bay giá rẻ ngay hôm nay</h4>
              <h5 className="light text-muted">Rẻ hơn 5% so với các trang đặt vé khác</h5>
              <button type="button" className="px-4 btn btn-outline-secondary btn-custom">Khám phá ngay</button>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Section 3 - Danh sách các khách sạn */}
      <Container className="my-5">
        {/* Tiêu đề */}
        <Row className="mb-4">
          <Col>
            <h3 className="fw-bold">Các khách sạn được yêu thích</h3>
            <p className="text-muted">Nhiều địa điểm hơn</p>
          </Col>
        </Row>

        {/* Danh sách khách sạn */}
        <Row className="align-items-center justify-content-between">
          <Col className="d-flex">
            <Row className="g-4">
              {hotels.map((hotel, index) => (
                <Col key={index} lg={3} md={6} sm={6}>
                  <Card className="border-0 shadow-sm" style={{ borderRadius: '12px' }}>
                    <div className="position-relative">
                      <Card.Img
                        variant="top"
                        src={hotel.image}
                        style={{ borderRadius: '12px', height: '200px', objectFit: 'cover' }}
                      />
                      <Button
                        variant="light"
                        className="position-absolute top-0 end-0 m-2 p-2"
                        style={{ borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.9)' }}
                      >
                        <Heart color="black" />
                      </Button>
                    </div>
                    <Card.Body className="text-start">
                      <Card.Title className="fs-6">{hotel.name}</Card.Title>
                      <div className="d-flex align-items-center">
                        <div className="d-flex align-items-center me-2">
                          {/* Giả lập icon đánh giá */}
                          <span style={{ color:'#248232', fontSize: '16px' }}>✩✩✩✩✩</span>
                        </div>
                        <span className="text-muted" style={{ fontSize: '14px' }}>
                          {hotel.reviews}
                        </span>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>

          {/* Nút điều hướng tiếp theo */}
          <Col lg="auto" className="d-flex align-items-center justify-content-center">
            <Button
              variant="light"
              className="p-2"
              style={{ borderRadius: '50%', backgroundColor: '#fff', boxShadow: '0px 2px 5px rgba(0,0,0,0.2)' }}
            >
              <ChevronRight />
            </Button>
          </Col>
        </Row>
      </Container>

      {/* Section 4 - Thêm vào */}
      <div style={{ paddingBottom: '78px' }}> {/* Bao div với padding */}
        <Container className="my-5 text-center">
          <h1>Tham gia cộng đồng du lịch của chúng tôi ngay hôm nay</h1>
          <p className="text-muted">
            Đăng ký nhận bản tin của chúng tôi để cập nhật những mẹo du lịch độc quyền, những ưu đãi hấp dẫn và những thông tin mới nhất.
          </p>
          <Form className="d-flex justify-content-center mt-4">
            <Form.Control type="email" placeholder="Email của bạn" className="me-3" style={{ maxWidth: '400px' }} />
            <Button variant="primary" className="px-4"style={{ color: '#ffffff',backgroundColor: '#2E3192' }} >Đăng kí</Button>
          </Form>
          <small className="d-block mt-2 text-muted">
            Bằng cách nhấp vào "Đăng ký", bạn đồng ý với Điều khoản và Điều kiện của chúng tôi.
          </small>
        </Container>
      </div>
    </>
  );
};

export default MainContentHomePage;
