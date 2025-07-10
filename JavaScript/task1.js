// Step 1: Define Trainee class
class Trainee {
  constructor(id, name, course) {
    this.id = id;
    this.name = name;
    this.course = course;
  }
}

// Step 2: Create a Map to store trainees
const traineeMap = new Map();

// Step 3: Add 5 trainees using a for loop
for (let i = 1; i <= 5; i++) {
  const id = `T${i}`;
  const name = `Trainee${i}`;
  const course = `Course${i}`;

  const trainee = new Trainee(id, name, course);
  traineeMap.set(id, trainee); // key = id, value = object
}

// Step 4: Convert Map values to array for table display
const traineeArray = Array.from(traineeMap.values());

// Step 5: Show trainees in table format
console.log("📋 Trainee Map (Table View):");
console.table(traineeArray);

// Step 6: Convert trainee list to JSON and print
const jsonData = JSON.stringify(traineeArray, null, 2);
console.log("\n📦 JSON Output:");
console.log(jsonData);
