import { useEffect, useState } from 'react'
import './App.css'
import { Header, FormularioTareas, ListaTareas } from './components'

const App = () =>  {
  // Obtenemos las tareas guardadas del localStorage
  const tareasGuardadas = 
    localStorage.getItem('tareas') ? 
    JSON.parse(localStorage.getItem('tareas')) : [];
    console.log(tareasGuardadas);

  // Establecemos el estado de las tareas 
  const [tareas, setTareas] = useState(tareasGuardadas);  

  // Guardando el estado dentro del localStorage
  useEffect(() => {
    localStorage.setItem('tareas', JSON.stringify(tareas));
  }, [tareas])

  // Accedemos al localStorage y comprobar si mostrarCompletadas es null
  let configMostrarCompletadas = '';
  if(localStorage.getItem('mostrarCompletadas') === null){
    configMostrarCompletadas = true;
  }else{
    configMostrarCompletadas = localStorage.getItem('mostrarCompletadas') === 'true'
  }

  // mostrarCompletadas
  const [mostrarCompletadas, setMostrarCompletadas] = useState(configMostrarCompletadas);
  useEffect(() => {
    localStorage.setItem('mostrarCompletadas', mostrarCompletadas.toString());
  }, [mostrarCompletadas])


  return (
    <div className='contenedor'>
      <Header mostrarCompletadas={mostrarCompletadas} setMostrarCompletadas={setMostrarCompletadas} />
      <FormularioTareas tareas={tareas} setTareas={setTareas} />
      <ListaTareas tareas={tareas} setTareas={setTareas} mostrarCompletadas={mostrarCompletadas} />
    </div>
  )
}

export default App
