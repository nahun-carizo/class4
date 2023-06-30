class CPassword {
    constructor(longitud = 8, contraseña = "") {
      this.longitud = longitud;
      this.contraseña = contraseña;
    }
  //Esto de esFuerte me vi obligado a buscar como hacerlo
    esFuerte() {
      let mayusculas = 0;
      let minusculas = 0;
      let numeros = 0;
  
      for (let i = 0; i < this.contraseña.length; i++) {
        const caracter = this.contraseña.charAt(i);
  
        if (caracter >= "A" && caracter <= "Z") {
          mayusculas++;
        } else if (caracter >= "a" && caracter <= "z") {
          minusculas++;
        } else if (!isNaN(caracter)) {
          numeros++;
        }
      }
  
      return mayusculas > 2 && minusculas > 1 && numeros > 5;
    }
  }
  
  const formulario = document.getElementById('formularioContraseña');
  
  formulario.addEventListener('submit', function(event) {
    event.preventDefault();
  
    const contraseña = document.getElementById('contraseña').value;
  
    const password = new CPassword(contraseña.length, contraseña);
  
    const esFuerte = password.esFuerte();
  
    const mensaje = document.getElementById('mensaje');
    if (esFuerte) {
      mensaje.textContent = 'La contraseña es fuerte.';
    } else {
      mensaje.textContent = 'La contraseña no cumple con los requisitos. Por favor, intenta nuevamente.';
    }
  });
  