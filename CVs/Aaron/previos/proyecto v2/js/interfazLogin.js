var divError = document.querySelector('#divError');

divError.classList.add('ocultar');

document.querySelector('#btnIngresar').addEventListener('click',iniciarSesion);



function iniciarSesion(){

  var sCorreo = document.querySelector('#txtNombreUsuario').value;
  var sContrasenna = document.querySelector('#txtContrasenna').value;
  var rol = 0;

  rol = verificarCredenciales(sCorreo,sContrasenna);

  switch(rol){
    case 1:
      window.location.href = 'mantenimiento.html';
    break;
    case 2:
      window.location.href = 'landingAstronauta.html';
    break;
    default:
      divError.innerHTML = 'Usuario o contraseña inválidos';
      divError.classList.remove('ocultar');
    break;
  }
}
