import React from 'react'
import { useForm } from "react-hook-form";
import Form from 'react-bootstrap/Form'

const Formulario = ({tareas,setTareas}) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const onSubmit = (data, e) => {
    console.log(data)
    setTareas([
      ...tareas,
      data
    ])
    e.target.reset()
  }; 


  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Form.Select {...register("estado", {required:true})}>
          <option value="1">Pendiente</option>
          <option value="2">Finalizada</option>
        </Form.Select>
        <Form.Select {...register("prioridad", {required: true})}>
          <option value="1">Alta</option>
          <option value="2">Media</option>
          <option value="3">Baja</option>
        </Form.Select>
        <textarea {...register("descripcion", {required:true, maxLength:300})}>
        </textarea>
        {errors.descripcion?.type === 'required' && <span>Completar campo</span>}
        {errors.descripcion?.type === 'maxLength' && <span>Limite de caracteres</span>}
        <input type="submit"/>
      </form>
    </>
  )
}

export default Formulario