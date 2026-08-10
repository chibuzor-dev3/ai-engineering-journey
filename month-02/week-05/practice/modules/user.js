export const user = {
    name: "Chibuzor",
    course: "AI Engineering",
    goal: "AI Engineer"
};

export function introduceUser() {
    return `My name is ${user.name}. I am studying ${user.course} and my goal is to become an ${user.goal}.`;
}