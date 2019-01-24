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

  rollGrade(student) {
    student.grade = Math.floor(Math.random() * 100);
    console.log(`${student.name}'s grade is now: ${student.grade}`);
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
    console.log(this.favSubjects.join("\n"));
  }

  PRAssignment(subject) {
    console.log(`${this.name} has submitted a PR for ${subject}`);
  }

  sprintChallenge(subject) {
    console.log(`${this.name} has begun the sprint challenge on ${subject}`);
  }

  graduate() {
    if(this.grade >= 70) {
      console.log(`${this.name} is eligible for graduation! (${this.grade})`);
    } else {
      console.log(`${this.name} is not eligible for graduation! (${this.grade})`);
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
fred.speak();
fred.demo('Test Subject');
fred.grade(dude, 'Test Subject');
fred.rollGrade(dude);

// Student
dude.speak();
dude.listSubjects();
dude.PRAssignment('Test Subject');
dude.sprintChallenge('Test Subject');

// ProjectManager
pmDude.speak();
pmDude.demo('Test Subject');
pmDude.grade(dude, 'Test Subject');
pmDude.standUp('Test Subject');
pmDude.debugsCode(dude, 'Test Subject');

for(let i = 0; i < 5; i++) {
  fred.rollGrade(dude);
  dude.graduate();
}
