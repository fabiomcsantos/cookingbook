import React from 'react'
import styles from './login.module.css'
import Header from './components/header/index'
import Footer from './components/footer/index'


function Login() {

  return (
    <div>
    <Header/>
    <div className={styles.Root}>
      <div className={styles.Container}>
        <div className={styles.Login}>
        <h1 className={styles.TitleH1}>Login</h1>
                    <form >
                        <div >
                            
                            <input className={styles.Usuario} type="text" id="email" name="email"placeholder="E-mail" />
                        
                            <input className={styles.Senha} type="password" id="senha" name="senha" placeholder="Senha"/>
                        </div>
                        <br />
                        <br />
                        <br />
                        <button className={styles.Button} type="submit"> Cadastrar </button><br />
                        <br />
                        <br />
                        <a className={styles.links} href="">Esqueceu a senha</a>
                        <br />
                        <br />
                        <a className={styles.links} href="">Cadastrar</a>


                    </form>
        </div>
      </div>
    <Footer/>
  </div>
  </div>
 )
}

export default Login