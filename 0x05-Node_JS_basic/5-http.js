const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
      } else {
        let result = '';
        const lines = data.split('\n').filter((line) => line.trim() !== '');
        const cleaned = lines.slice(1);
        result += `Number of students: ${cleaned.length}\n`;
        const list = {};
        cleaned.forEach((element) => {
          const [firstname, , , field] = element.split(',');
          if (!list[field]) {
            list[field] = [];
          }
          list[field].push(firstname);
        });
        for (const field in list) {
          if (Object.prototype.hasOwnProperty.call(list, field)) {
            result += `Number of students in ${field}: ${list[field].length}. List: ${list[field].join(', ')}\n`;
          }
        }
        resolve(result.slice(0, -1));
      }
    });
  });
}

const { createServer } = require('http');

const hostname = '127.0.0.1';
const port = '1245';

const app = createServer((req, res) => {
  if (req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    countStudents(process.argv[2])
      .then((data) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end(`This is the list of our students\n${data}`);
      })
      .catch((error) => {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end(`This is the list of our students\n${error.message}`);
      });
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Not found\n');
  }
});

app.listen(port, hostname);

module.exports = app;
