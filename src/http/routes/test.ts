import { FastifyInstance } from "fastify"

export async function testAPI(app: FastifyInstance) {

    app.get("/test", () => {
        console.log("Successful ping!")
    
        return "Successful ping!"
    })
}