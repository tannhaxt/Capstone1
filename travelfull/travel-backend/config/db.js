const { Pool } = require('pg');

// Cấu hình kết nối tới PostgreSQL
const pool = new Pool({
  user: 'postgres', // Tên user của bạn
  host: 'localhost',
  database: 'travelfull',
  password: 'Tanpro221103.',
  port: 5432 // Thay thế với mật khẩu của bạn
});

// Kiểm tra kết nối một lần khi khởi động
pool.on('connect', () => {
  console.log('Đã kết nối thành công tới PostgreSQL');
});

// Xử lý lỗi nếu có vấn đề với kết nối
pool.on('error', (err) => {
  console.error('Lỗi kết nối tới PostgreSQL:', err);
});

module.exports = pool;
