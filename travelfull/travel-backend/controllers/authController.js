const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { pool } = require('../config/db');

// Mảng lưu refresh token
let refreshTokens = [];

const authController = {
  // Đăng ký người dùng
  registerUser: async (req, res) => {
    const { fullname, email, password, authz_id } = req.body;

    if (!fullname || !email || !password || !authz_id) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    try {
      const userCheck = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
      if (userCheck.rows.length > 0) {
        return res.status(400).json({ message: 'Email already exists' });
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      await pool.query(
        'INSERT INTO users (fullname, email, password, authz_id) VALUES ($1, $2, $3, $4)',
        [fullname, email, hashedPassword, authz_id]
      );

      res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error registering user' });
    }
  },

  // Đăng nhập
  loginUser: async (req, res) => {
    const { email, password } = req.body;

    try {
      const userResult = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
      const user = userResult.rows[0];
      if (!user) {
        return res.status(400).json({ message: 'Email or password is incorrect' });
      }

      const validPassword = await bcrypt.compare(password, user.password);
      if (!validPassword) {
        return res.status(400).json({ message: 'Email or password is incorrect' });
      }

      const accessToken = jwt.sign(
        { id: user.id, isAdmin: user.isadmin },
        process.env.JWT_ACCESS_KEY,
        { expiresIn: '30m' }
      );

      const refreshToken = jwt.sign(
        { id: user.id, isAdmin: user.isadmin },
        process.env.JWT_REFRESH_KEY,
        { expiresIn: '365d' }
      );
      refreshTokens.push(refreshToken);

      res.cookie('refreshToken', refreshToken, {
        httpOnly: true,
        secure: false,
        path: '/',
        sameSite: 'strict',
      });

      const { password: userPassword, ...otherDetails } = user;
      res.status(200).json({ ...otherDetails, accessToken });
    } catch (error) {
      res.status(500).json({ message: 'Login failed' });
    }
  },
};

module.exports = authController;
