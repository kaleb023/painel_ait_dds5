
function AbreviaInstrutor(props) {
    const instrutores = new String(props.instrutor);
    
    const instru = (instrutores.split(' ')[0] +' '+ [instrutores.split(' ')[3]]);

  return (
    instru
  )
}

export default AbreviaInstrutor;