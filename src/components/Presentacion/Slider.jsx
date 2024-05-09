import React, { useState,useEffect } from 'react';

import '../../styles/styles.css'
import { motion } from 'framer-motion'



const Slider = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [widthOfImage, setWidthOfImage] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0);
    const imagesWithInfo = [
        { src: '../../images/banner/bebida1.jpg', title: 'Título 1', description: 'Descripción 1' },
        { src: '../../images/banner/bebida2.jpg', title: 'Título 2', description: 'Descripción 2' },
        { src: '../../images/banner/bebida3.jpg', title: 'Título 1', description: 'Descripción 1' },
        { src: '../../images/banner/bebida4.jpg', title: 'Título 2', description: 'Descripción 2' },
        { src: '../../images/banner/bebida5.jpg', title: 'Título 1', description: 'Descripción 1' },
        { src: '../../images/banner/bebida6.jpg', title: 'Título 2', description: 'Descripción 2' },
        { src: '../../images/banner/bebida6.jpg', title: 'Título 3', description: 'Descripción 2' },
        { src: '../../images/banner/bebida6.jpg', title: 'Título 3', description: 'Descripción 2' },
        { src: '../../images/banner/bebida6.jpg', title: 'Título 2', description: 'Descripción 2' },
        { src: '../../images/banner/bebida6.jpg', title: 'Título 4', description: 'Descripción 2' },
        { src: '../../images/banner/bebida4.jpg', title: 'Título 5', description: 'Descripción 2' },
        { src: '../../images/banner/bebida2.jpg', title: 'Título 6', description: 'Descripción 2' },
        { src: '../../images/banner/bebida3.jpg', title: 'Título 7', description: 'Descripción 2' },
        // Agrega más objetos según sea necesario
      ];
     
      const [marginBetweenImages, setMarginBetweenImages] = useState(0);

      
      useEffect(() => {
        // Función para cargar la imagen y obtener su ancho
        const getImageWidth = async () => {
          const img = new Image();
          img.src = imagesWithInfo[0].src; // Obtén la fuente de la primera imagen
          img.onload = () => {
            setWidthOfImage(img.width);
          };
        };
    
        // Función para obtener el margen entre las imágenes basado en estilos CSS
        const getMarginBetweenImages = () => {
          // Obtenemos el estilo CSS aplicado a las imágenes
          const imageStyles = window.getComputedStyle(document.querySelector(".item img"));
          // Extraemos el valor del margen
          const marginValue = imageStyles.marginRight; // Suponiendo que el margen está definido en el lado derecho de la imagen
    
          // Convertimos el valor del margen a píxeles
          const parsedMargin = parseFloat(marginValue.replace("px", ""));
          // Establecemos el margen entre las imágenes
          setMarginBetweenImages(parsedMargin);
        };
    
        getImageWidth();
        getMarginBetweenImages();
      }, [imagesWithInfo]);

      const handleImageClick = (image) => {
        setSelectedImage(image);
        setShowModal(true);
        console.log('es ')
      };
    
      // Función para cerrar el modal
      const closeModal = () => {
        setShowModal(false);
        setSelectedImage(null);
      };
//const marginBetweenImages = 14;
      const totalWidth = imagesWithInfo.length * (widthOfImage + marginBetweenImages);
      // Función para avanzar al siguiente slide
  const nextSlide = () => {

    console.log('dato')
    setCurrentIndex(prevIndex => (prevIndex + 1) % imagesWithInfo.length);
  };

  // Función para retroceder al slide anterior
  const prevSlide = () => {
    setCurrentIndex(prevIndex => (prevIndex - 1 + imagesWithInfo.length) % imagesWithInfo.length);
  };
  return (
    <div className='slider-container'>
      <div className='slider-wrapper'>
        <motion.div className='slider' style={{ width: totalWidth }} drag='x' dragConstraints={{ right: 0, left: -totalWidth }}>
          {imagesWithInfo.map((image, index) => (
            <motion.div key={index} className={`item ${index === currentIndex ? 'active' : ''}`} >
              <img src={image.src} alt={image.title} />
              <div className="info">
                <h3>{image.title}</h3>
                <p>{image.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <div className="arrows">
          <button onClick={prevSlide}>&lt;</button>
          <button onClick={nextSlide}>&gt;</button>
        </div>
      </div>
    </div>
   
  )
}

export default Slider