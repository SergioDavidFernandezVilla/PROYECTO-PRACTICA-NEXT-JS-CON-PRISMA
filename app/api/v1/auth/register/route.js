import Prisma from "@/app/lib/prisma";
import bcrypt from 'bcrypt';

import { validateRegisterData } from "@/app/utils/validation/validateUserData";


//REGISTER <-
export async function POST(request) {
    try {

        //Datos que se van enviar
        const body = await request.json();
        const {email, password, username, role} = body;
        
        // Hashear la contraseña antes de guardarla
        const hashPassword = await bcrypt.hash(password, 10)

        //Restricciones y marcadores errores.
        const validateDateUserError = validateRegisterData(email, password, username);

        //Todos errores
        const allErrors = [...validateDateUserError];

        if (allErrors.length > 0) {
            return new Response(JSON.stringify({ errors: allErrors}), {
                status: 400, // Bad Request <- Ha ocurrido un error en la petición.
                headers: { 'Content-Type': 'application/json' }
            });
        }

        //Crear un nuevo usuario
        const NewUser = await Prisma.user.create({
            data: {
                email: email,
                password: hashPassword,
                username: username,
                role
            }
        })

        return new Response(JSON.stringify({mesage: 'Se ha creado la cuenta', NewUser}), {
            status: 201,
            headers: { 'Content-Type': 'application/json' }
        });

    } catch (error) {
        return new Response(JSON.stringify({error: 'Ha pasado un error al enviar la patición'}), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        })
    }
}