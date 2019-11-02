import http from "http"
import url from "url"
import "dotenv/config"

const STATIC = "/static/"

const httpServer = http.createServer(
    (req, res) => {
        let requestUrl = url.parse(req.url)
        let path = requestUrl.path

        if (path.startsWith(STATIC)) {
            res.write(__dirname + path + '\n')
            res.end()
        } else {
            res.write("Hello World!\n")
            res.end()
        }
    }
)

const port = process.env.SERVER_HTTP_PORT
const baseUrl = "http:\/\/localhost:" + port

httpServer.listen(port)

console.log(`HTTP server running on ${baseUrl}`)
console.log(`Static 🔗 ${baseUrl}${STATIC}`)
console.log(`       📁 ${__dirname}${STATIC}`)