import fs from "fs"
import http from "http"
import path from "path"
import url from "url"
import "dotenv/config"

const STATIC = "/static/"

const httpServer = http.createServer(
    (req, res) => {
        const requestUrl = url.parse(req.url)
        const requestPath = requestUrl.path

        if (requestPath.startsWith(STATIC)) {
            const filePath = __dirname + requestPath

            const exists = fs.existsSync(filePath)
            if(!exists) {
                res.write(`File ${filePath} not found`)
                res.end('\n')    
            } else {
                const content = fs.readFileSync(filePath)                
                const extension = path.parse(filePath).ext

                res.setHeader('Content-type', `application/x-${extension}` )
                res.end(content)
            }
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