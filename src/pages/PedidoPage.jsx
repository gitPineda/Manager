// components/PedidoPage.js
import React, { useState , useEffect} from 'react';


import '../styles.css'

import DetallePedidos from '../components/ordenes/DetallePedidos';
import Productos from '../components/ordenes/Productos';
import Categorias from '../components/ordenes/Categorias';
import { Modal, Button ,Form} from 'react-bootstrap';
import ConfirmSaveModal from '../components/order/ConfirmSaveModal';
import Adicional from '../components/ordenes/Adicional';
import LineDivision from '../components/LineDivision';
import datos from '../data/datos'; // Importa tus datos de categorías y productos
import { categoriasEjemplo, productosEjemplo, productosAdicionalesEjemplo } from '../data/informacion';


const PedidoPage=() =>{

 

  const [modalVisible, setModalVisible] = useState(false);
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);
  const [ingredientesSeleccionados, setIngredientesSeleccionados] = useState([]);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('');
  //const [productos, setProductos] = useState(productosEjemplo);
 // const [productosAdicionales, setProductosAdicionales] = useState(productosAdicionalesEjemplo);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [filtroNombre, setFiltroNombre] = useState('');
  const [showModal, setShowModal] = useState(false);



  
  const [categorias, setCategorias] = useState([]);
  const [productos, setProductos] = useState([]);
  const [productosAdicionales, setProductosAdicionales] = useState([]);


  useEffect(() => {
    // Aquí puedes cargar los datos al iniciar la página
    // Por ejemplo, podrías asignar los valores de los arrays importados a los estados correspondientes

    setCategorias(categoriasEjemplo);
    setProductos(productosEjemplo.map(producto => {
      return {
          ...producto,
          receta: producto.receta.map(ingrediente => ({
              ...ingrediente,
              checked: true // Asegura que todos los ingredientes están marcados al inicio
          }))
      };
  }));
    setProductosAdicionales(productosAdicionalesEjemplo);

    // También puedes realizar cualquier otra lógica que necesites al cargar los datos
  }, []);



    
    const [orden, setOrden] = useState({
      productos: [],
      subtotal: 0,
      iva: 0,
      total: 0
    });
   
  
    // Función para abrir el modal y seleccionar un producto
    const abrirModal = (producto) => {
      setModalVisible(true);
      setShowConfirmModal(true);

      console.log(modalVisible) 
      console.log(showConfirmModal)
      setProductoSeleccionado(producto);
      setIngredientesSeleccionados([]);
    };
  
    // Función para cerrar el modal
    const cerrarModal = () => {
      setModalVisible(false);
    };
  
    // Función para manejar la selección de un ingrediente adicional
    const toggleIngrediente = (ingrediente) => {
      const index = ingredientesSeleccionados.findIndex((item) => item.codigo === ingrediente.codigo);
      if (index === -1) {
        setIngredientesSeleccionados([...ingredientesSeleccionados, ingrediente]);
      } else {
        const nuevosIngredientes = [...ingredientesSeleccionados];
        nuevosIngredientes.splice(index, 1);
        setIngredientesSeleccionados(nuevosIngredientes);
      }
    };
  
    
  
  
    const agregarProductoConIngredientes = () => {
      const precioBase = productoSeleccionado.precio;
      const precioIngredientes = ingredientesSeleccionados.reduce((total, ingrediente) => total + ingrediente.precio, 0);
      const precioTotal = precioBase + precioIngredientes;
      const nuevoProducto = {
        codigo: productoSeleccionado.codigo,
        nombre: productoSeleccionado.nombre,
        precio: precioTotal,
        adicionales: ingredientesSeleccionados,
        receta: productoSeleccionado.receta,
        unidad:1
      };
      const nuevosProductos = [...orden.productos, nuevoProducto];
      const { subtotal, iva, total } = calcularTotalPedido(nuevosProductos);
      setOrden({ productos: nuevosProductos, subtotal, iva, total });
      // cerrarModal();
      setShowConfirmModal(false);
    };
   
  
    const eliminarProducto = (index) => {
      const nuevosProductos = [...orden.productos];
      nuevosProductos.splice(index, 1);
      const { subtotal, iva, total } = calcularTotalPedido(nuevosProductos);
      setOrden({ productos: nuevosProductos, subtotal, iva, total });
    };
  
   
  
  
  
  
  const calcularTotalPedido = (productos) => {
    const subtotal = productos.reduce((total, producto) => total + (producto.precio*producto.unidad), 0);
    const iva = subtotal * 0.16; // Suponiendo un IVA del 16%
    const total = subtotal + iva;
    return { subtotal, iva, total };
  };
  
  const guardarOrden = () => {
    // Aquí puedes enviar la orden de pedido al servidor, guardarla en una base de datos, etc.
    console.log('Orden guardada:', orden);
  
    console.log('Orden guardada:');
    console.log(orden.productos.map(producto => ({
      codigo: producto.codigo,
      nombre: producto.nombre,
      precio: producto.precio,
      receta: producto.receta ,
      unidad:producto.unidad, // Asegúrate de que receta esté presente aquí
    })));
    // También podrías reiniciar el estado de la orden si es necesario
    setOrden({
      productos: [],
      subtotal: 0,
      iva: 0,
      total: 0
    });
  };
  // const toggleIngredientereceta = (producto, index) => {
  //   const newRecipe = [...producto.receta];
  //   newRecipe[index].checked = !newRecipe[index].checked;
  //   const updatedProducto = { ...producto, receta: newRecipe };
  //   // Actualizar el producto en la lista de productos de la orden si es necesario
  //   const updatedProductos = orden.productos.map(p => (p.codigo === updatedProducto.codigo ? updatedProducto : p));
  //   setOrden({ ...orden, productos: updatedProductos });
  // };

  const forceUpdate = React.useReducer(bool => !bool, false)[1];
  const toggleIngredientereceta = (producto, ingIndex) => {
    const indexProducto = orden.productos.findIndex(p => p.codigo === producto.codigo);
    if (indexProducto !== -1) {
        const productoModificado = {
            ...orden.productos[indexProducto],
            receta: [...orden.productos[indexProducto].receta]
        };
        productoModificado.receta[ingIndex].checked = !productoModificado.receta[ingIndex].checked;
        console.log("Nuevo estado del ingrediente:", productoModificado.receta[ingIndex]);

        const productosActualizados = [...orden.productos];
        productosActualizados[indexProducto] = productoModificado;

       // setOrden({...orden, productos: productosActualizados});
    //    setOrden(prevOrden => {
    //     const productosActualizados = [...prevOrden.productos];
    //     productosActualizados[indexProducto] = productoModificado;
    //     return {...prevOrden, productos: productosActualizados};
    // });

    setOrden(prevOrden => {
      const productosActualizados = prevOrden.productos.map((p, idx) => {
          if (idx === indexProducto) {
              return {
                  ...p,
                  receta: p.receta.map((ing, ingIdx) => {
                      if (ingIdx === ingIndex) {
                          return {...ing, checked: !ing.checked};
                      }
                      return ing;
                  })
              };
          }
          return p;
      });
      return {...prevOrden, productos: productosActualizados};
  });
        console.log("Productos actualizados:", productosActualizados);
        forceUpdate();
    }
};



  
  const handleConfirmSave = () => {
    setShowConfirmModal(false);
   
  };
  const handleCancelSave = () => {
    setShowConfirmModal(false);
  };

  // Función para filtrar productos por nombre
  // const filtrarProductosPorNombre = (nombre) => {
  //   return productos.filter(producto =>
  //     producto.nombre.toLowerCase().includes(nombre.toLowerCase())
  //   );
  // };

  // Función para manejar cambios en el campo de búsqueda
  const handleBuscarNombre = (event) => {
    setFiltroNombre(event.target.value);
  };

  // Filtrar productos según el nombre ingresado
 // const productosFiltrados = filtroNombre ? filtrarProductosPorNombre(filtroNombre) : productos;


  const filtrarProductosPorNombre = (productos, nombre) => {
    return productos.filter(producto =>
      producto.nombre.toLowerCase().includes(nombre.toLowerCase())
    );
  };

 
  const productosFiltrados = filtrarProductosPorNombre(productos, filtroNombre);


  console.log(productosFiltrados)



  const incrementarCantidad = (index) => {
    const nuevosProductos = [...orden.productos];
    nuevosProductos[index].unidad += 1; // Incrementar la cantidad en 1
    console.log('producto ingresado')
     console.log(nuevosProductos)
    // Calcular el subtotal y el total actualizados
    const subtotal = nuevosProductos.reduce((acc, producto) => acc + (producto.precio || 0) * (producto.unidad|| 1), 0);
    const iva = subtotal * 0.16; // Suponiendo un IVA del 12%
    const total = subtotal + iva;
  
    setOrden({ productos: nuevosProductos, subtotal, iva, total });
  };
  
  // Función para decrementar la cantidad de un producto en el pedido
  const decrementarCantidad = (index) => {
    const nuevosProductos = [...orden.productos];
    nuevosProductos[index].unidad -= 1; // Incrementar la cantidad en 1
    console.log('producto ingresado')
     console.log(nuevosProductos)
    
  // Verificar si la cantidad es mayor que 1 antes de decrementar
  if (nuevosProductos[index].unidad > 1) {
    nuevosProductos[index].unidad -= 1;
  } else {
    // Si la cantidad es 1 o menos, no decrementamos más
    return;
  }
  
  // Calcular el subtotal y el total actualizados
  const subtotal = nuevosProductos.reduce((acc, producto) => acc + (producto.precio || 0) * (producto.unidad || 1), 0);
  const iva = subtotal * 0.16; // Suponiendo un IVA del 16%
  const total = subtotal + iva;

  setOrden({ productos: nuevosProductos, subtotal, iva, total });
  };

  const handleGuardarOrden = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleConfirma = () => {
    // Aquí puedes colocar la lógica para guardar la orden

    guardarOrden()
    setShowModal(false);
  };

    return (
      
       <div className="container-fluid h-100" >
       <div className="row h-100" style={{ backgroundColor: '#ffffff' }}>
    
       <div className="col-md-2" style={{ overflowY: 'auto', msOverflowStyle: 'none', scrollbarWidth: 'none', backgroundColor: '#ffffff', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
       <h2>Categorías</h2>
            <Categorias categorias={categorias} seleccionarCategoria={setCategoriaSeleccionada} />
        </div>    

        
        <div className="col-md-5" style={{ backgroundColor: '#ffffff',  alignItems: 'center', justifyContent: 'center' }}>
        <div className="col-md-12" style={{ overflowY: 'auto', msOverflowStyle: 'none', scrollbarWidth: 'none', backgroundColor: '#ffffff', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <h2>Lista de Productos</h2>
        </div>
                    <div className="col-md-12" style={{ backgroundColor: '#ffffff' }}>
            <Form.Group>
                        <Form.Control
                        type="text"
                        placeholder="Buscar por nombre"
                        value={filtroNombre}
                        onChange={handleBuscarNombre}
                       
                      />
                    <i className="bi bi-search google-search-icon"></i> 
                     
          </Form.Group>
        </div>
        <LineDivision></LineDivision>
            <Productos productos={productosFiltrados} 
            seleccionarProducto={abrirModal} 
            categoriaSeleccionada={categoriaSeleccionada} 
            toggleIngredientereceta={toggleIngredientereceta}
            
             />
        </div> 
        
        <div className="col-md-5" style={{ overflowY: 'auto', msOverflowStyle: 'none', scrollbarWidth: 'none' }}>
       
        <div className="col-md-12" style={{ overflowY: 'auto', msOverflowStyle: 'none', scrollbarWidth: 'none', backgroundColor: '#ffffff', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <h2>Detalle de Pedido</h2>
        </div>
            <DetallePedidos
              orden={orden}
              eliminarProducto={eliminarProducto}
              incrementarCantidad={incrementarCantidad}
              decrementarCantidad={decrementarCantidad}
            />

             <button onClick={handleGuardarOrden} className="btn btn-primary btn-block">Guardar Orden</button>

             <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmación</Modal.Title>
        </Modal.Header>
        <Modal.Body>¿Está seguro de que desea guardar la orden?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleConfirma}>
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>
         </div>  
         
            <ConfirmSaveModal
              show={showConfirmModal}
              onConfirm={handleConfirmSave}
              onClose={cerrarModal}
              ingredientesSeleccionados={ingredientesSeleccionados}
                    toggleIngrediente={toggleIngrediente}
                    productosAdicionales={productosAdicionales}
                    agregarProductoConIngredientes={agregarProductoConIngredientes}
            />

    </div>
    </div>
    
      
     
    );
  
  
  
};
export default PedidoPage;