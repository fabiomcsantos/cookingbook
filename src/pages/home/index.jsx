import React from 'react'
import styles from './App.module.css'
import Header from './components/header/index'
import Footer from './components/footer/index'


function Home() {

  return (
    <div>
    <div className={styles.Root}>
    <Header/>
    <div className={styles.Banner}><img className={styles.Rotativo} src="./public/images/banner1.png" alt="" /></div>
    <div className={styles.Bot}> <button></button> <button></button> <button></button> </div>
    <div className={styles.imagens}>
      <div className={styles.Img1}><img className={styles.Img} src="./public/images/salgado.png" alt="" /><button className={styles.Botao}>Práticas</button></div>
      <div className={styles.Img2}><img className={styles.Img} src="./public/images/doces.png" alt="" /><button className={styles.Botao}>Quentes</button></div>
      <div className={styles.Img3}><img className={styles.Img} src="./public/images/bebidas.png" alt="" /><button className={styles.Botao}>Frias</button></div>
    </div>
  </div>
    <Footer/>
  </div>
 )
}

export default Home