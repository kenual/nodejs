import http from "http"
import "dotenv/config"

const httpServer = http.createServer(
    (req, res) => {
        res.write("Hello World!")
        res.end()
    }
)

httpServer.listen(process.env.SERVER_HTTP_PORT)

console.log(`HTTP server running on http:\/\/localhost:${process.env.SERVER_HTTP_PORT}`)