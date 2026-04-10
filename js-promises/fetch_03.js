function getAllAnimalsByLetter(letter) {
  let allResults = [];

  const url = `https://api.api-ninjas.com/v1/animals?name=${letter}`;
  return fetch(url, {
    headers: { "X-Api-Key": "7OKl9fCN7tgKbENZQsVBtAzjcjEPsdzF9fwyIM5u" },
  })
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
      if (data.length > 0) {
        allResults.push(...data);
      }

      console.log(
        `Found ${allResults.length} animals containing the letter ${letter}`,
      );
      console.log(allResults);
    });
}

getAllAnimalsByLetter("a");
