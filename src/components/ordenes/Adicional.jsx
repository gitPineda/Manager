import React from 'react';

const Adicional = ({ onClose, ingredientesSeleccionados, toggleIngrediente, productosAdicionales, agregarProductoConIngredientes }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Seleccionar ingredientes adicionales</h2>
        <ul>
          {productosAdicionales.map((ingrediente) => (
            <li key={ingrediente.codigo}>
              <input 
                type="checkbox" 
                onChange={() => toggleIngrediente(ingrediente)} 
                checked={ingredientesSeleccionados.some((item) => item.codigo === ingrediente.codigo)} 
              />
              {ingrediente.nombre} - {ingrediente.precio}
            </li>
          ))}
        </ul>
        <button onClick={agregarProductoConIngredientes}>Agregar al pedido</button>
      </div>
    </div>
  );
};

export default Adicional;
