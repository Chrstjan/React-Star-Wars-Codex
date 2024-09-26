import { useState } from "react"

export function Modal ({setIsModalOpen, isModalOpen, data}) {
    

    if (isModalOpen == true) {

        return (
            <>
            <div
            className={style.modalBGStyle}
            onClick={() => setIsModalOpen(false)}></div>

            <section className={style.modalStyle}>
                <button onClick={() => setIsModalOpen(false)}>Close</button>
            </section>
            </>
        )
    }
}