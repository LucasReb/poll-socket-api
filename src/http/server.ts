import fastify from "fastify"
import { createPoll } from "./routes/create-polls"
import { testAPI } from "./routes/test";

const app = fastify();

app.register(createPoll)
app.register(testAPI)

app.listen({port: 3333}).then(() => {
    console.log("HTTP Server running...")
})