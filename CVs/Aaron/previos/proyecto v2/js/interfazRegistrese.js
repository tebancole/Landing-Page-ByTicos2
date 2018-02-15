document.querySelector('#divReg').classList.add('ocultar');
document.querySelector('#btnIngresarUsuario').addEventListener('click', obtenerDatosAs)

function obtenerDatosAs(){
  var bExisteError = validarReg(),
      bErrorPw = validarRegPw();
    if (bExisteError===false) {
      if (bErrorPw===false) {
      var aInfoAs = [],
      sCodigo = document.querySelector('#txtCodigoAs').value,
      sIdentificacion = document.querySelector('#txtIdentificacionAs').value,
      sNombre = document.querySelector('#txtNombreAs').value,
      sNombre2 = document.querySelector('#txtNombre2As').value,
      sApellido = document.querySelector('#txtApellidoAs').value,
      sApellido2 = document.querySelector('#txtApellido2As').value,
      sEdad = document.querySelector('#txtEdadAs').value,
      sGenero = document.querySelector('#txtGeneroAs').value,
      sNacionalidad = document.querySelector('#txtNacionalidadAs').value,
      sContrasenna = document.querySelector('#txtContrasennaAs').value,
      sConfirmacion= document.querySelector('#txtConfirmacionAs').value,
      sTipo= document.querySelector('#txtTipoAs').value,
      sCorreo= document.querySelector('#txtCorreoAs').value;


      aInfoAs.push(sCodigo,sIdentificacion, sNombre,sNombre2,sApellido,sApellido2,sEdad,sGenero,sNacionalidad,sContrasenna,sConfirmacion,sTipo,sCorreo);
      setAstronautas(aInfoAs);
      document.querySelector('#txtResult').value = 'Su registro ha sido exitoso, favor ingrese al sistema'
        }
    }else {
      document.querySelector('#divReg').classList.remove('ocultar');
      document.querySelector('#divReg').classList.add('mostrar');
    }
  }

function validarReg(){
  var bError=false,
      inputs = document.querySelectorAll('#frmReg input[type=text]');

  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].required == true && inputs[i].value.length===0) {
      inputs[i].classList.add('errorV');
      bError = true;
      }else {
      inputs[i].classList.remove('errorV');
    }
  }
  return bError;
}

function validarRegPw(){
  var bError=false,
      inputs = document.querySelectorAll('#frmReg input[type=password]');

  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].required == true && inputs[i].value.length===0) {
      inputs[i].classList.add('errorV');
      bError = true;
      }else {
      inputs[i].classList.remove('errorV');
    }
  }
  return bError;
}
