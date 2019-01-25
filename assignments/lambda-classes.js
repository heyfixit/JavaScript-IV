// CODE here for your Lambda Classes

class Person {
  constructor(attrs) {
    this.name = attrs.name;
    this.age = attrs.age;
    this.location = attrs.location;
    this.gender = attrs.gender;
  }

  speak() {
    return `Hello my name is ${this.name}, I am from ${this.location}`;
  }
}

class Instructor extends Person {
  constructor(attrs) {
    super(attrs);
    this.specialty = attrs.specialty;
    this.favLanguage = attrs.favLanguage;
    this.catchPhrase = attrs.catchPhrase;
  }

  demo(subject) {
    return `Today we are learning about ${subject}`;
  }

  grade(student, subject) {
    return `${student.name} receives a perfect score on ${subject}`;
  }

  rollGrade(student) {
    student.grade = Math.floor(Math.random() * 100);
    return `${student.name}'s grade is now: ${student.grade}`;
  }
}

class Student extends Person {
  constructor(attrs) {
    super(attrs);
    this.previousBackground = attrs.previousBackground;
    this.className = attrs.className;
    this.favSubjects = attrs.favSubjects;
    this.grade = attrs.grade;
  }

  listSubjects() {
    return this.favSubjects.join("\n");
  }

  PRAssignment(subject) {
    return `${this.name} has submitted a PR for ${subject}`;
  }

  sprintChallenge(subject) {
    return `${this.name} has begun the sprint challenge on ${subject}`;
  }

  graduate() {
    if(this.grade >= 70) {
      return `${this.name} is eligible for graduation! (${this.grade})`;
    } else {
      return `${this.name} is not eligible for graduation! (${this.grade})`;
    }
  }
}

class ProjectManager extends Instructor {
  constructor(attrs) {
    super(attrs);
    this.gradClassName = attrs.gradClassName;
    this.favInstructor = attrs.favInstructor;
  }

  standUp(channel) {
    return `${this.name} announces to ${channel}, @channel standby times!`;
  }

  debugsCode(student, subject) {
    return `${this.name} debugs ${student.name}'s code on ${subject}`;
  }
}

// Testing
// Instructor
const fred = new Instructor({
  name: 'Fred',
  location: 'Bedrock',
  age: 37,
  gender: 'male',
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Don't forget the homies`
});

// Student
const dude = new Student({
  name: 'Dude',
  location: 'Place',
  age: 35,
  gender: 'male',
  className: 'Web17',
  favSubjects: [ 'JavaScript', 'CSS', 'HTML' ],
  previousBackground: [ 'Dude things' ],
  grade: 100
});

// Project Manager
const pmDude = new ProjectManager({
  name: 'PMDude',
  location: 'PMDude Place',
  age: 35,
  gender: 'male',
  className: 'Web17',
  favLanguage: 'CSS',
  specialty: 'Managing Things',
  catchPhrase: 'Managerial tasks are my favorite',
  favInstructor: 'Fred',
  gradClassName: 'Web2'
});

// Instructor
console.log(fred.speak());
console.log(fred.demo('Test Subject'));
console.log(fred.grade(dude, 'Test Subject'));
console.log(fred.rollGrade(dude));

// Student
console.log(dude.speak());
console.log(dude.listSubjects());
console.log(dude.PRAssignment('Test Subject'));
console.log(dude.sprintChallenge('Test Subject'));

// ProjectManager
console.log(pmDude.speak());
console.log(pmDude.demo('Test Subject'));
console.log(pmDude.grade(dude, 'Test Subject'));
console.log(pmDude.standUp('Test Subject'));
console.log(pmDude.debugsCode(dude, 'Test Subject'));

// test graduate method
for(let i = 0; i < 5; i++) {
  console.log(fred.rollGrade(dude));
  console.log(dude.graduate());
}
