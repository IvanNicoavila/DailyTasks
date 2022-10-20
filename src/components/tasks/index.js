import React, {useState} from 'react'
import Formulario from '../forms/index'
import '../../styles/tasks.css'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import 'bootstrap/dist/css/bootstrap.min.css'
import ItemTask from '../tasks/ItemTask'
import { Text } from '@chakra-ui/react'


const Tarea = () => {
  const [tareas, setTareas] = useState([])
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  return (
    <>
      <div className='tareas'>
        <div className='title-tarea'>
          <h1>Tareas</h1>
          <Button onClick={handleShow} className='button'>
            <Text color='#191414'>+</Text>
          </Button>
          <Modal show={show} onHide={handleClose}>
            <Formulario tareas={tareas} setTareas={setTareas}/>
          </Modal>
        </div>
        <div>
          <ul>
            {
              tareas.map((tarea, index) => 
                <ItemTask key={index} {...tarea}/>
              )
            }
          </ul>
          </div>
      </div>
    </>
  )
}

export default Tarea