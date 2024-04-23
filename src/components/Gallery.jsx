import { useState } from 'react';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';

function Gallery({images,title}) {
  console.log(images)
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="py-5">
      <h2 className='text-teal-500 font-bold text-4xl text-center pb-7'>{title}</h2>
      <div className='gallery  mb-5 '>
      <img  src={images[currentIndex]} alt={`Imagen ${currentIndex + 1}`} className="gallery-image max-w-sm md:max-w-lg h-96 hover:border-2 hover:border-teal-500" />
      </div>
      <div className="gallery-buttons flex justify-evenly ">
        <button className='text-teal-600 text-4xl hover:text-teal-500' onClick={goToPrevious}><FaArrowAltCircleLeft/></button>
        <button className='text-teal-600 text-4xl hover:text-teal-500' onClick={goToNext}><FaArrowAltCircleRight/></button>
      </div>
    </div>
  );
}

export default Gallery;

