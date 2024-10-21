import Prisma from "@/app/lib/prisma";
import { validateLoginData } from "@/app/utils/validation/validateUserData";

export async function POST(request) {
    try {
         //Datos que se van enviar
         const body = await request.json();
         const {email, password} = body;
 
         //Restricciones y marcadores errores.
         const validateDateUserError = validateLoginData(email, password);
 
         //Todos errores
         const allErrors = [...validateDateUserError];

        //Buscar correo en db
        const user = await Prisma.user.findUnique(
            {
                where: {
                    email:email
                }
            }
        )

        if (allErrors.length > 0) {
            return new Response(JSON.stringify({ errors: allErrors}), {
                status: 400, // Bad Request <- Ha ocurrido un error en la petición.
                headers: { 'Content-Type': 'application/json' }
            });
        }

        return new Response(JSON.stringify({message:"Login existoso", user: {
           id: user.id,
           email: user.email
        }}), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });

    } catch (error) {
        console.log(error)

        return new Response(JSON.stringify({ error: 'Paso un error al enviar los datos (Login)'}), {
            status:500,
            headers: { 'Content-Type': 'application/json' }
        })
    }
}