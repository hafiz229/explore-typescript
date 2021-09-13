"use strict";
const salary = 7500;
const friendsSalaries = [7500, 12304, 42204, 20303, 10303];
const friends = ["Sakib", "Rakib", "Nakib", "Akib"];
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
