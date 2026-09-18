const user = {
  name: "Chibuzor",
  goal: "AI Engineer",
  skills: ["JavaScript", "HTML", "CSS"]
};

const jsonUser = JSON.stringify(user);

console.log(jsonUser);

const parsedUser = JSON.parse(jsonUser);

console.log(parsedUser.name);
console.log(parsedUser.goal);
console.log(parsedUser.skills);