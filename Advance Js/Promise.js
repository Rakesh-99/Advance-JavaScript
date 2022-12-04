// Senario



/*
1. User Registartion 


2. Send Welcome Email


3. Login 


4. Get user data


5. Display user data 

*/


function register() {
    return new Promise((resolve, reject) => {
        
        setTimeout(function () {
            reject("error in regd section"); 
        }, 3000);
        
    });
};
function sendEmail() {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log('Email has recived ');
            resolve();
        }, 2000);
        
    });
};
function login() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Login end ');
            resolve();
        }, 1000);
        
    })
};
function getUserData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Got user data');
            resolve();

        }, 1000);
    });
}
function displayUserData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Displayed user data");
            resolve();

        }, 1000); 
    });
};

register()
    .then(sendEmail)
    .then(login)
    .then(getUserData)
    .then(displayUserData).catch(function (data) { console.log(data); });