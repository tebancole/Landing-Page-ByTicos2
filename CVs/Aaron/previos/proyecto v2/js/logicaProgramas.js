var mProgramasEspaciales = [
  ['100','Gemini','04/08/1965','11/11/1966','Alcance Sistema Solar',['103','105']],
  ['200','Mercury','11/21/1960','05/15/1963','Alcance Sistema Solar',['205']],
  ['300','Constelación','01/01/2009','08/12/2018','Alcance Intergaláctico',['301']]
];

function getProgramas(){
  var listaProgramas = JSON.parse(localStorage.getItem('listaProgramasLS'));

  if(listaProgramas == null){
    listaProgramas = mProgramasEspaciales;
  }

  return listaProgramas;

}

function setProgramas(pArregloPE){
  mProgramasEspaciales = getProgramas();
  mProgramasEspaciales.push(pArregloPE);
  localStorage.setItem('listaProgramasLS', JSON.stringify(mProgramasEspaciales));
}
