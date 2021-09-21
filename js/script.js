$("#btnSubscripcion").click(obtenerEmail);
$("#btnEnviarForm").click(formularioContacto);
cargarProfesores();
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
function cargarProfesores() {
  let profesores = obtenerProfesores();
  let contador = 0;
  profesores.forEach((profesor) => {
    let className = "profesor" + contador;
    $("#seccion2")
      .append(`<div class="${className}" style="cursor: pointer;" onclick="mostrarProfesor(${profesor.id})">
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
}

function obtenerProfesores() {
  let profesores = [
    {
      id: 1,
      nombre: "Camila",
      imagen: "images/CAMILA - BOXEO.JPG",
      rol: "Boxeo",
      sexo: "F",
      descripcion: "Camila es profesora de Boxeo en Oxigenarte hace 6 meses.",
    },
    {
      id: 2,
      nombre: "Candelaria",
      imagen: "images/CANDELARIA - PILATES.JPG",
      rol: "Pilates",
      sexo: "F",
      descripcion:
        "Candelaria es profesora de Pilates en Oxigenarte hace más de un año.",
    },
    {
      id: 3,
      nombre: "Carolina",
      imagen: "images/CAROLINA - FITNESS.JPG",
      rol: "Fitness",
      sexo: "F",
      descripcion:
        "Carolina es profesora de Fitness en Oxigenarte hace 12 meses.",
    },
    {
      id: 4,
      nombre: "Diego",
      imagen: "images/DIEGO - MUSCULACIÓN.JPG",
      rol: "Musculación",
      sexo: "M",
      descripcion:
        "Diego es profesor de Musculación en Oxigenarte hace más de dos años.",
    },
    {
      id: 5,
      nombre: "Elías",
      imagen: "images/ELÍAS - MUSCULACIÓN.JPG",
      rol: "Musculación",
      sexo: "M",
      descripcion:
        "Elías es profesor de Musculación en Oxigenarte hace 5 años.",
    },
    {
      id: 6,
      nombre: "Lorena",
      imagen: "images/LORENA - FITNESS.JPG",
      rol: "Fitness",
      sexo: "F",
      descripcion:
        "Lorena es profesora de Fitness en Oxigenarte hace más de dos años.",
    },
    {
      id: 7,
      nombre: "Lucía",
      imagen: "images/LUCÍA - PILATES.JPG",
      rol: "Pilates",
      sexo: "F",
      descripcion:
        "Lucía es profesora de Pilates en Oxigenarte hace más de dos años.",
    },
    {
      id: 8,
      nombre: "Mauro",
      imagen: "images/MAURO - MUSCULACIÓN.JPG",
      rol: "Musculación",
      sexo: "M",
      descripcion:
        "Mauro es profesor de Musculación en Oxigenarte hace un año.",
    },
  ];
  return profesores;
}

function mostrarProfesor(id) {
  let profesores = obtenerProfesores();
  let profesor = profesores.filter((profesor) => profesor.id === id);
  profesor = profesor[0];
  alert(`Nombre: ${profesor.nombre}  
Rol en Oxigenarte: Profesor/a de ${profesor.rol}
Descripción: ${profesor.descripcion}`);
}

function formularioContacto() {
  let nombre = $("#txtNombreForm").val();
  let telefono = $("#txtTelefonoForm").val();
  let descripcion = $("#txtDescripcion").val();

  if (nombre === "" || telefono === "" || descripcion === "") {
    alert("Todos los campos son obligatorios.");
  } else {
    alert(
      `${nombre} muchas gracias por contacarte con Gimnasio Oxigenarte, te llamaremos a la brevedad al número de teléfono ${telefono}`
    );
    $("#txtNombreForm").val("");
    $("#txtTelefonoForm").val("");
    $("#txtDescripcion").val("");
  }
}
