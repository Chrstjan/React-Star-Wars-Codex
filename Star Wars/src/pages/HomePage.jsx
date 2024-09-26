import { Card } from "../components/Card/Card"
import { Modal } from "../components/Modal/Modal"
import { useState } from "react"

export const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  function OpenModal() {setIsModalOpen(true)}
  

  return (
    <>
    <div>{<Card action={OpenModal}></Card>}</div>
    <Modal />
    </>
  )
}