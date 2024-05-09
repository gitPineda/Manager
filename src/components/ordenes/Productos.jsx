import { Button } from 'react-bootstrap';
import React,{useState,useEffect} from 'react';


const Productos=({ productos, seleccionarProducto ,categoriaSeleccionada,toggleIngredientereceta})=> {

  console.log(productos)
    const productosFiltrados = productos.filter(producto => producto.categoria === categoriaSeleccionada.codigoid);
    //const productosFiltrados = filtrarProductosPorNombre(productos, filtroNombre);
    
   
    return (
      <div style={{ maxHeight: 'calc(100vh - 200px)', overflowY: 'auto', backgroundColor: '#ffffff' }}>
      {productosFiltrados.length === 0 ? (
        <h2>Debes elegir una categoría.</h2>
      ) : (
        <ul>
          {productosFiltrados.map((producto, index) => (
            <li key={producto.codigo}>
              <h3>{producto.nombre} - {producto.precio}</h3>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' , backgroundColor: '#ffffff'}}>
                <img 
                  src={producto.imagen} 
                  alt={producto.nombre} 
                  style={{ maxWidth: '100px', maxHeight: '100px', backgroundColor: '#ffffff' }} 
                />
              </div>
              <p>Receta:</p>
              <ul>
                {producto.receta.map((ingrediente, ingIndex) => (
                  <li key={ingIndex}>
                    <input 
                      type="checkbox" 
                      defaultChecked={ingrediente.checked}
                      onChange={() => toggleIngredientereceta(producto, ingIndex)} 

                  
                    />
                    {ingrediente.nombre} - {ingrediente.cantidad}
                  </li>
                ))}
              </ul>
              <Button onClick={() => seleccionarProducto(producto)}>Seleccionar</Button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
  }
  export default Productos