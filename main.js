function buscarProducto(producto) {
    switch (producto.toLowerCase()) {
        case  'alimento':
            return (4000);
        case  'collar':
            return (2500);
        case  'correa' :
            return (3000);
        default:
            return (0);
            
    }
    // if (producto == 'alimento') {
    //     return (4000)
    // }else if (producto == 'correa' ) {
    //     return (2500)
    // }else if (producto == 'collar') {
    //     return (3000)
    // }else{
    //     return(0);
    // }
}
// Clase Producto
class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
        
    }
}



    preg = true;
    let total = 0;
    let carrito = [];
    while (preg) { 
        let producto = prompt ('Ingrese el Producto que desea comprar."collar", "correa", "alimento"');
        // console.log(producto);
        precioProducto = buscarProducto(producto);
        console.log(precioProducto)
        if (precioProducto ==0) {
            alert ('Debe ingresar algunos de los productos indicados.')
        }
        alert('El precio del producto es '+ precioProducto);
        total = total + precioProducto;
        //creo una instancia del objeto producto
        let productoCreado = new Producto(producto, precioProducto); 
        carrito.push(productoCreado); // agrego el producto al carrito de productos
        cantCarrito = carrito.length;
        let preg = prompt ('Usted tiene '+ cantCarrito +' '+ ' productos en el carrito. '+'Desea Agregar otro producto? Responder "si", "no"');
        preg.toLowerCase();
        if (preg == 'si') {
            preg = true;
        } else {
            preg = false;
            break;
        }
        console.log(preg);
    }
    alert ('El total del carrito es: '+ total + '. Puede ver el carrito completo en la consola.');
    console.log(carrito);