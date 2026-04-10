function getAllAnimalsByLetter(letter) {
  let allResults = [];
  let offset = 0;
  const limit = 50;

  function fetchNextPage() {
    const url = `https://api.api-ninjas.com/v1/animals?name=${letter}&offset=${offset}`;

    return fetch(url, {
      headers: { "X-Api-Key": "7OKl9fCN7tgKbENZQsVBtAzjcjEPsdzF9fwyIM5u" },
    })
      .then((response) => response.json())
      .then((data) => {
        if (!data || data.length === 0 || allResults.length >= limit) {
          return allResults;
        }

        allResults.push(...data);
        offset += 30;

        return fetchNextPage();
      });
  }

  return fetchNextPage();
}

getAllAnimalsByLetter("a")
  .then((animals) => {
    const finalResult = animals.slice(0, 50);
    console.log(`Finished! Found ${finalResult.length} animals.`);
    console.log(finalResult.map((animal) => animal.name));
  })
  .catch((error) => {
    console.error("Something went wrong!", error);
  });