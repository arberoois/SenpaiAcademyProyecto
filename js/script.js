$("#btnSubscripcion").click(obtenerEmail);

function obtenerEmail() {
  const email = $("#emailSubscripcion").val();
  if (email !== "") {
    if (verificarEmail(email)) {
      alert("El email " + email + " ha sido subscripto a nuestras novedades.");
    } else {
      alert("El email " + email + " no es válido, intenta nuevamente.");
    }
  } else {
    alert("Debes ingresar un email para subscribirte a nuestras novedades.");
  }
}

function verificarEmail(email) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return true;
  } else {
    return false;
  }
}

/*  Profesores */

let profesores = [
  {
    nombre: "Camila",
    imagen: "images/CAMILA - BOXEO.JPG",
    rol: "Boxeo",
    sexo: "F",
  },
  {
    nombre: "Candelaria",
    imagen: "images/CANDELARIA - PILATES.JPG",
    rol: "Pilates",
    sexo: "F",
  },
  {
    nombre: "Carolina",
    imagen: "images/CAROLINA - FITNESS.JPG",
    rol: "Fitness",
    sexo: "F",
  },
  {
    nombre: "Diego",
    imagen: "images/DIEGO - MUSCULACIÓN.JPG",
    rol: "Musculación",
    sexo: "M",
  },
  {
    nombre: "Elías",
    imagen: "images/ELÍAS - MUSCULACIÓN.JPG",
    rol: "Musculación",
    sexo: "M",
  },
  {
    nombre: "Lorena",
    imagen: "images/LORENA - FITNESS.JPG",
    rol: "Fitness",
    sexo: "F",
  },
  {
    nombre: "Lucía",
    imagen: "images/LUCÍA - PILATES.JPG",
    rol: "Pilates",
    sexo: "F",
  },
  {
    nombre: "Mauro",
    imagen: "images/MAURO - MUSCULACIÓN.JPG",
    rol: "Musculación",
    sexo: "M",
  },
];
let contador = 0;
profesores.forEach((profesor) => {
  let className = "profesor" + contador;
  $("#seccion2").append(`<div class="${className}">
  <h3>${profesor.nombre}</h3>
  <img src="${profesor.imagen}" alt="" />
  </div>`);
  if (profesor.sexo == "F") {
    $("." + className).append(`
    <p>Profesora de ${profesor.rol}</p>`);
  } else {
    $("." + className).append(`
    <p>Profesor de ${profesor.rol}</p>`);
  }
  contador++;
});
