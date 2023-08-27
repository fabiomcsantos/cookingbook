import React from 'react'
import styles from './RBebidas.module.css'


function RBebidas() {

  return (
    <div className={styles.Root}>
    <div className={styles.Voltar}><a href="#"><img className={styles.Seta} src="./public/icons/seta-esquerda.png" alt="" /> Voltar</a></div>
    <div className={styles.imagens}>
      <div className={styles.Img1}><img className={styles.Img} src="./public/images/drinks.png" alt="" /><button className={styles.Botao}>Drinks</button></div>
      <div className={styles.Img2}><img className={styles.Img} src="./public/images/bebidasalcool.png" alt="" /><button className={styles.Botao}>Sem álcool</button></div>
    </div>
    <div className={styles.imagens}>
      <div className={styles.Img3}><img className={styles.Img} src="./public/images/drinkquente.png" alt="" /><button className={styles.Botao}>Quentes</button></div>
      <div className={styles.Img4}><img className={styles.Img} src="./public/images/bebidagelada.png" alt="" /><button className={styles.Botao}>Geladas</button></div>
    </div>
  </div>
   
   
 )
}

export default RBebidas