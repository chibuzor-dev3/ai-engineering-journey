function loadData() {

    console.log("Loading user data...");

    setTimeout(() => {

        console.log("User data loaded!");
        console.log("Welcome, Chibuzor!");

    }, 3000);

}

loadData();

function processData(callback) {

    console.log("Processing data...");

    setTimeout(() => {

        console.log("Data processing complete.");

        callback();

    }, 2000);

}

function finished() {

    console.log("Task finished!");

}

processData(finished);

const promise = new Promise((resolve, reject) => {

    setTimeout(() => {

        const success = true;

        if (success) {

            resolve("Data received!");

        } else {

            reject("Could not get data.");

        }

    }, 2000);

});

promise
    .then(result => {

        console.log(result);

    })
    .catch(error => {

        console.error(error);

    });