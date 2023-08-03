interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any;
}

interface Directors extends Teacher {}

interface printTeacherFunction {
  firstName: string;
  lastName: string;
}

function printTeacher(firstName: string, lastName: string) {
  return `${firstName.slice(0, 1)}. ${lastName}`;
}

interface StudentConstructor {
  new (firstName: string, lastName: string): StudentInterface;
}

interface StudentInterface {
  workOnHomework(): string;
  displayName(): string;
}

const StudentClass: StudentConstructor = class StudentClass
  implements StudentInterface
{
  constructor(public firstName: string, public lastName: string) {}

  workOnHomework() {
    return 'Currently working';
  }

  displayName() {
    return this.firstName;
  }
};
