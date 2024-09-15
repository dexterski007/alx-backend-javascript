import fs from 'fs';

const readDatabase = ((path) => new Promise((resolve, reject) => {
  fs.readFile(path, 'utf-8', (error, data) => {
    if (error) {
      reject(new Error('Cannot load the database'));
    } else {
      const lines = data.split('\n').filter((line) => line.trim() !== '');
      const cleaned = lines.slice(1);
      const list = {};
      cleaned.forEach((element) => {
        const [firstname, , , field] = element.split(',');
        if (!list[field]) {
          list[field] = [];
        }
        list[field].push(firstname);
      });
      resolve(list);
    }
  });
})
);

module.exports = readDatabase;
