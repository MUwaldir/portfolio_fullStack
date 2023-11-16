import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


// ... (otras importaciones)

const TechnologiesSlider = () => {
    const technologies = [
      'React',
      'Node.js',
      'Express',
      'MongoDB',
      'Vue.js',
      'JavaScript',
      'HTML',
      'CSS',
      'Redux',
      'GraphQL',
      'Git',
      'Webpack',
      'PostgreSQL',
      'Firebase',
      'Docker'
    ];
  
    // Mueve la declaración de NextArrow y PrevArrow antes de settings
    const NextArrow = (props) => {
      const { className, style, onClick } = props;
      return (
        <div
          className={className}
          style={{ ...style, display: 'block', background: 'gray' }}
          onClick={onClick}
        />
      );
    };
  
    const PrevArrow = (props) => {
      const { className, style, onClick } = props;
      return (
        <div
          className={className}
          style={{ ...style, display: 'block', background: 'gray' }}
          onClick={onClick}
        />
      );
    };
  
    const settings = {
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
    };
  
    return (
      <div className="bg-gray-100 p-4">
        <h2 className="text-2xl font-bold mb-4">Tecnologías</h2>
        <Slider {...settings}>
          {technologies.map((tech, index) => (
            <div key={index} className="flex-none bg-white p-3 rounded-md">
              {tech}
            </div>
          ))}
        </Slider>
      </div>
    );
  };
  
  export default TechnologiesSlider;
  