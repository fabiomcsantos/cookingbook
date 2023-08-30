import React from 'react'
import styles from './RBebidas.module.css'
import Header from './components/header/index'
import Footer from './components/footer/index'

function RBebidas() {

  return (
    <div>
    <div className={styles.Root}>
    <Header/>
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
    <Footer/>
  </div>
 )
}

export default RBebidas