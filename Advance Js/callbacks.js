// So what is callbacks function in Js ?

// Passing a function in another function as an argument is called callbacks function

/*
function displayLastName(lName) {
    console.log('My last name is ' + lName);

};

function displayFirstName(fName, callbacks) {
    console.log('My firstName is ' + fName);
    callbacks('Parida');
};



displayFirstName('Rakesh ', displayLastName)    // In this line we are passing a function in another function as an argument .
*/

    function displayName(firstName, callbacks) {
    setTimeout(function () {
        callbacks(firstName);
    }, 1000);
    }
    function displayLastName(lastName, callback) {
    setTimeout(function () {
        callback(lastName);
    }, 2000);
    }
    let showName = displayName("Rakesh kumar", function (showName) {
    console.log(showName);

    displayLastName("Parida", function (show) {
        console.log(show);
    });
    });
