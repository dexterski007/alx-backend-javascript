export interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const Student1: Student = {
  firstName: "Hamid",
  lastName: "Zahir",
  age: 19,
  location: "Marrakech",
};

const Student2: Student = {
  firstName: "Lotfi",
  lastName: "Bouchnak",
  age: 20,
  location: "Casablanca",
};

export const studentsList = [Student1, Student2];

const table = document.createElement('table');
const tbody = document.createElement('tbody');
const titleRow = document.createElement('tr');

const fnameTitleCell = document.createElement('th');
fnameTitleCell.textContent = 'First Name';
titleRow.appendChild(fnameTitleCell);

const locationTitleCell = document.createElement('th');
locationTitleCell.textContent = 'Location';
titleRow.appendChild(locationTitleCell);

tbody.appendChild(titleRow);

studentsList.forEach((student) => {
  const row = document.createElement('tr');

  const fnameCell = document.createElement('td');
  fnameCell.textContent = student.firstName;
  row.appendChild(fnameCell);

  const locationCell = document.createElement('td');
  locationCell.textContent = student.location;
  row.appendChild(locationCell);

  tbody.appendChild(row);
});

table.appendChild(tbody);
document.body.appendChild(table);

table.style.width = '50%';
table.style.margin = 'auto';
table.style.borderCollapse = 'collapse';

const ths = table.querySelectorAll('th');
ths.forEach((th) => {
  th.style.border = '1px solid black';
  th.style.padding = '8px';
  th.style.backgroundColor = 'lightgray';
});

const tds = table.querySelectorAll('td');
tds.forEach((td) => {
  td.style.border = '1px solid black';
  td.style.padding = '8px';
});
