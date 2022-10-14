import React from 'react'
import '../../styles/resume.css'

const Resumen = () => {
  return (
    <>
      <div className="resumen">
        <h2>Resumen</h2>
        <ul>
            <li className="lista lista-3">Tareas con ALTA prioridad pendientes</li>
            <li className="lista lista-2">Tareas con MEDIA prioridad pendientes</li>
            <li className="lista lista-1">Tareas con BAJA prioridad pendientes</li>
        </ul>
      </div>
    </>
  )
}

export default Resumen