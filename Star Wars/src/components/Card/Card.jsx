import style from "./Card.module.scss";
import { useQuery } from "@tanstack/react-query";
import { request } from "graphql-request";
import { useEffect } from "react";
import { allFilms } from "../../queries/allFilms";

export function Card({ action }) {
  const moviePosters = [
    "./src/assets/images/star-wars-ep4.png",
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
      <section className={style.filmCard}>
        {data?.allFilms?.films?.map((item, index) => {
          return (
            <figure onClick={() => action()} key={item.title}>
              <h4>{item.title}</h4>
              <img src={moviePosters[index]} style={{ width: "50%" }} />
            </figure>
          );
        })}
      </section>
    </>
  );
}
