import React, {useState} from 'react'
import Modal from 'react-bootstrap/Modal';
/* import styled from "styled-components"; */
import { useForm } from "react-hook-form";


const Formulario = () => {
    const [show, setShow] = useState(false);
    const { register, handleSubmit } = useForm();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const handleInputChange = ({value}) => {
        console.log(value)
    }

    const onSubmit = data => console.log(data) 

   /*  const CustomButton = styled.button`
        border-radius: 100%;
        height: 30px;
        width:30px;
        border: none;
        background-color:white;
        color: green;
    ` */

  return (
    <>
        <button variant="primary" onClick={handleShow}>
            +
        </button>
        <Modal show={show} size='sm' onHide={handleClose}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <select {...register("estado")}>
                    <option value="pendiente">Pendiente</option>
                    <option value="finalizada">Finalizada</option>
                </select>
                <select {...register("prioridad")}>
                    <option value="alta">Alta</option>
                    <option value="media">Media</option>
                    <option value="baja">Baja</option>
                </select>
                <textarea {...register("descripción")}/>
                <button onClick={handleClose}>Cancelar</button>
                <button type='submit'>Crear</button>
            </form>
        </Modal>
    </>
  )
}

export default Formulario