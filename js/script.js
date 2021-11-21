$("#btnSubscripcion").click(subscripcion);
$("#btnEnviarForm").click(formularioContacto);
$("#btnCrear").click(crearProfesor);
obtenerProfesores();
function subscripcion() {
  const email = $("#emailSubscripcion").val();
  if (email !== "") {
    if (verificarEmail(email)) {
      fetch("http://localhost:3000/subscripciones", {
        method: "POST",
        body: JSON.stringify(email),
      })
        .then((res) => res.json())
        .then((final) => {
          if (final.code === 200) {
            alert("Gracias por subscribirte, ID de subscripcion: " + final.id);
          } else {
            alert(final.message);
          }
        });
    } else {
      alert("El email " + email + " no es válido, intenta nuevamente.");
    }
  } else {
    alert("Debes ingresar un email para subscribirte a nuestras novedades.");
  }
  $("#emailSubscripcion").val("");
}

function verificarEmail(email) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return true;
  } else {
    return false;
  }
}

/*  Profesores */
function obtenerProfesores() {
  if (!localStorage.getItem("profesores")) {
    fetch("http://localhost:3000/profesores/obtener")
      .then((respuesta) => respuesta.json())
      .then((profesores) => {
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
        localStorage.setItem("profesores", JSON.stringify(profesores));
      });
  } else {
    const profesores = JSON.parse(localStorage.getItem("profesores"));
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
}

function mostrarProfesor(id) {
  const profesores = JSON.parse(localStorage.getItem("profesores"));
  const profesor = profesores.filter((profesor) => profesor.id === id);
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

function crearProfesor() {
  event.preventDefault();
  const nombre = $("#nameProfesor").val();
  const sexo = $("#slcSexoProfesor").val();
  const rol = $("#rolProfesor").val();
  const descripcion = $("#descripcionProfesor").val();

  if (nombre === "" || sexo === "" || rol === "" || descripcion === undefined) {
    alert("Todos los campos son obligatorios.");
  } else {
    const data = {
      name: nombre,
      rol,
      sexo,
      descripcion,
    };
    fetch("http://localhost:3000/profesores/crear", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((final) => {
        if (final.code === 201) {
          window.location.href = "http://localhost:5500/index.html";
          localStorage.removeItem("profesores");
          obtenerProfesores();
          localStorage.setItem("profesores", JSON.stringify(profesores));
        } else {
          alert(final.message);
        }
      });
  }
}
