const pool = require('../config/db');

// Hàm để thêm người dùng mới vào cơ sở dữ liệu
const createUser = async (fullname, email, password) => {
  const query = {
    text: 'INSERT INTO users(fullname, email, password) VALUES($1, $2, $3) RETURNING *',
    values: [fullname, email, password],
  };
  
  try {
    const result = await pool.query(query);
    return result.rows[0];
  } catch (error) {
    throw error;
  }
};

module.exports = { createUser };
