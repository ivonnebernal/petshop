const productos = [
    {
        id:"correa-01",
        titulo: "Correa azul",
        imagen: "https://acdn.mitiendanube.com/stores/001/853/269/products/c2azk9-2kx2k1-a37067e219ac85ae9e16310238251391-1024-1024.jpg",
        precio: 1000,
        categoria: {
            nombre:"correa",
            id: "correa"
        }

    },
    {
        id:"correa-02",
        titulo: "Correa Verde",
        imagen: "https://d22fxaf9t8d39k.cloudfront.net/a7581c515140e1d1105a90aab48c01bed15c9dc5accfbcc4ac828665d532096d6121.jpeg",
        precio: 5000,
        categoria: {
            nombre:"correa",
            id: "correa"
        }

    },
    {
        id:"correa-03",
        titulo: "Correa Flexible",
        imagen: "https://http2.mlstatic.com/D_NQ_NP_663192-MLA45655216112_042021-O.webp",
        precio: 2000,
        categoria: {
            nombre:"correa",
            id: "correa"
        }

    },
    {
        id:"correa-04",
        titulo: "Correa Flexible Rosa",
        imagen: "https://img.interempresas.net/FotosArtProductos/P212743-2.jpg",
        precio: 3000,
        categoria: {
            nombre:"correa",
            id: "correa"
        }

    },
    {
        id:"ropa-01",
        titulo: "Disfraz panda",
        imagen: "https://d28hi93gr697ol.cloudfront.net/071e89ac-46a5-8ab3/img/Producto/1429/01-1612902130-6321277e9d978.jpeg",
        precio: 7000,
        categoria: {
            nombre:"ropa",
            id: "ropa"
        }

    },
]

const contenedorProductos = document.getElementById('contenedor-productos')
const botonesCategorias = document.querySelectorAll(".boton-categoria")
const tituloPrincipal = document.querySelector("#titulo-principal")
let botonesAgregar = document.querySelectorAll(".producto-agregar")
const numerito = document.querySelector("#numerito")

function cargarProductos(productoElegido) {

    contenedorProductos.innerHTML = ``;

    productoElegido.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("producto")
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="productos-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">$${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
        `
        contenedorProductos.append(div);
        
    });
    actualizarBotonesAgregar()
    
}

cargarProductos(productos);
botonesCategorias.forEach(boton =>{
    boton.addEventListener("click", (e)=>{

        botonesCategorias.forEach(boton => boton.classList.remove("active"))


        e.currentTarget.classList.add("active")

        if (e.currentTarget.id != "todos") {

            const productoCategoria = productos.find(producto=>producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre

            
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id)
            cargarProductos(productosBoton);
        } else {
            tituloPrincipal.innerText="Todos los productos"
            cargarProductos(productos);
        }

        

        

    })


})
function actualizarBotonesAgregar() {
    
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton =>{
        boton.addEventListener("click", agregarAlCarrito);
    })
    
}
let productosEnCarrito;
let nuevoNumerito;
let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");
if (productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumerito();
} else {
    productosEnCarrito = [];
}


function agregarAlCarrito(e) {

    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto=> producto.id === idBoton);

    if (productosEnCarrito.some(producto => producto.id ===idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id ===idBoton);
        productosEnCarrito[index].cantidad++
        
    }else{
        productoAgregado.cantidad =1;
        productosEnCarrito.push(productoAgregado);
    }

    actualizarNumerito()

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito)); //guardo el carrito el localStorage

}

function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto)=>acc+producto.cantidad, 0)
    numerito.innerText = nuevoNumerito;
}

