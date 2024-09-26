import { useQuery } from "@tanstack/react-query"
import { request } from "graphql-request"
import { allFilms } from "../queries/allFilms"
import { useEffect } from "react";

export const HomePage = () => {

  //Movie posters array
  const moviePosters = ["./src/assets/images/star-wars-ep-4.png", "./src/assets/images/star-wars-ep-5.png", "./src/assets/images/star-wars-ep-6.png", "./src/assets/images/star-wars-ep-1.png", "./src/assets/images/star-wars-ep-2.png", "./src/assets/images/star-wars-ep-3.png"];

  const {data, isLoading, error } = useQuery(
    {
      queryKey: ["All Films"],
      queryFn: async () => request('https://swapi-graphql.netlify.app/.netlify/functions/index', allFilms)
    }
  );

  useEffect(() => {
    console.log("Film Data:", data);
  }, [data])

  if (isLoading) {
    return (<h2>Getting data from a galaxy far far away</h2>)
  }

  if (error) {
    return (<h2>This is not the data you're looking for</h2>)
  }


  //Temp testing code!!
  return (
    <div>
    {data?.allFilms?.films?.map((item, index) => {
      return (
        <figure key={item.title}>
          <img src={moviePosters[index]} style={{width: "50%"}} alt={`${item.title} Poster`} />
          <h4>{item.title}</h4>
          <p>{item.openingCrawl}</p>
        </figure>
      );
    })}
  </div>
  )
}