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
    <div class="col-6 col-sm-4 col-md-3 col-lg-2 mb-4">
      <div class="card card-personaje h-100">
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

// Función que renderiza la lista de personajes en el DOM
function renderizar(lista) {
  // Si la lista esta vacia, muestra la alerta y vacía la galeria
  if (lista.length === 0) {
    galeria.innerHTML = "";
    alerta.style.display = "block";
    return;
  }

  alerta.style.display = "none";

  // Recorre la lista con un bucle for y arma el HTML
  let contenido = "";
  for (let i = 0; i < lista.length; i++) {
    contenido = contenido + crearCard(lista[i]);
  }
  galeria.innerHTML = contenido;

  // Asigna el evento click al boton eliminar de cada card
  for (let i = 0; i < lista.length; i++) {
    const id = lista[i].id;
    const boton = document.getElementById("eliminar-" + id);
    boton.addEventListener("click", () => {
      eliminarPersonaje(id);
    });
  }
}

// Función que agrega un personaje al arreglo
function agregarPersonaje() {
  const nombre = inputNombre.value;
  const imagen = inputImagen.value;

  // Calcula el nuevo id usando el ultimo personaje del arreglo
  let nuevoId = 1;
  if (personajes.length > 0) {
    nuevoId = personajes[personajes.length - 1].id + 1;
  }

  // Agrega el nuevo objeto al final del arreglo con push
  personajes.push({ id: nuevoId, nombre: nombre, imagen: imagen });

  // Limpia los campos del formulario
  inputNombre.value = "";
  inputImagen.value = "";

  renderizar(personajes);
}

// Función que elimina un personaje del arreglo segun su id
function eliminarPersonaje(id) {
  // Crea un arreglo nuevo sin el personaje que tiene ese id
  const nuevaLista = [];
  for (let i = 0; i < personajes.length; i++) {
    if (personajes[i].id !== id) {
      nuevaLista.push(personajes[i]);
    }
  }

  // Vacía el arreglo original y vuelve a cargarlo con la nueva lista
  personajes.length = 0;
  for (let i = 0; i < nuevaLista.length; i++) {
    personajes.push(nuevaLista[i]);
  }

  renderizar(personajes);
}

// Filtrar personajes que contengan el texto ingresado en cualquier parte del nombre
function filtrar() {
  // Pasar el texto buscado a minusculas para no distinguir mayusculas
  const texto = inputFiltro.value.toLowerCase();

  // Recorrer el arreglo y comparar cada nombre
  const filtrados = [];
  for (let i = 0; i < personajes.length; i++) {
    const nombre = personajes[i].nombre.toLowerCase();
    // includes devuelve true si el nombre contiene el texto buscado
    if (nombre.includes(texto)) {
      filtrados.push(personajes[i]);
    }
  }

  renderizar(filtrados);
}

// Volver a mostrar todos los personajes
function mostrarTodos() {
  inputFiltro.value = "";
  renderizar(personajes);
}

// Eventos de los botones con addEventListener
btnAgregar.addEventListener("click", agregarPersonaje);
btnFiltrar.addEventListener("click", filtrar);
btnMostrarTodos.addEventListener("click", mostrarTodos);

// Render inicial al cargar la pagina
renderizar(personajes);