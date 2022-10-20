import React from 'react'

const ItemTask = ({estado, prioridad, descripcion}) => {
  return (
    <>
      <p>{estado}-{prioridad}-{descripcion}</p>
      <p></p>
      
    </>
  )
}

export default ItemTask