import Form from 'react-bootstrap/Form';
import React, { useState } from 'react'

const Formulario = () => {
  const [emailId, setEmail] = useState("");
  const [passwd, setPassword] = useState("");

  const validarInput = (e) => {
    //Prevenimos el comportamiento por defecto
    e.preventDefault()

    //Validación input
    if (emailId === '2525') {

      return
    }
    //Eliminar mensaje de error

  }

  return (
    <form>
      <div className="form-group">
      <div> <input className="form-control" name="emailInput" type="email" placeholder="Ingresa tu email"  onChange={(e) => setEmail(e.target.value)} /> </div>
        {emailId !== "" ? (<div> <input className="form-control" name="passInput" placeholder="Contraseña" type="password" onChange={(e) => setPassword(e.target.value)} /> </div>) : (<Form.Text className="text-danger">* Requerido
        </Form.Text>)}
        {passwd === "252525" ? (<div> <button className="btn btn-success" type="submit"> Ingresar </button> </div>) : ( <div><button className="btn btn-dark disabled" type="submit"> Ingresar </button></div>)}

      </div>
    </form>
  )
}

export default Formulario;