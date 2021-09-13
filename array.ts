const salary: number = 7500;
const friendsSalaries: number[] = [7500, 12304, 42204, 20303, 10303];
const friends: string[] = ["Sakib", "Rakib", "Nakib", "Akib"];

friendsSalaries[0] = 10500;
friendsSalaries.push(13100);

friends.push("Ayan");
friends[2] = "Atif";

// friends.push(45000);

let max = 0;
for (const salary of friendsSalaries) {
  if (salary > max) {
    max = salary;
  }
}
