import { useState } from "react"
import style from "./Modal.module.scss";

export function Modal ({setIsModalOpen, data}) {
    return (
        <>
        
        <div
        className={style.modalBGStyle}
        onClick={() => setIsModalOpen(false)}></div>

        <section className={style.modalStyle}>
            {data ? <>
            <h3>{data?.title}</h3>
            <p>{data?.openingCrawl}</p>
            <p>Release Date: {data?.releaseDate}</p>
            <p>Director: {data?.director}</p>
            </> : null}
            <button onClick={() => setIsModalOpen(false)}>Close</button>
        </section>
        </>
    )
}