import React from 'react'
import styles from './RSalgada.module.css'
import Header from './components/header/index'
import Footer from './components/footer/index'

function RSalgada() {

  return (
    <div>
    <div className={styles.Root}>
    <Header/>
    <div className={styles.Voltar}><a href="#"><img className={styles.Seta} src="./public/icons/seta-esquerda.png" alt="" /> Voltar</a></div>
    <div className={styles.imagens}>
      <div className={styles.Img1}><img className={styles.Img} src="./public/images/salgadopratico.png" alt="" /><button className={styles.Botao}>Práticas</button></div>
      <div className={styles.Img2}><img className={styles.Img} src="./public/images/salgadoveg.png" alt="" /><button className={styles.Botao}>Vegetarianas</button></div>
    </div>
    <div className={styles.imagens}>
      <div className={styles.Img3}><img className={styles.Img} src="./public/images/salgadoquente.png" alt="" /><button className={styles.Botao}>Quentes</button></div>
      <div className={styles.Img4}><img className={styles.Img} src="./public/images/salgadofrio.png" alt="" /><button className={styles.Botao}>Frias</button></div>
    </div>
    </div>
    <Footer/>
  </div>
 )
}

export default RSalgada