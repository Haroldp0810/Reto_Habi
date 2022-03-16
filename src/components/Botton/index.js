import React from 'react'

const Botton = () => {
  return (
    <div class="container-floating-menu">
      <div class="floating-menu">
        <div class="btn-document">
          <button onclick="verMensaje('Documentos')">
            <img src="images/pizza-3.jpg" alt=""/>
            <p>Registrar</p>
          </button>
        </div>
      </div>
      <div class="ellipse">
        <label for="ellipse">
          <div class="icon">
            <img src="images/Path.png" alt=""/>
          </div>
        </label>
      </div>
    </div>
  )
}

export default Botton
