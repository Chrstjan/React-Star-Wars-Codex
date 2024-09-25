import style from "./Card.module.scss";

export function Card({ imageSrc, title }) {
  return (
    <>
      <section key={item.title} className={style.filmCard}>
        <figure className={style.cardStyle}>
          <img src={imageSrc} alt={item.title} />
          <h2>{item.title}</h2>
        </figure>
      </section>
    </>
  );
}
