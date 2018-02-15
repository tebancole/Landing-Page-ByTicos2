var mCuerposCelestes = [
  ['000','Estrella','Sol','332995','5505','NA','4600 millones de años', 'H y He', 'NA', 'NA', 'NA', '100000', '696342'],
  ['001','Planeta','Mercurio','0.055','178.9','59','4600 millones de años', 'K y Na', '0.39', '0.241', '0', 'NA', 'NA'],
  ['002','Planeta','Venus','0.815','462','243','4600 millones de años', 'C y O', '0.72', '0.615', '0', 'NA', 'NA'],
  ['003','Planeta','Tierra','1','20','1','4600 millones de años', 'C,H,O y N', '1', '1', '1', 'NA', 'NA'],
  ['004','Satelite','Luna','0.4', '-153','NA','4600 millones de años', 'C y O', '1', 'NA', 'NA', 'NA', 'NA']
];

function getCuerpos(){
  var listaCuerpos = JSON.parse(localStorage.getItem('listaCuerposLS'));

  if(listaCuerpos == null){
    listaCuerpos = mCuerposCelestes;
  }

  return listaCuerpos;

}

function setCuerpos(pArregloCC){
  mCuerposCelestes = getCuerpos();
  mCuerposCelestes.push(pArregloCC);
  localStorage.setItem('listaCuerposLS', JSON.stringify(mCuerposCelestes));
}
