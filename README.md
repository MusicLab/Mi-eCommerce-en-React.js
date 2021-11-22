## Descripcion: 
Este es un eCommerce hecho en react , se comunica con una base de datos firestore en la nube. actualmente es un eCommerce de videojuegos, pero se puede adaptar a cualquier rubro modificando los documentos en la base de datos, y las etiquetas de navegacion en la app.


## instalacion:
para instalar el proyecto hay que clonarlo desde https://github.com/MusicLab/Mi-eCommerce-en-React.js
tener instalado node
correr *npm install* para instalar la carpeta node_modules
luego simplemente ejecutar con el comando *npm start*

## Uso:
Tenemos Home donde estan listados todos los productos de la base de datos, luego podemos filtrar por  categoria en la NavBar.
Para seleccionar un item y ver sus detalles y poder agregar al carrito, debemos clickear sobre el producto y nos direccionara a los detalles, donde tenemos un componente ItemCount que nos permite elejir la cantidad del producto que queremos y luego finalizar agregando al carrito dicha cantidad. si el producto ya esta añadido al carrito nos saltara una alerta de que ya tenemos el producto agregado y deberiamos eliminarlo del carrito para poder seleccionar una cantidad distinta.
Luego cuando terminamos de seleccionar los productos que queremos podemos finalizar la compra completando el formulario hecho con validaciones Yup, donde nos pedira nombre telefono y mail, para registrar la compra y hacerla efectiva, se restan la cantidad de productos que compramos del stock de la base de datos, si algun producto queda sin stock automaticamente no renderiza mas en la app para que no pueda ser seleccionado.

## Variables de entorno:
Con fines didacticos, cree un archivo .env con las variables de entorno pero lo subo igual a github, para que cualquiera que quiera probar el proyecto pueda hacerlo.



## Agradecimientos:
Agradecimientos a mi Hmna Ariela Baruffaldi, que me ayudo en este aprendizaje.