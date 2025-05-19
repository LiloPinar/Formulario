document.getElementById("formulario").addEventListener("submit", function(e) {
    e.preventDefault();
  
    // Limpiar errores
    document.querySelectorAll(".error").forEach(el => el.textContent = "");
  
    let valido = true;
  
    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const fecha = document.getElementById("fecha_nacimiento").value;
    const genero = document.querySelector('input[name="genero"]:checked');
    const estado = document.getElementById("estado").value;
    const nacionalidad = document.getElementById("nacionalidad").value;
    const direccion = document.getElementById("direccion").value.trim();

    const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const telefonoRegex = /^\d{10}$/;
  
    if (nombre === "") {
      document.getElementById("error-nombre").textContent = "El nombre es obligatorio";
      valido = false;
    }
  
    if (!correoRegex.test(correo)) {
      document.getElementById("error-correo").textContent = "Correo electrónico no válido";
      valido = false;
    }
  
    if (!telefonoRegex.test(telefono)) {
      document.getElementById("error-telefono").textContent = "Debe tener hasta 10 digitos";
      valido = false;
    }
  
    if (fecha) {
      const edad = calcularEdad(new Date(fecha));
      if (edad < 18) {
        document.getElementById("error-fecha").textContent = "Debes tener al menos 18 años";
        valido = false;
      }
    } else {
      document.getElementById("error-fecha").textContent = "Selecciona una fecha.";
      valido = false;
    }
  
    if (!genero) {
      document.getElementById("error-genero").textContent = "Selecciona un género.";
      valido = false;
    }
  
    if (estado === "") {
      document.getElementById("error-estado").textContent = "Selecciona un estado civil.";
      valido = false;
    }
  
    if (nacionalidad === "") {
      document.getElementById("error-nacionalidad").textContent = "Selecciona una nacionalidad.";
      valido = false;
    }
  
    if (direccion.length < 10) {
      document.getElementById("error-direccion").textContent = "La dirección debe tener al menos 10 caracteres.";
      valido = false;
    }
  
    if (valido) {
      alert("Formulario enviado correctamente.");
      this.submit(); 
    }
  });
  
  function calcularEdad(fechaNacimiento) {
    const hoy = new Date();
    let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
    const m = hoy.getMonth() - fechaNacimiento.getMonth();
    if (m < 0 || (m === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
      edad--;
    }
    return edad;
  }




  



