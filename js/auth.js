$("#btnLogin").click(login);
$("#btnRegistro").click(registro);
function login() {
  event.preventDefault();
  const email = $("#emailLogin").val();
  const password = $("#passwordLogin").val();

  if (email === "" || password === "") {
    alert("Por favor rellene todos los campos");
  } else {
    const data = {
      email,
      password,
    };
    fetch("http://localhost:3000/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((final) => {
        if (final.code === 200) {
          console.log(final);
          alert("Bienvenido");
          localStorage.setItem("token", final.token);
          window.location.href = "http://localhost:5500/crear.html";
        } else {
          alert(final.message);
        }
      });
  }
}
function registro() {
  event.preventDefault();
  const name = $("#nameRegistro").val();
  const email = $("#emailRegistro").val();
  const password = $("#passwordRegistro").val();

  if (email === "" || password === "" || name === "") {
    alert("Por favor rellene todos los campos");
  } else {
    const data = {
      name,
      email,
      password,
    };
    console.log(data);
    fetch("http://localhost:3000/auth/registro", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((final) => {
        if (final.code === 200) {
          window.location.href = "http://localhost:5500/login.html";
          alert("Bienvenido");
        } else {
          alert(final.message);
        }
      });
  }
}
