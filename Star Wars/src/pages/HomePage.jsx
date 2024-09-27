import { Card } from "../components/Card/Card"
import { Modal } from "../components/Modal/Modal"
import { useState } from "react"

export const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [clickedMovie, setClickedMovie] = useState();
  const [clickedPoster, setClickedPoster] = useState();

  function OpenModal(item, imagePoster) {
    setIsModalOpen(true);
    setClickedMovie(item);
    setClickedPoster(imagePoster);

    console.log(imagePoster);
    
  }

  return (
    <>
    <main>
        <div>{<Card setClickedMovie={setClickedMovie} action={OpenModal}></Card>}</div>
        {isModalOpen ? <Modal setIsModalOpen={setIsModalOpen} data={clickedMovie} posterImg={clickedPoster}/> : null} 
    </main>
    </>
  )
}