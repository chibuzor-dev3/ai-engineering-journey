const userData = new Promise((resolve, reject) => {

    setTimeout(() => {

        const success = false;

        if (success) {

            resolve("User data loaded!");

        } else {

            reject("Failed to load user data.");

        }

    }, 2000);

});


async function getUserData() {

    try {

        const result = await userData;

        console.log(result);

    } catch (error) {

        console.error(error);

    }

}


getUserData();


const weatherData = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = Math.random() > 0.5;

    if (success) {
      resolve("Weather data received!");
    } else {
      reject("Failed to fetch weather data.");
    }
  }, 2000);
});

async function getWeather() {
  try {
    const result = await weatherData;
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

getWeather();