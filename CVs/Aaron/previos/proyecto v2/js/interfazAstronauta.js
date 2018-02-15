document.querySelector('#txtAstronautaLogueado').value = localStorage.getItem('astronautaLogueadoLS');

mostrarMisionesAsignadas();

function mostrarMisionesAsignadas(){
  var listaMisiones = getMisiones(),
      tbody = document.querySelector('#tblMisionesAsignadas tbody'),
      sCodigoLog = localStorage.getItem('codigoLogueadoLS');

      tbody.innerHTML = '';

      for (var i = 0; i < listaMisiones.length; i++) {
        var listaTripulacion = listaMisiones[i][10];
        for (var  j = 0; j < listaTripulacion.length; j++) {
          if (sCodigoLog == listaTripulacion[j]) {

            var fila = document.createElement('tr'),
                celdaMisiones = document.createElement('td'),
                celdaPrograma = document.createElement('td'),
                celdaEstado = document.createElement('td');

                celdaMisiones.innerHTML = listaMisiones[i][1];
                celdaPrograma.innerHTML = listaMisiones[i][2];
                celdaEstado.innerHTML = listaMisiones[i][6];

                fila.appendChild(celdaMisiones);
                fila.appendChild(celdaPrograma);
                fila.appendChild(celdaEstado);

                tbody.appendChild(fila);

          }

        }

      }

}
