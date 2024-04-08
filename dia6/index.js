import http from 'node:http';
import path from 'node:path';
import fs from 'node:fs/promises';

const server = http.createServer(async (req, res) => {
    const filePath = path.resolve('./public/index.html');

    const fileContent = await fs.readFile(filePath, 'utf8');

    res.end(fileContent);
});

server.listen(3000, () =>
 console.log('Server running on http://localhost:3000')
);