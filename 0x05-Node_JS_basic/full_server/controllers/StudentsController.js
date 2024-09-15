import readDatabase from '../utils';

class StudentsController {
  static getAllStudents(request, response) {
    readDatabase(process.argv[2])
      .then((data) => {
        let result = '';
        for (const field in data) {
          if (Object.prototype.hasOwnProperty.call(data, field)) {
            result += `Number of students in ${field}: ${data[field].length}. List: ${data[field].join(', ')}\n`;
          }
        }
        let display = 'This is the list of our students\n';
        display += result;
        return response.status(200).send(display.slice(0, -1));
      })
      .catch(() => {
        response.status(500).send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(request, response) {
    if (!['CS', 'SWE'].includes(request.params.major)) {
      return response.status(500).send('Major parameter must be CS or SWE');
    }
    return readDatabase(process.argv[2])
      .then((data) => {
        if (!data[request.params.major]) {
          return response.status(500).send('Cannot load the database');
        }
        return response.status(200).send(`List: ${data[request.params.major].join(', ')}`);
      })
      .catch(() => {
        response.status(500).send('Cannot load the database');
      });
  }
}

module.exports = StudentsController;
