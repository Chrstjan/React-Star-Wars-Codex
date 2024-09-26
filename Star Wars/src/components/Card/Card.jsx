import style from "./Card.module.scss";
import { useQuery } from "@tanstack/react-query";
import { request } from "graphql-request";
import { allFilms } from "../queries/allFilms";
import { useEffect } from "react";

export function Card({ imageSrc, data, action }) {
  const moviePosters = [
    "./src/assets/images/star-wars-ep-4.png",
    "./src/assets/images/star-wars-ep-5.png",
    "./src/assets/images/star-wars-ep-6.png",
    "./src/assets/images/star-wars-ep-1.png",
    "./src/assets/images/star-wars-ep-2.png",
    "./src/assets/images/star-wars-ep-3.png",
  ];

  const { data, isLoading, error } = useQuery({
    queryKey: ["All Films"],
    queryFn: async () =>
      request(
        "https://swapi-graphql.netlify.app/.netlify/functions/index",
        allFilms
      ),
  });

  return (
    <>
      <section key={item.title} className={style.filmCard}>
        {data?.allFilms?.map((item, index) => {
          return (
            <figure onClick={() => action()} key={item.title}>
              <img src={moviePosters[index]} style={{ width: "50%" }} />
              <h4>{item.title}</h4>
              <p>{item.openingCrawl}</p>
            </figure>
          );
        })}
      </section>
    </>
  );
}
