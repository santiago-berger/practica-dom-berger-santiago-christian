// Arreglo de datos iniciales
const personajes = [
  { id: 1, nombre: "A-Bomb", imagen: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/1-a-bomb.jpg" },
  { id: 2, nombre: "Abe Sapien", imagen: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/2-abe-sapien.jpg" },
  { id: 3, nombre: "Abin Sur", imagen: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/3-abin-sur.jpg" },
  { id: 4, nombre: "Abomination", imagen: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/4-abomination.jpg" },
  { id: 5, nombre: "Abraxas", imagen: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/5-abraxas.jpg" },
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