export const character = `query Person($personId: ID) {
  person(id: $personId) {
    birthYear
    gender
    id
    name
    species {
      homeworld {
        id
        name
      }
      name
      language
      id
    }
    homeworld {
      id
      name
      population
    }
  }
}`