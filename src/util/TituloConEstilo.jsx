import React from 'react';
import { Card } from 'react-bootstrap';

const TituloConEstilo = ({ titulo }) => {
  return (
    <Card
      style={{
        backgroundColor: 'white',
        borderRadius: '10px',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', // Ajusta la sombra según lo necesites
        padding: '20px',
      }}
    >
      <h1>{titulo}</h1>
    </Card>
  );
};

export default TituloConEstilo;