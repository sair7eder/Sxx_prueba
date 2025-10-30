
const productos = [
  // PRODUCTOS ACTUALES PROPUESTOs
  { 
    nombre: "Control inalámbrico 2.4GHz Bluetooth Gamepad Redragon Juno G818 PS3 PS4 PC Android Luz LED Recargable", 
    precio: 45, 
    imagen: "https://redragon.es/content/uploads/2024/03/juno-660x520-1.png" 
  },
  { 
    nombre: "Teclado mecánico Redragon Kumara K552RGB-1SP negro switch blue", 
    precio: 55, 
    imagen: "img/eclado mecanico redragon kumara k552rgb-1sp black sw blue.png" 
  },
  { 
    nombre: "Kit 2 micrófonos inalámbricos de solapa para smartphone Maono Wave T1 Mini WM622 PC2 USB-C", 
    precio: 35, 
    imagen: "img/Kit 2 microfono inalambrico de solapa para smartphone maono wave t1 mini wm622 pc2 usb-c.jpg" 
  },
  { 
    nombre: "Mouse USB Redragon K1ng M724 12.4K DPI 42g negro", 
    precio: 25, 
    imagen: "img/Mouse usb redragon k1ng m724 12.4k dpi 42g negro(19.95).png" 
  },
  
  // ESPACIOS PARA 5 PRODUCTOS NUEVOS (ejemplos)
  { 
    nombre: "Auriculares Gaming RGB 7.1", 
    precio: 39, 
    imagen: "img/auriculares-rgb.jpg" 
  },
  { 
    nombre: "Webcam HD 1080p con micrófono", 
    precio: 29, 
    imagen: "img/webcam-hd.jpg" 
  },
  { 
    nombre: "Alfombrilla gamer XL RGB", 
    precio: 19, 
    imagen: "img/alfombrilla-xl.jpg" 
  },
  { 
    nombre: "Silla gamer ergonómica", 
    precio: 149, 
    imagen: "img/silla-gamer.jpg" 
  },
  { 
    nombre: "Monitor gamer 24'' 144Hz", 
    precio: 199, 
    imagen: "img/monitor-144hz.jpg" 
  }
];

// Contenedor de HTML donde se alojan productos
const contenedor = document.getElementById('productos');

// elimina los productos cris 
contenedor.innerHTML = '';


productos.forEach(prod => {
  const div = document.createElement('div');
  div.classList.add('producto');
  div.setAttribute('data-aos', 'fade-up');

  div.innerHTML = `
    <img src="${prod.imen}" alt="${prod.nombre}">
    <h3>${prod.nombre}</h3>
    <p>Precio: $${prod.precio}</p>
    <button>Agregar al carrito</button>
  `;

  contenedor.appendChild(div);
});

