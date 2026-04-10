function getAllAnimalsByLetter(letter) {
  let allResults = [];

  function fetchNextPage() {
    const url = `https://api.api-ninjas.com/v1/animals?name=${letter}`;

    return fetch(url, {
      headers: { "X-Api-Key": "7OKl9fCN7tgKbENZQsVBtAzjcjEPsdzF9fwyIM5u" },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.length === 0) {
          console.log(
            `Found ${allResults.length} animals containing the letter ${letter}`,
          );
          console.log(allResults);
          return allResults;
        }

        allResults.push(...data);
        offset += 30;
      });
  }

  return fetchNextPage();
}

getAllAnimalsByLetter("a")
  .then((animals) => {
    console.log("Finished fetching all pages.");
    console.log(animals.map((animal) => animal.name));
  })
  .catch((error) => {
    console.error("Something went wrong!", error);
  });