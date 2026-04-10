const url = "https://api.api-ninjas.com/v1/animals?name=wolf";
const options = {
  method: "GET",
  headers: {
    "X-Api-Key": "7OKl9fCN7tgKbENZQsVBtAzjcjEPsdzF9fwyIM5u",
    "Conteny-Type": "application/json",
  },
};

fetch(url, options)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })

  // handle error gracefully
  .catch((error) => {
    console.log("Something went wrong!", error);
  });
