import React from 'react'
import styles from './RSalgada.module.css'


function RSalgada() {

  return (
  <div className={styles.Root}>
    <div className={styles.Voltar}><a href="#"><img className={styles.Seta} src="./public/icons/seta-esquerda.png" alt="" /> Voltar</a></div>
    <div className={styles.imagens}>
      <div className={styles.Img1}><img className={styles.Img} src="./public/images/salgadopratico.png" alt="" /><button className={styles.Botao}>Práticas</button></div>
      <div className={styles.Img2}><img className={styles.Img} src="./public/images/salgadoveg.png" alt="" /><button className={styles.Botao}>Vegetárianas</button></div>
    </div>
    <div className={styles.imagens}>
      <div className={styles.Img3}><img className={styles.Img} src="./public/images/salgadoquente.png" alt="" /><button className={styles.Botao}>Quentes</button></div>
      <div className={styles.Img4}><img className={styles.Img} src="./public/images/salgadofrio.png" alt="" /><button className={styles.Botao}>Frias</button></div>
    </div>
  </div>
   
   
 )
}

export default RSalgada