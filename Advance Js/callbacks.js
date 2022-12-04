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

/*
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

*/



// Q.1
// With the basis of name fetch hobbies of that person







/*
  1.  Get user name
  2.  Get user hobbies after getting the user name 
  3.  show how much time it took to learn these skills 

 */


/*
function getName(userName, callback) {

  setTimeout(() => {
    console.log(userName);
    callback();
  }, 2000);
};

function getHobbies(hobbies, callback) {
  setTimeout(() => {
    console.log(hobbies);
    callback();
  }, 1000)
 
};

function learningPeriod(timeTaken) {
  setTimeout(() => {
    console.log(timeTaken);
  }, 2000);
  
}


getName('Rakesh Kumar Parida', function () {
  getHobbies(["coding", "Photography"], function () {
    learningPeriod(['One year', 'Two years']);
  });
});

*/




/*
1. User Registartion 


2. Send Welcome Email


3. Login 


4. Get user data


5. Display user data 

*/

function register(callbacks) {
    

    setTimeout(() => {
        console.log("User has registerd sucessfully ");
        callbacks();
    }, 1000);
}

function sendEmail(callbacks) {
    setTimeout(() => {
        console.log("Mail has sent sucessfully");
        callbacks();
    }, 6000);
    
}

function login(callbacks) {
    setTimeout(() => {
        console.log("Login end ");
        callbacks();
    }, 1000);

}

function getUserData(callbacks) {
    setTimeout(() => {
        console.log("Got user data");
        callbacks();
    }, 2000);
    
}

function displayUserData() {
    setTimeout(() => {
        console.log("Displayed user data");
    }, 4000);
    
}
 
register(function () {

    sendEmail(function () {

        login(function () {

            getUserData(
            
                function () {

                    displayUserData();
                }
            );   
        });
        
    });
    
});

console.log('Other Application Work !');
