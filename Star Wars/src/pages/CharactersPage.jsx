import { useQuery } from "@tanstack/react-query"
import { request } from "graphql-request"
import * as contentful from "contentful";
import { useEffect, useState } from "react";
import { allCharacters } from "../queries/allCharacters";
import { Link } from "react-router-dom";


export const CharactersPage = () => {
  const [images, setImages] = useState();

  const client = contentful.createClient(
    {
      space: import.meta.env.VITE_PUBLIC_SPACE_ID,
      accessToken: import.meta.env.VITE_PUBLIC_ACCESS_TOKEN
    }
  )

  const {data, isLoading, error} = useQuery({
    queryKey: ["All Characters"],
    queryFn: async () => request('https://swapi-graphql.netlify.app/.netlify/functions/index', allCharacters)
  })

  //Getting character images from A-M's contentful api :)
  useEffect(()=> {
    client.getEntries({
        content_type:"starwarsImages",
    })
    .then((res) => setImages(res))
    .catch((err) => console.log(err))
  }, [])

  if (isLoading) {
    return (<h2>Fetching data from a galaxy far far away</h2>)
  }

  if (error) {
    return (<h2>This is not the data you're looking for</h2>)
  }

  return (
    <div style={{display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center", textAlign: "center"}}>
      {data?.allPeople?.people
      .slice() // create a copy of the array from the star wars api to modify instead of the original array
      .sort((a, b) => a.name.localeCompare(b.name)) // sorts the names alphabetically to fit with the images from contentful
      //Then it maps the new copy of the array that is modified and creates the character name with images
      .map((item, index) => {
        return (
          //Sends the id of the character in the character page url, So that we can fetch on that characters id on the character page
          <Link key={item.id} to={`/character/${item.id}`}>
            <h4>{item.name}</h4>
            <img src={images?.items[index]?.fields?.image?.fields?.file?.url} alt={item.name} />
          </Link>
        )
      })}
    </div>
  )
}