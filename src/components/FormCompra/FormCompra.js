import { useFormik } from 'formik'
import {Form, Button} from "react-bootstrap"
import React , { useState, useContext }from 'react'
import "./FormCompra.css" 
import * as Yup from "yup"
import * as moment from 'moment';

// FireBase
import {collection, addDoc} from "firebase/firestore"
import {db} from "../../firebaseconfig"

// cartcontext
import { CartContext } from '../../CartContext'


function FormCompra() {
    const [cartBuy, setCartBuy] = useState()
    const {cartItems, sumarCart} = useContext(CartContext)
    
    const formik = useFormik({
        initialValues:
        {name: "",
        email: "",
    },
        
        onSubmit: async (data) => {
            const sumaTot = sumarCart(cartItems)
            const fecha = moment().toString()
            const docRef = await addDoc(collection(db, "compras"), {
                buyer: {name: data.name,
                email: data.email,},
                items: cartItems,
                date: fecha,
                total: sumaTot,
            })
            
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
