import React, {useState} from 'react'
import '../../styles/notes.css'


const Notas = () => {
  const [nuevaNota, setNuevaNota] = useState('')


  return (
    <>
      <div className="notas">
        <h2>Notas</h2>
        <textarea className='textarea' onChange={e => setNuevaNota(e.target.value)}></textarea>
      </div>
    </>
  )
}

export default Notas