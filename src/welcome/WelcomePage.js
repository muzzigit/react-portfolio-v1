import React, { useEffect, useState } from 'react';
import '../styles/WelcomePage.css';
import Background from '../background/Background'; // Import Background component

const WelcomePage = ({ onFinish }) => {
  const [text, setText] = useState('');
  const fullText = `  npm start\n> portfolio@0.1.0 start /muzzikhan\n> react-scripts start\n\nStarting the development server...`;

  useEffect(() => {
    let index = 0;
    const typingSpeed = 30;

    const typeEffect = () => {
      if (index < fullText.length) {
        setText((prevText) => `${prevText}${fullText.charAt(index)}`);
        index++;
        setTimeout(typeEffect, typingSpeed);
      } else {
        setTimeout(() => {
          onFinish();
        }, 2000);
      }
    };

    typeEffect();
  }, [fullText, onFinish]);

  return (
    <div className="welcome-container">
      <Background /> {/* Add Background component here */}
      <div className="window">
        <div className="dots">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
        </div>
        <div className="text-container">{text}</div>
      </div>
    </div>
  );
};

export default WelcomePage;
