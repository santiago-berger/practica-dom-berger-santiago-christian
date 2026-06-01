// Arreglo de datos iniciales
const personajes = [
  {
    id: 1,
    nombre: "A-Bomb",
    imagen:
      "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/1-a-bomb.jpg",
  },
  {
    id: 2,
    nombre: "Abe Sapien",
    imagen:
      "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/2-abe-sapien.jpg",
  },
  {
    id: 3,
    nombre: "Abin Sur",
    imagen:
      "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/3-abin-sur.jpg",
  },
  {
    id: 4,
    nombre: "Abomination",
    imagen:
      "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/4-abomination.jpg",
  },
  {
    id: 5,
    nombre: "Abraxas",
    imagen:
      "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/5-abraxas.jpg",
  },
];

// Seleccion de elementos del DOM con getElementById
const galeria = document.getElementById("galeria");
const alerta = document.getElementById("alerta");
const inputNombre = document.getElementById("input-nombre");
const inputImagen = document.getElementById("input-imagen");
const inputFiltro = document.getElementById("input-filtro");
const btnAgregar = document.getElementById("btn-agregar");
const btnFiltrar = document.getElementById("btn-filtrar");
const btnMostrarTodos = document.getElementById("btn-mostrar-todos");

// Función que construye el HTML de una card usando desestructuracion y template literals
function crearCard(personaje) {
  const { id, nombre, imagen } = personaje; // desestructuracion de objeto
  return `
    <div class="col-6 col-sm-4 col-md-3 col-lg-2">
      <div class="card card-personaje h-100 shadow-sm">
        <img src="${imagen}" class="card-img-top" alt="${nombre}" />
        <div class="card-body text-center">
          <h3 class="card-title h6">${nombre}</h3>
          <button class="btn btn-danger btn-sm" id="eliminar-${id}">
            Eliminar
          </button>
        </div>
      </div>
    </div>
  `;
}
