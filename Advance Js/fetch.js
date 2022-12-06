function serverData() {
    const serverData = fetch("https://jsonplaceholder.typicode.com/users");

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(serverData);
        }, 5000);
    });
};

function showLocalData() {
    const fetchData = fetch("../readme.txt");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(fetchData);
        }, 1000);
    });
};
    serverData().then((response) => {
        
    return response.json();
    }).then((data)=>{
    console.log(data);
            
    }).then(showLocalData).then((response) => {
    return response.text();
    }).then((lcldata)=>{
    console.log(lcldata);
    }).catch((err) => {
        let x = err; 
        console.log('Error :'+x);
    })
    


