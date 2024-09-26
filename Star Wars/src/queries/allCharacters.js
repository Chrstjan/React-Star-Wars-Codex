export const allCharacters = `query AllPeople {
  allPeople {
    people {
      birthYear
      eyeColor
      gender
      homeworld {
        name
      }
      id
      name
      species {
        homeworld {
          name
          id
        }
        id
        name
        language
      }
    }
  }
}`