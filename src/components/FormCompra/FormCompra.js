import { useFormik } from 'formik'
import {Form, Button} from "react-bootstrap"
import React , { useContext }from 'react'
import "./FormCompra.css" 
import * as Yup from "yup"
import * as moment from 'moment';

// FireBase
import {collection, addDoc} from "firebase/firestore"
import {db} from "../../firebaseconfig"

// cartcontext
import { CartContext } from '../../CartContext'


function FormCompra() {
    const {modificarStock, cartItems, sumarCart, borrarTodo} = useContext(CartContext)
    
    const formik = useFormik({
        initialValues:
        {
        name: "",
        phone: "",
        email: "",
    },
        
        onSubmit: async (data) => {
            const sumaTot = sumarCart(cartItems)
            const fecha = moment().toString()
            
            // esto filtra los items del cart solo para mostrar id title y price
            const cartItemsModifiedForDb = (cartItems) => {
                const filteredList = []
                cartItems.forEach ( product =>{
                    let productFiltered = {
                        id: product.id,
                        title: product.title,
                        price: product.price,
                    }
                    filteredList.push(productFiltered)
                })
                return filteredList
            }

            const { id } = await addDoc(collection(db, "compras"), {
                buyer: {
                name: data.name,
                phone: data.phone,
                email: data.email,
            },
                items: cartItemsModifiedForDb(cartItems),
                date: fecha,
                total: sumaTot,
            })
            alert(`su compra ha sido generada ${id}`)
            borrarTodo()
            modificarStock()

            
        },
        validationSchema: Yup.object({
            name: Yup.string()
            .required("Se requiere un nombre")
            .min(2, "Se requiere mas de 2 letras")
            .max(50, "No se puede exceder los 50 caracteres"),
            phone: Yup.number()
            .required("Se requiere un numero de telefono")
            .min(11111111, "Se requiere un numero de telefono valido")

            // por las dudas validamos que solo puedan ingresarse numeros, igualmente el form es de tipo number asi que seria una doble validacion por seguridad
            .typeError("Ingrese solo numeros")

            .max(999999999999999, "Debe contener menos numeros"), 
            email: Yup.string().email("Debe ser un formato de Email valido").required("Es requerido un Email")
        })
    }) 
    
    return (
        <div className= "FormCompra">
            <Form onSubmit={formik.handleSubmit}>
                <Form.Label>Rellena el formulario para continuar con la compra</Form.Label>
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
                        <Form.Control type="number" 
                        placeholder="Telefono" 
                        name="phone" onChange={formik.handleChange} 
                        isInvalid= {formik.errors.phone}
                        value= {formik.values.phone}>
                        </Form.Control>
                        <Form.Control.Feedback type="invalid">{formik.errors.phone}</Form.Control.Feedback>
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
