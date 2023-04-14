# Mini-reto2

Para nuestro mini-reto creamos una API de la tienda de ropa llamada Wardrobe Wonderland.

## Métodos HTTPS
La API cuenta con 5 de estos métods: 
- `Post` crea un nuevo producto, no recibe parámetros y se requiere que se reciban los datos del **id del producto**, **nombre del producto**, **precio** y la **cantidad** de ese producto que se encuentra disponible en tienda.

- `Get` obtiene la lista de todos los productos que existen en la tienda, de igual manera no recibe parámetros.
- `Get` 
- `Put`
- `Delete` 

## Respuestas
Cada uno de nuestros métodos hhtps cuenta con diferentes tipos de respuestas que se darán a las peticiones del usuario, son las siguientes:

- Respuesta 200
  - OK, esta respuesta indica que la solicitud del usuario ha tenido éxito.
- Respuesta 201
  - Created, la respuesta indica que la solicitud ha sido exitosa y se ha creado un recurso.
- Respuesta 400
  - Bad Request, el servidor no puede o no procesará la petición ya que se percibe como un error del cliente.
- Respuesta 404
  - Not Found, indica que la petición del cliente no puede ser encontrada por el servidor.


## Uso de la API
- La API la usará la tienda de ropa para la creación de nuevos productos, muestra del inventario, actualización y el borrado de productos.
- Esta API solo será utilizada por el personal de la tienda de ropa.
