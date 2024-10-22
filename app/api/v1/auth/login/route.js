import Prisma from "@/app/lib/prisma";
import bcrypt from 'bcrypt';

import { validateLoginData } from "@/app/utils/validation/validateUserData";

// LOGIN
export async function POST(request) {
    try {
        // Datos que se van a enviar
        const body = await request.json();
        const { email, password } = body;
        
        // Validar datos de entrada
        const validateDateUserError = validateLoginData(email, password);

        // Si hay errores de validación, responder con los errores
        if (validateDateUserError.length > 0) {
            return new Response(JSON.stringify({ errors: validateDateUserError }), {
                status: 400, // Bad Request <- Ha ocurrido un error en la petición.
                headers: { 'Content-Type': 'application/json' }
            });
        }

        // Buscar correo en la base de datos
        const user = await Prisma.user.findUnique({
            where: { email: email }
        });

        // Si el usuario no existe, retornar error
        if (!user) {
            return new Response(JSON.stringify({ error: 'Usuario no encontrado' }), {
                status: 404,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        // Comparar la contraseña ingresada con la almacenada
        const isPasswordHash = await bcrypt.compare(password, user.password);

        // Si la contraseña es incorrecta
        if (!isPasswordHash) {
            return new Response(JSON.stringify({ error: 'Contraseña incorrecta' }), {
                status: 401,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        // Si todo es correcto, devolver respuesta exitosa
        return new Response(JSON.stringify({
            message: "Login exitoso",
            user: {
                id: user.id,
                email: user.email
            }
        }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });

    } catch (error) {
        console.log(error);

        return new Response(JSON.stringify({ error: 'Ocurrió un error en el servidor (Login)' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}
