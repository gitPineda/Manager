import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const ConfirmSaveModal = ({ show, onConfirm, onClose,ingredientesSeleccionados, toggleIngrediente, productosAdicionales, agregarProductoConIngredientes}) => {
  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Guardar pedido</Modal.Title>
      </Modal.Header>
      <Modal.Body>
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
      
      </Modal.Body>
      <Modal.Footer>
        
        <Button variant="primary" onClick={agregarProductoConIngredientes}>
        Agregar al pedido
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ConfirmSaveModal;