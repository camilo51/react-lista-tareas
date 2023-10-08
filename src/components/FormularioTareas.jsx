import {v4 as uuaiv4 } from 'uuid';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlusSquare} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export const FormularioTareas = ({tareas, setTareas}) => {
  
    const [inputTarea, setInputTarea] = useState('');

    const handleInput = (e) => {
        setInputTarea(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        setTareas([...tareas, {
            id: uuaiv4(),
            texto: inputTarea,
            completada: false
        }])

        setInputTarea('');
    } 
  
  return (
    <form className="formulario-tareas" onSubmit={handleSubmit}> 
        <input 
            type="text" 
            className="formulario-tareas__input"
            placeholder="Escribe una tarea"
            value={inputTarea}
            onChange={(e) => handleInput(e)}
        />
        <button 
            type="submit"
            className="formulario-tareas__btn"
        >
            <FontAwesomeIcon icon={faPlusSquare} className='formulario-tareas__icono-btn' />
        </button>
    </form>
  )
}
