
function AbreviaUc(props) {
  const uniCurri = new String(props.unidade_curricular);
  const uni = (uniCurri.split('')[0]+uniCurri.split('')[1]+uniCurri.split('')[2]+uniCurri.split('')[3] + '.' + uniCurri.split(' ')[3])
  return (
    uni
  )
}

export default AbreviaUc;