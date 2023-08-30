import React from 'react'
import styles from './RDoces.module.css'
import Header from './components/header/index'
import Footer from './components/footer/index'

function RDoces() {

  return (
    <div>
    <div className={styles.Root}>
    <Header/>
    <div className={styles.Voltar}><a href="#"><img className={styles.Seta} src="./public/icons/seta-esquerda.png" alt="" /> Voltar</a></div>
    <div className={styles.imagens}>
      <div className={styles.Img1}><img className={styles.Img} src="./public/images/docepratico.png" alt="" /><button className={styles.Botao}>Práticas</button></div>
      <div className={styles.Img2}><img className={styles.Img} src="./public/images/doceveg.png" alt="" /><button className={styles.Botao}>Vegetárianas</button></div>
    </div>
    <div className={styles.imagens}>
      <div className={styles.Img3}><img className={styles.Img} src="./public/images/docequente.png" alt="" /><button className={styles.Botao}>Quentes</button></div>
      <div className={styles.Img4}><img className={styles.Img} src="./public/images/docefrio.png" alt="" /><button className={styles.Botao}>Frias</button></div>
    </div>
    </div>
    <Footer/>
  </div>
   
   
 )
}

export default RDoces