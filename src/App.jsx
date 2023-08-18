import react from 'react'
import './App.css'

function App() {

  return (
    <>
     <header className='header'>
        <img className='logo' src="https://static.vecteezy.com/system/resources/previews/008/863/243/original/cooking-vegetables-flat-design-healthy-food-logo-free-vector.jpg" alt="logo cooking book" />
        <div className='conteudo'>  
          <form name='search'>
            <input type="text" name='pesquisar' value= "pesquisar"/>
          </form>
          <a href=""><button>Receitas Salgadas</button></a>
          <a href=""><button>Receitas Doces</button></a>
          <a href=""><button>Receitas Bebidas</button></a>
          </div>
        <a href=""><img src="" alt="icone login e cadastro" />login / cadastra</a>
     </header>
    </>
  )
}


export default App
