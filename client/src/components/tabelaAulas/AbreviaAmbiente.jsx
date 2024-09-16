
function AbreviaAmbiente(props) {

  const ambientes = new String(props.ambiente)
  const ambi = ambientes.split("-");
  const resul = ambi.slice(-2).join(" ");

  return (
    resul
  )
}

export default AbreviaAmbiente;