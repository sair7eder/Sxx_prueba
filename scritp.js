var productos = [
    {
        id: 1,
        nombre: "Teclado Gamer Mecanico K916 RGB",
        precio: 29.19,
        imagen: "https://acosa.com.sv/wp-content/uploads/2025/06/KG916SP-5.webp"
    },
    {
        id: 2,
        nombre: "Mouse Gamer Pro",
        precio: 59.99,
        imagen: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=400"
    },
    {
        id: 3,
        nombre: "Audífonos Gamer Naceb NA-HS-1003",
        precio: 47.00,
        imagen: "https://acosa.com.sv/wp-content/uploads/2024/10/NA-HS-1003.webp"
    },
    {
        id: 4,
        nombre: "Silla Gaming Essential Negro 220Lb Nenotech",
        precio: 125.00,
        imagen: "https://acosa.com.sv/wp-content/uploads/2024/12/A73593.webp"
    },
    {
        id: 5,
        nombre: "Auriculares tws bluetooth otl supermario azul sm0858",
        precio: 39.95,
        imagen: " https://apizd.zonadigitalsv.com/storage/productos/8WvOG0ESSqOE3axBlo7zuJ7I0tyE2D8vYtMoiE9h.png"
    },
    {
        id: 6,
        nombre: "Mouse RGB Económico",
        precio: 20.00,
        imagen: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=400"
    }
];

var carrito = [];

function mostrar() {
    var contenedor = document.getElementById('lista-productos');
    contenedor.innerHTML = '';
    
    for(var i = 0; i < productos.length; i++) {
        contenedor.innerHTML += `
            <div class="tarjeta">
                <img src="${productos[i].imagen}" alt="${productos[i].nombre}">
                <h3>${productos[i].nombre}</h3>
                <p class="precio">$${productos[i].precio}</p>
                <button onclick="agregar(${productos[i].id})">Añadir al Carrito</button>
            </div>
        `;
    }
}

function buscar() {
    var texto = document.getElementById('buscador').value.toLowerCase();
    var contenedor = document.getElementById('lista-productos');
    contenedor.innerHTML = '';
    
    var encontrado = 0;
    
    for(var i = 0; i < productos.length; i++) {
        if(productos[i].nombre.toLowerCase().includes(texto)) {
            contenedor.innerHTML += `
                <div class="tarjeta">
                    <img src="${productos[i].imagen}" alt="${productos[i].nombre}">
                    <h3>${productos[i].nombre}</h3>
                    <p class="precio">$${productos[i].precio}</p>
                    <button onclick="agregar(${productos[i].id})">Añadir al Carrito</button>
                </div>
            `;
            encontrado++;
        }
    }
    
    if(encontrado == 0 && texto != '') {
        contenedor.innerHTML = '<div class="mensaje">No se encontró el produto </div>';
    }
    
    if(texto == '') {
        mostrar();
    }
}

function agregar(id) {
    for(var i = 0; i < productos.length; i++) {
        if(productos[i].id == id) {
            carrito.push(productos[i]);
            break;
        }
    }
    
    document.getElementById('contador').textContent = carrito.length;
    alert('Producto agregado!');
}

function verCarrito() {
    if(carrito.length == 0) {
        alert('El carrito está vacío');
        return;
    }
    
    var msg = 'TU CARRITO:\n\n';
    var total = 0;
    
    for(var i = 0; i < carrito.length; i++) {
        msg += (i + 1) + '. ' + carrito[i].nombre + ' - $' + carrito[i].precio + '\n';
        total += carrito[i].precio;
    }
    
    msg += '\nTOTAL: $' + total.toFixed(2);
    alert(msg);
}

mostrar();