/*
  Para seguiente función:
  inválido = 0
  admin = 1
  astronauta = 2
*/

var mAstronautas = [
  ['1','113310332','admin','','','','45','Masculino','Estadounidense','123Aabc!','123Aabc!', 'administrador','admin'],
  ['2','113310334','John','William','Young','Valverde','42','Masculino','Estadounidense','Password','Password','astronauta','jyoung@nasa.com'],
  ['3','113310331','Gordon','NA','Cooper','McLachlan','50','Masculino','Estadounidense','ABC123','ABC123','astronauta','gcooper@nasa.com'],
  ['4','113310330','James','Gordon','Lowell','Holcomb','55','Masculino','Estadounidense','Player1!','Player1!','astronauta','jlowellm@nasa.com'],
  ['5','113310339','Ham','NA','ElChimpancé','NA','13','Masculino','Norafricano','SoyUnMono','SoyUnMono','astronauta','hchimpance@nasa.com'],
  ['6','113310338','Franklin','NA','Chang','Díaz','56','Masculino','Costarricense','H0la23','H0la23','astronauta','fchang@nasa.com'],
  ['7','113310336','Laika','NA','2','NA','8','Femenino','Rusa','GuauGuau','GuauGuau','astronauta','laika2@nasa.com']
];

function getAstronautas(){
  var listaAstronautas = JSON.parse(localStorage.getItem('listaAstronautasLS'));

  if(listaAstronautas == null){
    listaAstronautas = mAstronautas;
  }

  return listaAstronautas;

}

function setAstronautas(pArregloAs){
  mAstronautas = getAstronautas();
  mAstronautas.push(pArregloAs);
  localStorage.setItem('listaAstronautasLS', JSON.stringify(mAstronautas));
}

function verificarCredenciales(pEmail, pContrasenna){

  var listaAstronautas = getAstronautas();
  var nTamanno = listaAstronautas.length;
  var rol = 0;

  for(var i = 0; i < nTamanno; i++){
    if(listaAstronautas[i][12] === pEmail  && listaAstronautas[i][9] === pContrasenna){
      localStorage.setItem('astronautaLogueadoLS', (listaAstronautas[i][2] + ' ' + listaAstronautas[i][4]));
      localStorage.setItem('codigoLogueadoLS', listaAstronautas[i][0]);
      switch(listaAstronautas[i][11]){
        case 'administrador':
          rol = 1;
        break;
        case 'astronauta':
          rol = 2;
        break;
        default:
          rol = 0;
        break;
      }
    }
  }
  return rol;
}
