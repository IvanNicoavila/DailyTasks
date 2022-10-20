import React, {useState} from 'react'
import Formulario from '../forms/index'
import '../../styles/tasks.css'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import 'bootstrap/dist/css/bootstrap.min.css'


const Tarea = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  

  return (
    <>
      <div className='tareas'>
        <div className='title-tarea'>
          <h1>Tareas</h1>
          <Button onClick={handleShow} variant='primary'>
            +
          </Button>
          <Modal show={show} onHide={handleClose}>
            <Formulario/>
          </Modal>
        </div>
      </div>
    </>
  )
}

export default Tarea