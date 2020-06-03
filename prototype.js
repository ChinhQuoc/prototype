function Student() {
    this.name = "Hoang Anh",
    this.gender = "F"
}

Student.prototype.age = 23;

var sinhVien1 = new Student();
console.log(sinhVien1.name + ': ' + sinhVien1.age);

Student.prototype = { age: 40 }

var sinhVien2 = new Student();
console.log(sinhVien2.name + ': ' + sinhVien2.age);
console.log(sinhVien1.name + ': ' + sinhVien1.age);