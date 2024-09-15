const fs = require('fs');

function countStudents(path) {
  if
  (!fs.existsSync(path)) {
    throw new Error('Cannot load the database');
  }
  const file = fs.readFileSync(path, 'utf-8');
  const lines = file.split('\n').filter((line) => line.trim() !== '');
  const cleaned = lines.slice(1);
  console.log(`Number of students: ${cleaned.length}`);
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
      console.log(`Number of students in ${field}: ${list[field].length}. List: ${list[field].join(', ')}`);
    }
  }
}

module.exports = countStudents;
