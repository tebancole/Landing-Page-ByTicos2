document.querySelector('#txtAstronautaLogueado').value = localStorage.getItem('astronautaLogueadoLS');
document.querySelector('#sltMantenimiento').addEventListener('change', mostrarMantenimiento);
document.querySelector('#divPE').classList.add('ocultar');
document.querySelector('#divME').classList.add('ocultar');
document.querySelector('#divCC').classList.add('ocultar');
document.querySelector('#btnRegistrarPE').addEventListener('click',obtenerDatosPE);
document.querySelector('#btnRegistrarCC').addEventListener('click',obtenerDatosCC);
document.querySelector('#btnRegistrarME').addEventListener('click',obtenerDatosME);
document.querySelector('#seleccioneCC').addEventListener('change', imprimirCC);
mostrarDatosPE();
mostrarDatosME();
mostrarDatosCC();
poblarCuerpos();
poblarPrograma();
mostrarAstronautas();
mostrarMisiones();

function mostrarMantenimiento() {
     var visualizar = document.querySelector('#sltMantenimiento').value;

     if (visualizar=='none') {
       document.getElementById('1').style.display = "none";
       document.getElementById('2').style.display = "none";
       document.getElementById('3').style.display = "none";
     }

    if (visualizar=='mantCC') {
      document.getElementById('1').style.display = "block";
      document.getElementById('2').style.display = "none";
      document.getElementById('3').style.display = "none";
      }

     if (visualizar=='mantPE'){
       document.getElementById('1').style.display = "none";
       document.getElementById('2').style.display = "block";
       document.getElementById('3').style.display = "none";
      }

     if (visualizar=='mantME'){
       document.getElementById('1').style.display = "none";
       document.getElementById('2').style.display = "none";
       document.getElementById('3').style.display = "block";
     }


  }


  function obtenerDatosCC(){
    var bExisteError = validarCC(),
        bErrorSelect = validarselectCC();
      if (bExisteError===false) {
        if (bErrorSelect===false) {
          var aInfoCC = [],
          sCodigo = Number(document.querySelector('#txtCodigoCC').value),
          sTipo = document.querySelector('#seleccioneTipo').value,
          sNombre = document.querySelector('#txtNombre').value,
          sMasa = Number(document.querySelector('#txtMasa').value),
          sTemperatura = Number(document.querySelector('#txtTemperatura').value),
          sDuracionDia = document.querySelector('#txtDia').value,
          nEdad = document.querySelector('#txtEdad').value,
          sComposicion = document.querySelector('#txtComposicion').value,
          sDistanciaSol = Number(document.querySelector('#txtDistancia').value),
          sDuracionAnno = Number(document.querySelector('#txtAnno').value),
          sCantSatelite = Number(document.querySelector('#txtSatelites').value),
          sIntenLum = Number(document.querySelector('#txtIntensidad').value),
          sTamanno = Number(document.querySelector('#txtTamanno').value);

          aInfoCC.push(sCodigo,sTipo,sNombre,sMasa,sTemperatura,sDuracionDia,nEdad,sComposicion,sDistanciaSol,sDuracionAnno,sCantSatelite,sIntenLum,sTamanno);
          setCuerpos(aInfoCC);

          mostrarDatosCC();
        }

      }else {
        document.querySelector('#divCC').classList.remove('ocultar');
        document.querySelector('#divCC').classList.add('mostrar');
    }
}

function validarCC(){
  var bError=false,
      inputs = document.querySelectorAll('#frmCC input[type=text]');

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

function validarselectCC(){
  var bError=false,
      inputs = document.querySelectorAll('#frmCC select');

  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].required == true && inputs[i].value==='none') {
      inputs[i].classList.add('errorV');
      bError = true;
      }else {
      inputs[i].classList.remove('errorV');
    }
  }
  return bError;
}

function obtenerDatosPE(){

var bExisteError = validarPE(),
    bErrorFechas = validarFechasPE();
  if (bExisteError===false) {
      if (bErrorFechas===false) {
        var aInfoPE = [],
            aPosicion5 = [],
            sCodigo = Number(document.querySelector('#txtCodigoPE').value),
            sNombre = document.querySelector('#txtNombrePE').value,
            dFechaInicio = new Date (document.querySelector('#txtFechaInicio').value),
            dFechaFin = new Date (document.querySelector('#txtFechaFin').value),
            sAlcance = document.querySelector('#txtAlcance').value,
            misionesChequeadas = document.querySelectorAll('#divMisiones input[type=checkbox]:checked');

          for(var i=0; i < misionesChequeadas.length; i++){
          aPosicion5.push(misionesChequeadas[i].value);
          }

          aInfoPE.push(sCodigo,sNombre,dFechaInicio,dFechaFin,sAlcance,aPosicion5);
          setProgramas(aInfoPE);

          mostrarDatosPE();
      }


  } else {
    document.querySelector('#divPE').classList.remove('ocultar');
    document.querySelector('#divPE').classList.add('mostrar');
  }
}

function validarPE(){
  var bError=false,
      inputs = document.querySelectorAll('#formPE input[type=text]');

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

function validarFechasPE(){
  var bError=false,
      inputs = document.querySelectorAll('#formPE input[type=date]');

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

function obtenerDatosME(){

  var bExisteError = validarME(),
      bErrorSelect = validarselectME();
    if (bExisteError===false) {
      if (bErrorSelect===false) {
        var aInfoME = [],
            aPosicion10 = [],
            sCodigo = Number(document.querySelector('#txtCodigoME').value),
            sNombre = document.querySelector('#txtNombreME').value,
            sSeleccioneProgra = document.querySelector('#seleccionePrograma').value,
            sFechaDesp = document.querySelector('#txtFechaDespegue').value,
            sDuracion = document.querySelector('#txtDuracion').value,
            sDatos = document.querySelector('#txtDatos').value,
            sSeleccioneEstado = document.querySelector('#seleccioneEstado').value,
            sImagen = document.querySelector('#txtImagen').value,
            sNave = document.querySelector('#txtNave').value,
            sMEDirige = document.querySelector('#sltCuerpoC').value,
            astronautasChequeados = document.querySelectorAll('#divAstronautas input[type=checkbox]:checked');

            for(var i=0; i < astronautasChequeados.length; i++){
            aPosicion10.push(astronautasChequeados[i].value);
            }

            aInfoME.push(sCodigo,sNombre,sSeleccioneProgra,sFechaDesp,sDuracion, sDatos,sSeleccioneEstado,sImagen,sNave,sMEDirige,aPosicion10);

            setMisiones(aInfoME);

            mostrarDatosME();
      }
    } else {
      document.querySelector('#divME').classList.remove('ocultar');
      document.querySelector('#divME').classList.add('mostrar');
    }
  }

function validarME(){
  var bError=false,
      inputs = document.querySelectorAll('#frmME input[type=text]');

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

function validarselectME(){
  var bError=false,
      inputs = document.querySelectorAll('#frmME select');

  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].required == true && inputs[i].value==='none') {
      inputs[i].classList.add('errorV');
      bError = true;
      }else {
      inputs[i].classList.remove('errorV');
    }
  }
  return bError;
}

function poblarCuerpos(){
  var   listaCC = getCuerpos(),
        select = document.querySelector('#sltCuerpoC');

        select.innerHTML = '';

  var opcion = document.createElement('option');
  opcion.value = 'none';
  opcion.text = '--Asigne un Cuerpo Celeste a la Misión--';
  select.appendChild(opcion);

  for (var i = 0; i < listaCC.length; i++) {
    var opcion = document.createElement('option');
    opcion.value = listaCC[i][2];
    opcion.text = listaCC[i][2];
    select.appendChild(opcion);
  }
}

function poblarPrograma(){
  var   listaProgramas = getProgramas(),
        select = document.querySelector('#seleccionePrograma');

        select.innerHTML = '';

  var opcion = document.createElement('option');
  opcion.value = 'none';
  opcion.text = '--Asigne un Programa Espacial a la Misión--';
  select.appendChild(opcion);

  for (var i = 0; i < listaProgramas.length; i++) {
    var opcion = document.createElement('option');
    opcion.value = listaProgramas[i][1];
    opcion.text = listaProgramas[i][1];
    select.appendChild(opcion);
  }
}

function mostrarAstronautas(){
  var divAstronautas =  document.querySelector('#divAstronautas');
  var aAstronautas = getAstronautas();
  for(var i = 0; i < aAstronautas.length;i++){
    var divInfo = document.createElement('div');
    var checkbox = document.createElement('input');
    var label = document.createElement('label');
    checkbox.type = 'checkbox';
    checkbox.value = aAstronautas[i][0];

    label.innerHTML = aAstronautas[i][0];
    divInfo.appendChild(label);
    divInfo.appendChild(checkbox);

    divAstronautas.appendChild(divInfo);
  }
}

function mostrarMisiones(){
  var divMisiones =  document.querySelector('#divMisiones');
  var aMisiones = getMisiones();
  for(var i = 0; i < aMisiones.length;i++){
    var divInfo = document.createElement('div');
    var checkbox = document.createElement('input');
    var label = document.createElement('label');
    checkbox.type = 'checkbox';
    checkbox.value = aMisiones[i][0];

    label.innerHTML = aMisiones[i][0];
    divInfo.appendChild(label);
    divInfo.appendChild(checkbox);

    divMisiones.appendChild(divInfo);
  }
}

function mostrarDatosPE(){
    var listaProgramas = getProgramas(),
        nTamanno = listaProgramas.length,
        nCantColumnas = listaProgramas[0].length,
        tbody = document.querySelector('#tblPE tbody');

    tbody.innerHTML = '';
    for(var i = 0; i < nTamanno; i++){
      var fila = tbody.insertRow(i);
      for(var j=0; j < nCantColumnas; j++){
        var celda = fila.insertCell(j);
        celda.innerHTML = listaProgramas[i][j];
      }
    }

  }

  function mostrarDatosCC(){
      var listaCuerpos = getCuerpos(),
          nTamanno = listaCuerpos.length,
          nCantColumnas = listaCuerpos[0].length,
          tbody = document.querySelector('#tblCC tbody');

      tbody.innerHTML = '';
      for(var i = 0; i < nTamanno; i++){
        var fila = tbody.insertRow(i);
        for(var j=0; j < nCantColumnas; j++){
          var celda = fila.insertCell(j);
          celda.innerHTML = listaCuerpos[i][j];
        }
      }

    }

function imprimirCC(){
  var TipoCC=document.querySelector('#seleccioneCC').value;

    switch (TipoCC) {
      case 'planeta':
      mostrarDatosPlaneta();
        break;
        case 'estrella':
        mostrarDatosEstrella();
          break;
          case 'satelite':
          mostrarDatosSatelite();
            break;
      default: mostrarDatosCC();

    }
  }

function mostrarDatosEstrella(){
  var listaCuerpos = getCuerpos(),
      nTamanno = listaCuerpos.length,
        nCantColumnas = listaCuerpos[0].length,
        tbody = document.querySelector('#tblCC tbody');
        tbody.innerHTML = '';

        for(var i = 0; i < nTamanno; i++){
          var Tipo = listaCuerpos[i][1];
          if (Tipo==='Estrella') {
            var fila =document.createElement('tr');

            for(var j=0; j < nCantColumnas; j++){
              var celda = fila.insertCell(j);
              celda.innerHTML = listaCuerpos[i][j];
              tbody.appendChild(fila);
            }
          }
        }
  }

function mostrarDatosPlaneta(){
    var listaCuerpos = getCuerpos(),
        nTamanno = listaCuerpos.length,
        nCantColumnas = listaCuerpos[0].length,
        tbody = document.querySelector('#tblCC tbody');
        tbody.innerHTML = '';

        for(var i = 0; i < nTamanno; i++){
          var Tipo = listaCuerpos[i][1];
          if (Tipo==='Planeta') {
            var fila =document.createElement('tr');

            for(var j=0; j < nCantColumnas; j++){
              var celda = fila.insertCell(j);
              celda.innerHTML = listaCuerpos[i][j];
              tbody.appendChild(fila);
            }
          }
        }
  }

function mostrarDatosSatelite(){
    var listaCuerpos = getCuerpos(),
        nTamanno = listaCuerpos.length,
        nCantColumnas = listaCuerpos[0].length,
        tbody = document.querySelector('#tblCC tbody');
        tbody.innerHTML = '';

        for(var i = 0; i < nTamanno; i++){
          var Tipo = listaCuerpos[i][1];
          if (Tipo==='Satelite') {

            var fila =document.createElement('tr');

            for(var j=0; j < nCantColumnas; j++){
              var celda = fila.insertCell(j);
              celda.innerHTML = listaCuerpos[i][j];
              tbody.appendChild(fila);
            }
          }
        }
  }

function mostrarDatosME(){
  var listaMisiones = getMisiones(),
    nTamanno = listaMisiones.length,
    nCantColumnas = listaMisiones[0].length,
    tbody = document.querySelector('#tblME tbody');

      tbody.innerHTML = '';
      for(var i = 0; i < nTamanno; i++){
        var fila = tbody.insertRow(i);
        for(var j=0; j < nCantColumnas; j++){
          var celda = fila.insertCell(j);
          celda.innerHTML = listaMisiones[i][j];
        }
      }
    }
