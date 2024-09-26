import { useQuery } from "@tanstack/react-query"
import { request } from "graphql-request"
import { allFilms } from "../queries/allFilms"
import { useEffect } from "react";
import { allCharacters } from "../queries/allCharacters";
import { Link } from "react-router-dom";


export const CharactersPage = () => {
  const {data, isLoading, error} = useQuery({
    queryKey: ["All Characters"],
    queryFn: async () => request('https://swapi-graphql.netlify.app/.netlify/functions/index', allCharacters)
  })

  useEffect(() => {
    console.log("Data:", data?.allPeople?.people);
  }, [data])

  if (isLoading) {
    return (<h2>Fetching data from a galaxy far far away</h2>)
  }

  if (error) {
    return (<h2>This is not the data you're looking for</h2>)
  }

  return (
    <div>
      {data?.allPeople?.people.map((item) => {
        return (
          <Link key={item.id} to={`/character/${item.id}`}>
            <h4>{item.name}</h4>
          </Link>
        )
      })}
    </div>
  )
}