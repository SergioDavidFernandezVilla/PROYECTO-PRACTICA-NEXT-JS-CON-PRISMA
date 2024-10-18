import Prisma from "@/app/lib/prisma";

export async function POST(request) {
    try {
        const body = await request.json();
        const {email, password, username} = body;

        const NewUser = await Prisma.user.create({
            data: {
                email,
                password,
                username
            }
        })

        return new Response(JSON.stringify(NewUser), {
            status: 201,
            headers: { 'Content-Type': 'application/json' }
        });

    } catch (error) {
        return new Response(JSON.stringify({error:"Ha ocurrido un error al enviar el user"}), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        })
    }
}