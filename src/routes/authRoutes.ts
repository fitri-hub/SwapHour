import { Router } from 'express';
import { body } from 'express-validator';
import rateLimit from 'express-rate-limit';
import { register, login } from '../controllers/authController';
import { protect } from '../middlewares/authMiddleware';

const router = Router();

// Rate Limiter Khusus Auth: Maksimal 10 request per 15 menit dari 1 IP
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, 
  max: 10,
  message: { status: 'error', message: 'Terlalu banyak percobaan login/register, silakan coba lagi setelah 15 menit.' }
});

// Route Register dengan Validasi Ketat
router.post(
  '/register',
  authLimiter,
  [
    body('email').isEmail().withMessage('Format email tidak valid'),
    body('password').isLength({ min: 6 }).withMessage('Password minimal 6 karakter'),
    body('name').notEmpty().withMessage('Nama tidak boleh kosong')
  ],
  register
);

// Route Login
<<<<<<< HEAD
=======
<<<<<<< HEAD
/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Login user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Login berhasil
 */
=======
>>>>>>> 1e4d4176030e715c5c4b6f94a227eee803e1eef3
>>>>>>> bc9362e4744d63465b26fe238933bb198c6018f6
router.post(
  '/login',
  authLimiter,
  [
    body('email').isEmail().withMessage('Format email tidak valid'),
    body('password').notEmpty().withMessage('Password tidak boleh kosong'),
  ],
  login
);

// Route Rahasia untuk Test Token
router.get('/me', protect, (req, res) => {
  // Jika berhasil lolos dari middleware 'protect', kode ini akan dieksekusi
  res.status(200).json({
    status: 'success',
    message: 'Akses diizinkan! Token JWT Anda valid.',
    user: (req as any).user // Menampilkan isi payload token
  });
});

export default router;