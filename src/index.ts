<<<<<<< HEAD
=======
<<<<<<< HEAD
import express, {Request, Response } from 'express';
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import 'dotenv/config'
=======
>>>>>>> bc9362e4744d63465b26fe238933bb198c6018f6
import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import 'dotenv/config';

// Import Routes
import authRoutes from './routes/authRoutes';
import userRoutes from './routes/userRoutes';
import skillRoutes from './routes/skillRoutes';

// Import Error Handlers
import { errorHandler } from './middlewares/errorHandlers';
import { AppError } from './utils/AppError';

<<<<<<< HEAD
=======
import swapRoutes from './routes/swapRoutes';
>>>>>>> 1e4d4176030e715c5c4b6f94a227eee803e1eef3

>>>>>>> bc9362e4744d63465b26fe238933bb198c6018f6
// Inisialisasi aplikasi Express
const app = express();
const PORT = process.env.PORT || 5000;

<<<<<<< HEAD
=======
<<<<<<< HEAD
// ================= MIDDLEWARES =================
app.use(express.json()); // Menerima request body berupa JSON
app.use(cors());         // Mengizinkan Akses dari frontend
app.use(helmet());       // Keamanan standar HTTP headers
app.use(morgan('dev'));  // Logger aktivitas di terminal

// ================= ROUTES =================
// Endpoint /health sangat penting untuk mencegah "cold start" server gratisan nanti

=======
>>>>>>> bc9362e4744d63465b26fe238933bb198c6018f6
// ================= MIDDLEWARES GLOBAL =================
app.use(express.json()); // Menerima request body berupa JSON
app.use(cors());         // Mengizinkan akses dari frontend
app.use(helmet());       // Keamanan standar HTTP headers
app.use(morgan('dev'));  // Logger aktivitas di terminal untuk memudahkan tracking error

// ================= ROUTES =================
// 1. Endpoint Health Check (Sangat penting untuk mencegah "cold start" di server gratisan)
<<<<<<< HEAD
=======
>>>>>>> 1e4d4176030e715c5c4b6f94a227eee803e1eef3
>>>>>>> bc9362e4744d63465b26fe238933bb198c6018f6
app.get('/health', (req: Request, res: Response) => {
    res.status(200).json({
        status: 'success',
        message: 'SwapHour API is running smoothly!',
    });
});

<<<<<<< HEAD
=======
<<<<<<< HEAD
// ================= START SERVER =================
app.listen(PORT, () => {
    console.log(`[SERVER] API SwapHour berjalan di http://localhost:${PORT}`)
})
=======
>>>>>>> bc9362e4744d63465b26fe238933bb198c6018f6
// 2. Rute Aplikasi Utama
// Menyambungkan URL dasar dengan router yang tepat.
app.use('/api/auth', authRoutes);     // Mengurus Register & Login
app.use('/api/users', userRoutes);    // Mengurus Update Profile
app.use('/api/skills', skillRoutes);  // Mengurus CRUD Katalog Skill
<<<<<<< HEAD
=======
app.use('/api/swaps', swapRoutes);    // Mengurus Mesin Utama Swap & Wallet
>>>>>>> bc9362e4744d63465b26fe238933bb198c6018f6

// ================= PENANGKAP ERROR 404 =================
// Tangkap semua rute (endpoint) yang tidak terdaftar (404 Not Found)
app.use((req: Request, res: Response, next: NextFunction) => {
  next(new AppError(`Rute ${req.originalUrl} tidak ditemukan di server ini!`, 404));
});

// ================= GLOBAL ERROR HANDLER =================
// Jaring pengaman terakhir. Wajib diletakkan di bagian PALING BAWAH dari semua middleware!
app.use(errorHandler);

// ================= START SERVER =================
app.listen(PORT, () => {
    console.log(`[SERVER] API SwapHour berjalan di http://localhost:${PORT}`);
<<<<<<< HEAD
});
=======
});
>>>>>>> 1e4d4176030e715c5c4b6f94a227eee803e1eef3
>>>>>>> bc9362e4744d63465b26fe238933bb198c6018f6
