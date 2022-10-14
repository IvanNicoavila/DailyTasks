import React from 'react'
/* import styled from "styled-components"; */
import '../../styles/tasks.css'
import Formulario from '../forms/index'

const Tareas = () => {

  /* const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
  `; */
   
  return (
    <>
      <div className='tareas'>
        <div className='title-tarea'>
          <h1>Tareas</h1>
          <Formulario/>
        </div>
      </div>
    </>
  )
}

export default Tareas