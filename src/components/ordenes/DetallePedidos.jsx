
import React from 'react';
import { Table, Button } from 'react-bootstrap';
import '../../styles/styles.css'
import styled from 'styled-components';
import LineDivision from '../LineDivision';


const DetallePedidos=({ orden, eliminarProducto, incrementarCantidad, decrementarCantidad }) => {

  console.log(orden)
  
    return (
<>

<div>
  {orden && orden.productos && orden.productos.length > 0  && (
    <div style={{ maxHeight: 'calc(100vh - 200px)', overflowY: 'auto', backgroundColor: '#ffffff' }}>
      <div className="tabla-responsiva">
        <Table responsive striped bordered hover>
          <thead className="encabezado-fijo">
            <tr>
              <th>Código</th>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Unidades</th>
              <th>Adiconal</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {orden.productos.map((item, index) => (
              <tr key={index}>
                <td>{item.codigo}</td>
                <td>{item.nombre}</td>
                <td>{item.precio}</td>
                <td>{item.unidad}</td>

                <td>
                {item.adicionales && item.adicionales.length > 0 && (
                    <ul>
                      {item.adicionales.map((adicional, adicionalIndex) => (
                        <li key={adicionalIndex}>
                          {adicional.nombre} - Precio: {adicional.precio}
                        </li>
                      ))}
                    </ul>
                  )}
                </td>
                <td>
                  <Button onClick={() => eliminarProducto(index)} variant="danger">
                    Eliminar
                  </Button>
                  <LineDivision></LineDivision>
                  <Button onClick={() => incrementarCantidad(index)} variant="success">Añadir</Button>
                  <LineDivision></LineDivision>
                  <Button onClick={() => decrementarCantidad(index)} variant="success">Restar</Button>
                  <LineDivision></LineDivision>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  )}
  {orden && orden.productos && orden.productos.length > 0  && (
    <>
      <LineDivision></LineDivision>
      <p>Subtotal: {orden.subtotal}</p>
      <p>IVA: {orden.iva}</p>
      <p>Total: {orden.total}</p>
    </>
  )}
</div>

      </>
    );
  }
  const TableHeader = styled.thead`
  display: table;
  width: 100%;
  table-layout: fixed;

  tr {
    height: 40px;
    width: 100%;

    th {
      padding-left: 15px;
      padding-right: 15px;
      width: 33%;
      border-top: none;
      border-bottom: 1px solid #F1F1F1;

      &:last-child { //make room for scrollbar
        width: 36%;
      }
    }
  }
`;

const TableBody = styled.tbody`
  display: block;
  max-height: calc(100% - 45px); //has to be specific
  overflow-y: scroll;
  overflow-x: hidden;
  position: absolute; //in relation to a parent

  > tr {
    display: table;
    width: 100%;
    table-layout: fixed;

    height: 40px;
    cursor: pointer;
  }
`;

const TD = styled.td`
  padding-left: 15px;
  padding-right: 15px;
  border-top: none;
  border-bottom: 1px solid #F1F1F1;
  width: 33%;
  max-width: 33%;
  word-break: break-all;

  &:last-child { //make room for scrollbar
    width: 36%;
  }
`;

  export default DetallePedidos