interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Sixtus',
  lastName: 'Agbo',
  age: 19,
  location: 'Nigeria',
};
const student2: Student = {
  firstName: 'Jenna',
  lastName: 'Anderson',
  age: 18,
  location: 'Carlifornia',
};

const studentsList = [student1, student2];

const table = document.createElement('table');
document.body.appendChild(table);

studentsList.forEach((student) => {
  const tr = table.insertRow();
  const firstNameCell = tr.insertCell();
  const locationCell = tr.insertCell();

  firstNameCell.innerText = student.firstName;
  locationCell.innerText = student.location;
});
