import Prisma from "@/app/lib/prisma";

export async function POST(request) {
    try {
        const body = await request.json();
        const {email, password, username} = body;

        const newUser = await Prisma.user.create({
            data:{
                email: email,
                password: password,
                username: username
            }
        })

        return new Response(JSON.stringify(newUser), {
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