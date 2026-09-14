const getUser = new Promise((resolve) => {
  setTimeout(() => {
    resolve("User found: Chibuzor");
  }, 1000);
});

const getLocation = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Location found: Abuja");
  }, 1000);
});

const getweather = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Weather found: Sunny, 28°C");
  }, 1000);
});

async function getUserInformation() {
  const user = await getUser;
  console.log(user);

  const location = await getLocation;
  console.log(location);

  const weather = await getweather;
  console.log(weather);
}

getUserInformation();