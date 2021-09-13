interface Player {
  name: string;
  club: string;
  salary: number;
  wife?: string;
  previousClubs?: string[];
}

const messy: Player = {
  name: "L Messy",
  club: "Bercelona",
  salary: 12000,
  wife: "Mew Su",
};

const hannan: Player = {
  name: "A Hannan",
  club: "Mohamedan",
  salary: 5000,
};

interface Employee {
  name: string;
  designation: string;
  salary: number;
  age: number;
}

interface Developer extends Employee {
  language: string;
  codeEditor: string;
  typingSpeed: number;
}

const zuku: Developer = {
  name: "Hafiz",
  designation: "Full Stack Web Developer",
  salary: 85000,
  age: 25,
  language: "js",
  codeEditor: "VS Code",
  typingSpeed: 50,
};
