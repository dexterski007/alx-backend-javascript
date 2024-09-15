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

module.exports = countStudents;

const express = require('express');

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  countStudents(process.argv[2])
    .then((data) => {
      res.send(`This is the list of our students\n${data}`);
    })
    .catch((error) => {
      res.status(500).send(`This is the list of our students\n${error.message}`);
    });
});

app.listen(port);

module.exports = app;
