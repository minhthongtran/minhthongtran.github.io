class Course {
  id;
  name;
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  save() {
    db.push(this);
    return this;
  }

  static getAll() {
    return db;
  }

  static findById(id) {
    const index = db.findIndex((course) => course.id == id);
    return db[index];
  }
}

let db = [];
let mpp = new Course(1, 'MPP');
let fpp = new Course(2, 'FPP');
let wap = new Course(3, 'WAP');
db.push(mpp);
db.push(fpp);
db.push(wap);

module.exports = Course;
