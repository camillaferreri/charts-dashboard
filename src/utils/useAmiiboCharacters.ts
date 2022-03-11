import { useState, useEffect } from "react"

const useAmiiboCharacters = (slug: string | undefined, isResetting: boolean) => {
  const [ amiiboCharacters, setAmiiboCharacters ] = useState([]);

  useEffect(() => {
    if (!isResetting) return;
    
    fetch(`https://www.amiiboapi.com/api/amiibo/?gameseries=${slug}&type=Figure`)
      .then(response => response.json())
      .then(results => {
        let amiiboosResults = results.amiibo

        // shuffle to have different amiibos each time
        let randomAmiiboos = amiiboosResults.sort(() => 0.5 - Math.random())

        // limit to 6 results
        randomAmiiboos.length = 6

        // create duplicates 
        let duplicatedAmiiboos = randomAmiiboos.flatMap(i => [i, i])

        // shuffle again to avoid having the same amiibos next to each other
        let shuffledAmiiboos = duplicatedAmiiboos.sort(() => 0.5 - Math.random())

        // create card game obj
        let amiiboCards = shuffledAmiiboos
        .reduce((a, item, index) => {
          return [...a, {
            id: index,
            image: item.image,
            name: item.name,
            slug: item.name.toLowerCase().replace(/ /gm, ""),
            isShown: false,
            discovered: false
          }]
        }, [])

        setAmiiboCharacters(amiiboCards)
      })

    return () => {};
  }, [ slug, isResetting ]);

  return amiiboCharacters;
}

export default useAmiiboCharacters