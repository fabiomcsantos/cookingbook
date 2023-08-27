import React from 'react'
import styles from './ListaReceitas.module.css'


function listaReceitas() {

  return (
  <div className={styles.Root}>
    <div className={styles.Conteudo}>
      <img className={styles.Img} src="./public/images/ossobuco.jpeg" alt="foto alimento" />
      <div className={styles.Descricao}>
        <p className={styles.TitleP}>Bolo de cenoura com cobertura chocolate</p>
        <div className={styles.Informations}>
          <div className={styles.Time}>
            <img className={styles.IconTime} src="./public/icons/relogio.png" alt="" />
            <p className={styles.TextTime}>45min.</p>
          <img className={styles.IconHeart} src="./public/icons/gostar.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
   
   
 )
}

export default listaReceitas