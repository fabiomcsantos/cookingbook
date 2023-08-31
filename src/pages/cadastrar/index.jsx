import React from 'react'
import styles from './cadastrar.module.css'
import Header from './components/header/index'
import Footer from './components/footer/index'


function Cadastrar() {

  return (
    <div>
    <Header/>
    <div className={styles.Root}>
      <div className={styles.Container}>
        <div className={styles.Cadastro}>
        <h1 className={styles.TitleH1}>Cadastro</h1>
                    <form >
                        <div >
                            
                            <input className={styles.Usuario} type="text" id="name" name="name"placeholder="Nome" />
                       
                            <input className={styles.Usuario}  type="text" id="email" name="email" placeholder="Email" />
                     
                            <input className={styles.Usuario} type="text" id="telefone" name="telefone" placeholder="Telefone"/>
                        
                            <input className={styles.Senha} type="password" id="senha" name="senha" placeholder="Senha"/>
                        </div>
                        <button className={styles.Button} type="submit"> Cadastrar </button><br />

                    </form>
        </div>
      </div>
    <Footer/>
  </div>
  </div>
 )
}

export default Cadastrar