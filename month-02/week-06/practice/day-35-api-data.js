async function getUsers() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const users = await response.json();

    const names = users.map(user => user.name);

    console.log("User Names:");
    console.log(names);

    const cities = users.map(user => user.address.city);

    console.log("Cities:");
    console.log(cities);

    const userWithId3 = users.find(user => user.id === 3);

    console.log("User with ID 3:");
    console.log(userWithId3);

    users.forEach(user => {
      console.log(`Name: ${user.name}`);
      console.log(`Email: ${user.email}`);
      console.log(`City: ${user.address.city}`);
      console.log(`Company: ${user.company.name}`);
      console.log("--------------------");
    });

    const allNames = users.map(user => user.name);

    console.log("All names:");
    console.log(allNames);

    const userWithId5 = users.find(user => user.id === 5);

    console.log("User with ID 5:");
    console.log(userWithId5);

  } catch (error) {
    console.error("Error:", error.message);
  }
}

getUsers();