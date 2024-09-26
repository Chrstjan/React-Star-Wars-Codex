import { useQuery } from "@tanstack/react-query";
import request from "graphql-request";
import { useParams } from "react-router-dom"
import { character } from "../queries/character";
import { useEffect } from "react";

export const CharacterPage = () => {
    const {characterId} = useParams();

    console.log(characterId);

    const {data, isLoading, error} = useQuery({
        queryKey: ["Single Character"],
        queryFn: async () => request('https://swapi-graphql.netlify.app/.netlify/functions/index', character, {personId: characterId})
    });

    useEffect(() => {
        console.log(data);
    }, [data])

    if (isLoading) {
        return (<h2>Fetching data from a galaxy far far away</h2>)
      }
    
    if (error) {
        return (<h2>This is not the data you're looking for</h2>)
    }


  return (
    <section>
        <div>
            <img src="" alt={data?.person?.name}/>
        </div>
        <div>
            <h2>{data?.person?.name}</h2>
            <p>Birth Year: {data?.person?.birthYear}</p>
            <p style={{textTransform: "capitalize"}}>Gender: {data?.person?.gender}</p>
            <p>Homeworld: {data?.person?.homeworld.name}</p>
        </div>
    </section>
  )
}