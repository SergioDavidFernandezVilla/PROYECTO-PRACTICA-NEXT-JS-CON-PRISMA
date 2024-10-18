import Prisma from "@/app/lib/prisma";
// Exporta la función para manejar solicitudes GET
export async function GET(request) {
    try {
        // Usar Prisma para obtener todos los videos de la base de datos
        const videos = await Prisma.video.findMany();
        
        return new Response(JSON.stringify(videos), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: 'Error fetching videos' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}

// Exporta la función para manejar solicitudes POST
export async function POST(request) {
    try {
        const body = await request.json();
        const { title, description } = body;

        // Usar Prisma para crear un nuevo video en la base de datos
        const newVideo = await Prisma.video.create({
            data: {
                title,
                description
            },
        });

        return new Response(JSON.stringify(newVideo), {
            status: 201,
            headers: { 'Content-Type': 'application/json' }
        });
    } catch (error) {
        console.log(error, "Error dev")

        return new Response(JSON.stringify({ error: 'Error creating video' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}
