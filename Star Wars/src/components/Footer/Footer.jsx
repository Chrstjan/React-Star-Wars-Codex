import fs from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={fs.Footer}>
      <p>Data provided by <a href="https://studio.apollographql.com/public/star-wars-swapi/variant/current/home" target="_blank">star-wars-swapi@current</a></p>
      <p>Movie posters found around the web.</p>
      <p>This website was made by Christian, Evelina and Peter.</p>
    </footer>
  )
}