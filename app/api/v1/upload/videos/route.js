// app/api/v1/upload/videos/route.js
import multer from 'multer';
import path from 'path';
import { NextResponse } from 'next/server';

// Configuración de almacenamiento con Multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(process.cwd(), 'public/uploads'));
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

// Middleware para manejar la carga del archivo
export const POST = async (req, res) => {
  return new Promise((resolve, reject) => {
    upload.single('video')(req, {}, async (err) => {
      if (err) {
        reject(new NextResponse(JSON.stringify({ error: 'Error en la carga del archivo' }), { status: 500 }));
      }
      const filePath = `/videos/${req.file.filename}`;
      resolve(new NextResponse(JSON.stringify({ filePath }), { status: 200 }));
    });
  });
};
