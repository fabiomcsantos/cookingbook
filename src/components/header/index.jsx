import react from 'react'
import './style.css'

function header() {

  return (
    <>
     <header className='header'>
        <img className='logo' src="./public/images/logo_cooking_sombra.png" />
        <div className='conteudo'>  
          <form name='search'>
            <input type='search' name='pesquisar' value="" placeholder='pesquisar'/>
          </form>
          <a href=""><button>Receitas Salgadas</button></a>
          <a href=""><button>Receitas Doces</button></a>
          <a href=""><button>Receitas Bebidas</button></a>
          </div>
        <a href="/" className='login'><img src="/" alt="" />login / cadastra</a>
     </header>
    </>
  )
}


export default header