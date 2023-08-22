import React from 'react'
import styles from './App.module.css'


function App() {

  return (
    <div className={styles.Root}>
    <header className={styles.Header}>
    <a href="#" ><img className={styles.Logo} src="./public/images/logo_cooking_sombra.png" /> </a>
       <div className={styles.Conteudo}>  
         <form className={styles.Form} name='search'>
           <input className={styles.Input} type='search' name='pesquisar' value="" placeholder='pesquisar'/>
         </form>
         <a href="#"><button className={styles.Button}>Receitas Salgadas</button></a>
         <a href="#"><button className={styles.Button}>Receitas Doces</button></a>
         <a href="#"><button className={styles.Button}>Receitas Bebidas</button></a>
         </div>
      <div className={styles.Links}>
        <a href="#" className={styles.Login}><img className={styles.Icons} src="./public/icons/user.png" alt="" />login / cadastrar</a>
      </div>
    </header>
   </div>
 )
}

export default App

