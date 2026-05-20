import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

// CHANGE: Images import kar li
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';

const TransformationSection = () => {
  const [currentImage, setCurrentImage] = useState(0);

  // CHANGE: Ab imported images use kar rahe hain
  const transformations = [
    { image: img1, title: "12 Weeks Transformation" },
    { image: img2, title: "6 Months Journey" },
    { image: img3, title: "Body Recomposition" }
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % transformations.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + transformations.length) % transformations.length);
  };

  // Styles
  const sectionStyle = {
    padding: '80px 20px',
    background: 'linear-gradient(135deg, #0a0a0a 0%, #0f0f0f 100%)'
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto'
  };

  const titleStyle = {
    textAlign: 'center',
    fontSize: '2rem',
    marginBottom: '40px',
    color: '#e31b23',
    letterSpacing: '2px'
  };

  const sliderStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '20px',
    flexWrap: 'wrap'
  };

  const btnStyle = {
    background: 'rgba(227, 27, 35, 0.2)',
    border: '1px solid rgba(227, 27, 35, 0.5)',
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'all 0.3s',
    color: 'white',
    fontSize: '1.2rem'
  };

  const splitContainerStyle = {
    position: 'relative',
    maxWidth: '800px',
    margin: '0 auto',
    borderRadius: '20px',
    overflow: 'hidden',
    boxShadow: '0 20px 40px rgba(0,0,0,0.4)'
  };

  const splitWrapperStyle = {
    position: 'relative',
    width: '100%'
  };

  const splitImageStyle = {
    width: '100%',
    height: 'auto',
    display: 'block'
  };

  const labelsStyle = {
    position: 'absolute',
    top: '20px',
    left: 0,
    right: 0,
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0 20px',
    zIndex: 2
  };

  const labelStyle = {
    background: 'rgba(0,0,0,0.8)',
    backdropFilter: 'blur(10px)',
    padding: '8px 20px',
    borderRadius: '30px',
    fontSize: '0.85rem',
    fontWeight: 'bold'
  };

  const beforeLabelStyle = {
    ...labelStyle,
    borderLeft: '3px solid #ff6b6b',
    color: '#ff6b6b'
  };

  const afterLabelStyle = {
    ...labelStyle,
    borderRight: '3px solid #00a86b',
    color: '#00a86b'
  };

  const dividerStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 3
  };

  const vsCircleStyle = {
    width: '60px',
    height: '60px',
    background: 'linear-gradient(135deg, #e31b23, #ff6b6b)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: '1.2rem',
    color: 'white',
    animation: 'bounce 2s infinite',
    boxShadow: '0 0 20px rgba(227,27,35,0.5)'
  };

  const infoStyle = {
    marginTop: '30px',
    textAlign: 'center'
  };

  const transTitleStyle = {
    fontSize: '1.2rem',
    color: '#e31b23',
    fontWeight: 'bold',
    marginBottom: '15px'
  };

  const dotsStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
    margin: '20px 0'
  };

  const dotStyle = {
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    background: '#333',
    cursor: 'pointer',
    transition: 'all 0.3s'
  };

  const activeDotStyle = {
    ...dotStyle,
    background: '#e31b23',
    width: '30px',
    borderRadius: '10px'
  };

  const textStyle = {
    color: '#aaa',
    fontSize: '0.9rem',
    letterSpacing: '1px'
  };

  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        <h2 style={titleStyle}>REAL TRANSFORMATION STORIES</h2>
        
        <div style={sliderStyle}>
          <button style={btnStyle} onClick={prevImage}>
            <FaArrowLeft />
          </button>
          
          <div style={splitContainerStyle}>
            <div style={splitWrapperStyle}>
              <img 
                src={transformations[currentImage].image} 
                alt="Transformation"
                style={splitImageStyle}
              />
              <div style={labelsStyle}>
                <div style={beforeLabelStyle}>BEFORE</div>
                <div style={afterLabelStyle}>AFTER</div>
              </div>
              <div style={dividerStyle}>
                <div style={vsCircleStyle}>VS</div>
              </div>
            </div>
          </div>
          
          <button style={btnStyle} onClick={nextImage}>
            <FaArrowRight />
          </button>
        </div>
        
        <div style={infoStyle}>
          <p style={transTitleStyle}>{transformations[currentImage].title}</p>
          <div style={dotsStyle}>
            {transformations.map((_, idx) => (
              <span 
                key={idx} 
                style={idx === currentImage ? activeDotStyle : dotStyle}
                onClick={() => setCurrentImage(idx)}
              />
            ))}
          </div>
          <p style={textStyle}> With proper nutrition + right supplements</p>
        </div>
      </div>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        button:hover {
          background: #e31b23 !important;
          transform: scale(1.1);
        }
      `}</style>
    </section>
  );
};

export default TransformationSection;