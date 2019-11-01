import http from "http"

const httpServer = http.createServer(
    (req, res) => {
        res.write("Hello World!")
        res.end()
    }
)

httpServer.listen(8080)

console.log("HTTP Server Started.")