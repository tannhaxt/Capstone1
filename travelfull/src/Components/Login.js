import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Mail, Facebook, User } from 'lucide-react';  // Import Lucide icons

const Login = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4" style={{ width: '100%', maxWidth: '400px', border: '2px solid #CBD2D0', borderRadius: '10px' }}>
        <div className="text-center mb-4">
          <img src="logo.png" alt="Logo" style={{ width: '50px', height: '50px' }} />
          <h5 className="fw-bold mt-3">Đăng nhập vào travelfull</h5>
        </div>
        
        <div className="d-grid gap-3">
          {/* Email / Phone login button */}
          <button className="btn btn-outline-secondary d-flex align-items-center justify-content-center" style={{ borderRadius: '30px' }}>
            <User className="me-2" size={20} />
            Sử dụng email/ số điện thoại
          </button>
          
          {/* Google login button */}
          <button className="btn btn-outline-secondary d-flex align-items-center justify-content-center" style={{ borderRadius: '30px' }}>
            <Mail className="me-2" size={20} style={{ color: '#E33629' }} />
            Đăng nhập với Google
          </button>
          
          {/* Facebook login button */}
          <button className="btn btn-outline-secondary d-flex align-items-center justify-content-center" style={{ borderRadius: '30px' }}>
            <Facebook className="me-2" size={20} style={{ color: '#1877F2' }} />
            Đăng nhập với Facebook
          </button>
        </div>

        <div className="text-center mt-4">
          <p className="mb-2">
            Bạn chưa có tài khoản? <a href="#" className="text-primary fw-bold">Đăng ký</a>
          </p>
          <p><a href="#" className="text-primary fw-bold">Quên mật khẩu?</a></p>
          <small>Việc bạn tiếp tục sử dụng trang web này đồng nghĩa bạn đồng ý với <a href="#" className="text-primary fw-bold">điều khoản sử dụng</a> của chúng tôi.</small>
        </div>
      </div>
    </div>
  );
};

export default Login;
