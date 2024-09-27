import { useState } from "react"
import style from "./Modal.module.scss";

export function Modal ({setIsModalOpen, data, posterImg}) {
    console.log(posterImg);
    

    return (
        <>
        
        <div
        className={style.modalBGStyle}
        //modal closes on click otside modal box:
        onClick={() => setIsModalOpen(false)}></div>
       
        <section className={style.modalStyle}>
            <img src={posterImg} alt="" />

            <div>
            {data ? <>            
            <h3>{data?.title}</h3>
            <p>{data?.openingCrawl}</p>
            <p>Release Date: {data?.releaseDate}</p>
            <p>Director: {data?.director}</p>
            </> : null}

            <button onClick={() => setIsModalOpen(false)}>Close</button>
            </div>  
        </section>
        </>
    )
}