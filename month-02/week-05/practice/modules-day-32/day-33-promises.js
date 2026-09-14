const userData = new Promise((resolve, reject) => {

    setTimeout(() => {

        const success = Math.random() > 0.5;

        if (success) {

            resolve("User data loaded successfully!");

        } else {

            reject("Failed to load user data.");

        }

    }, 2000);

});

userData
    .then(result => {

        console.log(result);

    })
    .catch(error => {

        console.error(error);

    });