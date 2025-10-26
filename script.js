// Datos de los productos propuestos
const productos = [
  { nombre: "Teclado Mecánico RGB", precio: 49, imagen: "img/teclado.jpg" },
  { nombre: "Mouse Gamer 7200 DPI", precio: 25, imagen: "img/mouse.jpg" },
  { nombre: "Auriculares 7.1", precio: 59, imagen: "img/auriculares.jpg" },
  { nombre: "Silla Gamer Pro", precio: 199, imagen: "img/silla.jpg" },
  { nombre: "Monitor Curvo 144Hz", precio: 299, imagen: "img/monitor.jpg" },
  { nombre: "Alfombrilla RGB", precio: 19, imagen: "img/alfombrilla.jpg" },
  { nombre: "Micrófono USB Pro", precio: 79, imagen: "img/microfono.jpg" },
];

// es el Contenedor del HTML donde van los productos
const contenedor = document.getElementById('productos');

// Recorre cada producto y crea la estructura HTML
productos.forEach(prod => {
  const div = document.createElement('div');
  div.classList.add('producto');
  div.setAttribute('data-aos', 'fade-up'); // animación AOS

  div.innerHTML = `
    <img src="${prod.imagen}" alt="${prod.nombre}">
    <h3>${prod.nombre}</h3>
    <p>Precio: $${prod.precio}</p>
    <button>Agregar al carrito</button>
  `;

  contenedor.appendChild(div);
});
