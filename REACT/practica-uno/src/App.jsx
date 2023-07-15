import './App.css'
import './assets/css/style.css'
//importando el componente Encabezado
import Encabezado from './components/Encabezado'
import Lista from './components/Lista'
import Footer from './components/footer'

function App() {
  let mensaje = "Estamos trabajando fuera del return";

  //return manda el mensaje que el usuario visualizar
  return (

    //<> contenedor padre para react
    <>
    <Encabezado usuario="juan" />
    <Encabezado usuario="maria" />
    <h1>Bienvenido a React</h1>
    <p>Mi primera practica</p>
    {/** con {} asignamos codigo javascript */}
    <h2>{mensaje}</h2>
    <Lista />
    <Footer />
    </>
  )
}

export default App
