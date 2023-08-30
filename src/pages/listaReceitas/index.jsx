import React from 'react'
import styles from './App.module.css'
import ListaReceita from './components/listaReceitas/index'
import Header from './components/header/index'
import Footer from './components/footer/index'

function ListReceitas() {

  return (
    <div className={styles.Root}>
    <Header/>
    <div className={styles.Voltar}><a href="#"><img className={styles.Seta} src="./public/icons/seta-esquerda.png" alt="" /> Voltar</a></div>
      <div className={styles.Conteudo}>
        <div className={styles.Line}>
          <button className={styles.BOtao}><ListaReceita/></button>
          <button className={styles.BOtao}><ListaReceita/></button>
        </div>
        <div className={styles.Line}>
          <button className={styles.BOtao}><ListaReceita/></button>
          <button className={styles.BOtao}><ListaReceita/></button>
        </div>
        <div className={styles.Line}>
          <button className={styles.BOtao}><ListaReceita/></button>
          <button className={styles.BOtao}><ListaReceita/></button>
        </div>
        <div className={styles.Line}>
          <button className={styles.BOtao}><ListaReceita/></button>
          <button className={styles.BOtao}><ListaReceita/></button>
        </div>
      </div>
    <Footer/>
  </div>
   
 )
}

export default ListReceitas