const { pool } = require('../config/db');

const userController = {
  // Lấy tất cả người dùng
  getAllUsers: async (req, res) => {
    try {
      const users = await pool.query('SELECT * FROM users');
      res.status(200).json(users.rows);
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving users' });
    }
  },
};

module.exports = userController;
