// CODE here for your Lambda Classes

class Person {
  constructor(attrs) {
    this.name = attrs.name;
    this.age = attrs.age;
    this.location = attrs.location;
    this.gender = attrs.gender;
  }

  speak() {
    console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
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
    console.log(`Today we are learning about ${subject}`);
  }

  grade(student, subject) {
    console.log(`${student.name} receives a perfect score on ${subject}`);
  }
}

class Student extends Person {
  constructor(attrs) {
    super(attrs);
    this.previousBackground = attrs.previousBackground;
    this.className = attrs.className;
    this.favSubjects = attrs.favSubjects;
  }

  listSubjects() {
    console.log(this.favLanguage.join("\n"));
  }

  PRAssignment(subject) {
    console.log(`${this.name} has submitted a PR for ${subject}`);
  }

  sprintChallenge(subject) {
    console.log(`${this.name} has begun the sprint challenge on ${subject}`);
  }
}

class ProjectManager extends Instructor {
  constructor(attrs) {
    super(attrs);
    this.gradClassName = attrs.gradClassName;
    this.favInstructor = attrs.favInstructor;
  }

  standUp(channel) {
    console.log(`${this.name} announces to ${channel}, @channel standby times!`);
  }

  debugsCode(student, subject) {
    console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
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
fred.speak();
fred.demo('Test Subject');
fred.grade('Dude', 'Test Subject');

// Student
const dude = new Student({
  name: 'Dude',
  location: 'Place',
  age: 35,
  gender: 'male',
  className: 'Web17',
  favSubjects: [ 'JavaScript', 'CSS', 'HTML' ],
  previousBackground: [ 'Dude things' ]
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
