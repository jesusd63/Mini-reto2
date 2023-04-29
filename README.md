# Mini-Reto2

Este repositorio de Github contiene la la explicación de uso y funcionalidad de nuestra API para nuestro mini-reto. 
Se realizó una API de la tienda de ropa llamada **Wardrobe Wonderland.** :shirt: :jeans: :athletic_shoe:

### Métodos HTTPS
La API cuenta con 5 de estos métodos: 
- `Post` crea un nuevo producto, no recibe parámetros y para el request body son necesarios los datos del ***nombre del producto***, ***precio*** y la ***cantidad*** de ese producto que se encuentra disponible en tienda. Como Respuestas tiene la *201, 400 y 409.*

- `Get` obtiene la lista de todos los productos que existen en la tienda, de igual manera no recibe parámetros. Y como respuestas tiene la *200*.

- `Get` obtiene productos por ***categoría*** (pantalones, blusas, zapatos), como parámetros tiene que recibir en que categoría se encuentra el producto. Como respuestas tiene la *200, y 400.*

- `Put` actualizará la información de un producto por id (si se encuentra disponible, inventario y precio), como parámetro deberá recibir el id del producto. Para el request body son necesarios el ***id, nombre del producto, precio, y la cantidad disponible.*** Como respuestas tiene la *200, 400 y 404.* 

- `Delete` eliminará un productp por id, por lo que como parámetro recibe el id. De respuestas tiene la *200 y 404.* 

### Respuestas
Cada uno de nuestros métodos hhtps cuenta con diferentes tipos de respuestas que se darán a las peticiones del usuario, son las siguientes:

- Respuesta 200
  - OK, esta respuesta indica que la solicitud del usuario ha tenido éxito.
- Respuesta 201
  - Created, la respuesta indica que la solicitud ha sido exitosa y se ha creado un recurso.
- Respuesta 400
  - Bad Request, el servidor no puede o no procesará la petición ya que se percibe como un error del cliente.
- Respuesta 404
  - Not Found, indica que la petición del cliente no puede ser encontrada por el servidor.
- Respuesta 409
  - Conflict, indica que existe un conflicto entre la solicitud con el estado actual del recurso destino.

### Uso de la API
- La API la usará la tienda de ropa para la creación de nuevos productos, muestra del inventario, actualización y el borrado de productos.
- Esta API solo será utilizada por el personal de la tienda de ropa. Esto debido a las opciones de edición y borrado de productos.

Nuestra API responde a preguntas como:

- ¿Qué productos hay en la tienda?
Al entrar a la página se prodrán ver el tipo de productos que hay en la tienda.

- ¿Está disponible el producto?
Se utilizan 0´s y 1´s para que el personal sepa si el producto se encuentra disponible. Esta característica también se puede modificar desde el botón de Update.

- ¿Cuántos hay disponibles?
Los datos de disponibilidad se pueden consultar en la base de datos, de igual manera esta característica se puede editar desde el botón de Update.

- ¿Cuál es el precio de un producto?
Debajo de cada imagen y descripción del producto aparecerá su precio, el cual se puede editar.


### Consulta nuestro [Diagrama de Componentes](https://lucid.app/lucidchart/5ee58a98-6c54-47e4-9b57-9c509a1cd041/edit?viewport_loc=-1857%2C-1003%2C2434%2C1143%2C0_0&invitationId=inv_5baf495c-f10a-45c2-976e-8f9716e6e287)
