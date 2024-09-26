import { Card } from "../components/Card/Card"
import { Modal } from "../components/Modal/Modal"
import { useState } from "react"

export const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [clickedMovie, setClickedMovie] = useState();

  function OpenModal(item) {
    setIsModalOpen(true);
    setClickedMovie(item);
  }

  return (
    <>
    <main>
        <div>{<Card setClickedMovie={setClickedMovie} action={OpenModal}></Card>}</div>
        {isModalOpen ? <Modal setIsModalOpen={setIsModalOpen} data={clickedMovie}/> : null} 
    </main>
    </>
  )
}