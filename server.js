const series = require('./data.js')
const http = require('http');

const server = http.createServer((req, res) => {
   
    res.writeHead(200, { 'Content-Type': 'text/html' });
   
    const html = `
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>${series.title}</title>
            </head>
            <body>
                <h1>${series.title}</h1>
                <p>Origin: ${series.origin}</p>
                <p>Year: ${series.year}</p>
            </body>
        </html>
    `

    res.end(html);
  });
  
  const port = 3001;
  server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });