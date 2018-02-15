var mMisiones = [
  ['103','Gemini 3','Gemini','03/23/1965','4:52:31','Primer vuelo tripulado del programa Gemini','Exitoso','Imagen','Transbordador','Tierra',['1','2']],
  ['105','Gemini 5','Gemini','08/21/1965',' 7:22:55:14','Maniobras de Acoplamiento','Exitoso','Imagen','Transbordador', 'Luna',['3','4']],
  ['205','Mercury Redstone 2','Mercury','11/21/1960',' 7:02:50:14','Vuelo Suborbital Lunar','Fracasado','Imagen','Redstone','Luna',['5','6','7']],
  ['301','Ares 1','Constelación','03/22/2018',' 22:02:50:10','Caminata Solar','Pendiente','Imagen','Discovery','Sol',['1','2','4','5','7']]
];


function getMisiones(){
  var listaMisiones = JSON.parse(localStorage.getItem('listaMisionesLS'));

  if(listaMisiones == null){
    listaMisiones = mMisiones;
  }

  return listaMisiones;

}

function setMisiones(pArregloME){
  mMisiones = getMisiones();
  mMisiones.push(pArregloME);
  localStorage.setItem('listaMisionesLS', JSON.stringify(mMisiones));
}
