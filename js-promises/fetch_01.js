const url = "https://jsonplaceholder.typicode.com/posts/1"

fetch(url);

fetch("https://jsonplaceholder.typicode.com/posts/1")
.then((response) =>{
    return response.json();
})
.then((data) => {
    console.log(data);
})

// handle error gracefully 
.catch((error) => {
    console.log("Something went wrong!", error)
});
