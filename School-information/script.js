console.log("kick");
// template data given by masai school..........
const school = {
  name: "XYZ School",
  establishYear: 1990,
  departments: {
    math: { teachers: 5, students: 150 },
    science: { teachers: 4, students: 120 },
    history: { teachers: 3, students: 100 },
    english: { teachers: 4, students: 130 },
  },
  courses: ["math", "science", "history", "english"],
  students: [
    {
      name: "Alice",
      className: "Grade 5",
      scores: { math: 95, science: 88, history: 85, english: 92 },
    },
    {
      name: "Bob",
      className: "Grade 4",
      scores: { math: 80, science: 78, history: 92, english: 85 },
    },
    {
      name: "Charlie",
      className: "Grade 5",
      scores: { math: 88, science: 90, history: 78, english: 88 },
    },
    {
      name: "Diana",
      className: "Grade 4",
      scores: { math: 92, science: 85, history: 88, english: 90 },
    },
  ],
};
//Problem 10: countCalculation
// counting calculation using multilevel destructuring............
function countCalculation(school) {
  let { math, history } = school.departments;
  let { teachers: mathTeachersCount, students: mathStudentsCount } = math;
  let { teachers: historyTeachersCount, students: historyStudentsCount } =
    history;
  return {
    mathTeachersCount,
    historyTeachersCount,
    mathStudentsCount,
    historyStudentsCount,
  };
}
console.log(countCalculation(school));
//Problem 11: findTopStudent
// finding top student using multilevel destructuring........
function findTopStudent(school, courseName) {
  //destructuring students array from school object.................
  let { students } = school;
  // initializing topStudent as first element of students array.........
  let topStudent = students[0];
  // looping through students array.......
  for (let i = 0; i < students.length; i++) {
    //destructuring scores object from students array........
    let { scores } = students[i];
    //comparing scores of topStudent and current student..........
    if (scores[courseName] > topStudent.scores[courseName]) {
      // if current student has higher score then updating topStudent
      topStudent = students[i];
    }
  }
  return topStudent;
}
console.log(findTopStudent(school, "history"));
//Problem 12: add new department.....................
// new department variable............
let newDepartment = {
  art: { teachers: 2, students: 50 },
};
// adding new department using spread operator............
function addNewDept(school, newDepartment) {
  let { departments } = school;

  let updatedDepartments = { ...departments, ...newDepartment };
  return { ...school, departments: updatedDepartments };
}
console.log(addNewDept(school, newDepartment));

//Problem 13:
// finding highest student count in department.........
function highestStudentCountDepartment(school) {
  //destructuring departments from school object............
  let { departments } = school;
  // -g variable.....
  let highestCountDept = "";
  let highestCount = 0;
  // looping through departments object.......
  for (let dept in departments) {// finding key in object array....

    if (departments[dept].students > highestCount) {
        highestCountDept = dept;
        highestCount = departments[dept].students;
    }
  }
  return highestCountDept;
}
console.log(highestStudentCountDepartment(school));

//Problem 14:
//creating greeting function using object key value...........
function generateGreeting(name, language = "English") {
  const greetings = {
    English: `Hello, ${name}!`,
    Spanish: `Hola, ${name}!`,
    French: `Bonjour, ${name}!`,
  };
  return greetings[language] || greetings.English;
}
console.log(generateGreeting("Alice"));
console.log(generateGreeting("Bob", "Spanish"));
console.log(generateGreeting("Charlie", "French"));
