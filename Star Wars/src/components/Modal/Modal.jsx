import { useState } from "react"
import style from "./Modal.module.scss";

export function Modal ({setIsModalOpen, data}) {
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