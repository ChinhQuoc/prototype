function Person(firstName, lastName) {
    this.FirstName = firstName || 'unknow';
    this.LastName = lastName || 'unknow';
}

Person.prototype.getFullName = function() {
    return this.FirstName + ' ' + this.LastName;
}

function Student(firstName, lastName, schoolName, grade) {
    Person.call(this, firstName, lastName);

    this.SchoolName = schoolName || 'unknow';
    this.Grade = grade || 0;
}

Student.prototype = new Person();
Student.prototype.constructor = Student;

var std1 = new Student("Alex", "Thomas", "Cambrige", 24);

console.log(std1.FirstName); 
console.log(std1.SchoolName); 

console.log(std1.getFullName()); 
console.log (std1 instanceof Student); 
console.log (std1 instanceof Person); 