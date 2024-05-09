import React from 'react';
import { Card } from 'react-bootstrap';
const Categorias = ({ categorias, seleccionarCategoria }) => {
  return (
    <div>
      
      <div style={{ maxHeight: 'calc(100vh - 200px)', overflowY: 'auto', backgroundColor: '#ffffff' }}>

      
      <div className="d-flex flex-wrap">
        {categorias.map((categoria, index) => (
          <Card
            key={categoria.codigoid}
            style={{ width: '18rem', margin: '5px',height:'8rem' }}
            onClick={() => seleccionarCategoria(categoria)}
            className="text-center"
          >
            <Card.Body>
              <Card.Title>{categoria.nombre}</Card.Title>
              <Card.Img variant="bottom" src={categoria.imagen}
              style={{ height: '50px',width:'50px' ,objectFit: 'cover' }} />
            </Card.Body>
          </Card>
        ))}
      </div>
      </div>
    </div>
  );
};

  export default Categorias