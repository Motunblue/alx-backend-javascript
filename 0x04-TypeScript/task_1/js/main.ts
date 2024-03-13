interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

interface Director extends Teacher {
  numberOfReports: number;
}

interface PrintTeacherFunction {
  (firstName: string, lastName: string): string;
}

let printTeacher: PrintTeacherFunction;
printTeacher = function (firstName: string, lastName: string): string {
  return `${firstName[0]}. ${lastName}`;
}

class StudentClass {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastname: string) {
    this.firstName = firstName;
    this.lastName = lastname;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string{
    return this.firstName
  }
}
