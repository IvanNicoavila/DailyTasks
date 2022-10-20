import React,{ useState } from 'react'
import { useForm } from "react-hook-form";
import ItemTask from '../tasks/ItemTask'
import Form from 'react-bootstrap/Form'

const Formulario = () => {
  const [tareas, setTareas] = useState([])
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
      <ul>
        {
          tareas.map((tarea, index) => 
            <ItemTask key={index} {...tarea}/>
          )
        }
      </ul>
    </>
  )
}

export default Formulario