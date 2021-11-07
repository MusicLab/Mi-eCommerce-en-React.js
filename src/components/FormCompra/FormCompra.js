import { useFormik } from 'formik'
import {Form, Button} from "react-bootstrap"
import React from 'react'
import "./FormCompra.css" 
import * as Yup from "yup"

function FormCompra() {
    const formik = useFormik({
        initialValues:
        {name: "",
        email: "",},
        onSubmit:(data) => {
            console.log(data)
        },
        validationSchema: Yup.object({
            name: Yup.string().required("Es requerido un nombre").min(2, "Se requiere mas de 2 letras").max(50, "No se puede exceder los 50 caracteres"),
            email: Yup.string().email("Debe ser un formato de Email valido").required("Es requerido un Email")
        })
    })
    return (
        <div className= "FormCompra">
            <Form onSubmit={formik.handleSubmit}>
                <Form.Label>Formulario de Compra</Form.Label>
                    <Form.Group>
                        <Form.Control type="text" 
                        placeholder="Nombre y Apellido" 
                        name="name" onChange={formik.handleChange} 
                        isInvalid= {formik.errors.name}
                        value= {formik.values.name}>
                        </Form.Control>
                        <Form.Control.Feedback type="invalid">{formik.errors.name}</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control type="text" 
                        placeholder="Email" 
                        name="email" 
                        onChange={formik.handleChange} 
                        isInvalid= {formik.errors.email}
                        value= {formik.values.email}>
                        </Form.Control>
                        <Form.Control.Feedback type="invalid">{formik.errors.email}</Form.Control.Feedback>
                    </Form.Group>
                    <Button type="submit">Terminar Compra</Button>
            </Form>
        </div>
    )
}

export default FormCompra
