interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const st1: Student = {
  firstName: 'Jane',
  lastName: 'Doe',
  age: 24,
  location: 'lagos'
};

const st2: Student = {
  firstName: 'Mary',
  lastName: 'Lui',
  age: 19,
  location: 'lagos'
};

const studentsList: Array<Student> = [st1, st2];

const tableEl = document.createElement('table');
document.body.appendChild(tableEl);

const tableHeader = document.createElement('tr');
const firstNameHeader = document.createElement('th');
const locationHeader = document.createElement('th');
firstNameHeader.textContent = 'First Name';
locationHeader.textContent = 'Location';
tableHeader.appendChild(firstNameHeader);
tableHeader.appendChild(locationHeader);
tableEl.appendChild(tableHeader);

studentsList.forEach((student) => {
  const tableRow = document.createElement('tr');
  const firstNameCell = document.createElement('td');
  const locationCell = document.createElement('td');

  firstNameCell.textContent = student.firstName;
  locationCell.textContent = student.location;
  tableRow.appendChild(firstNameCell);
  tableRow.appendChild(locationCell);
  tableEl.append(tableRow);
});
