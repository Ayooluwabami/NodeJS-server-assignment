const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    res.end('Ayobami');

});

const PORT = 8900;

server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
