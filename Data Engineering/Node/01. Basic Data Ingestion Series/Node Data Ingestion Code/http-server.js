const http = require('http')
const port = 3000

http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    })
    res.statusCode = 200
    res.write('<h1>Welcome</h1>')
    res.end('<h3>Home Page</h3>')
}).listen(port)

console.log(`Server running at http://localhost:${port}`)