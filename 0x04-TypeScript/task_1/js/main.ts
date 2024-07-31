interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
  return `${firstName[0]}. ${lastName}`
}

interface studentConstructor {
  new (firstName: string, lastName: string): studentClassInterface;
}

interface studentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass implements studentClassInterface {
  _firstName: string;
  _lastName: string;
  
  constructor(firstName: string, lastName: string) {
    this._firstName = firstName;
    this._lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this._firstName;
  }
}


const student = new StudentClass("Jane", "Doe");
console.log(student.displayName()); // Output: Jane
console.log(student.workOnHomework()); 
