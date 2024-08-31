import React, { useEffect, useState } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isClicked, setIsClicked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const addEventListeners = () => {
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mouseup', onMouseUp);
  };

  const onMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  const onMouseDown = () => {
    setIsClicked(true);
  };

  const onMouseUp = () => {
    setIsClicked(false);
  };

  useEffect(() => {
    addEventListeners();
    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
    };
  }, []);

  return (
    <div>
      <div
        className={`custom-cursor ${isClicked ? 'clicked' : ''} ${
          isHovered ? 'hovered' : ''
        }`}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
      <div
        className="custom-cursor-shadow"
        style={{
          left: `${position.x - 20}px`,
          top: `${position.y - 20}px`,
        }}
      />
    </div>
  );
};

export default CustomCursor;
